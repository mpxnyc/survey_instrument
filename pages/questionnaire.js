import {questionnaire} from "../const/questionnaire";
import {Card, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import theme from "../const/theme";
import {config} from "../const/config";

export default function Questionnaire() {

    const missingQuestions = Object.keys(questionnaire).filter((item) => !questionnaire.ordering.includes(item))

    const questions = questionnaire.ordering.map(
        (item) => {
            return (
                questionnaire[item].questionType === "map" ?
                    <QuestionMap questionName={item}/> :
                    <QuestionPair questionName={item}/>)
        }
    )



    return <Box sx={{backgroundColor: "#7F3F98"}}>
        {questions}
    </Box>
}



function QuestionMap(props) {
    const {questionName} = props;

    const mapQuestionInstruction   = <QuestionPair questionName={questionnaire[questionName].mapQuestionInstruction}/>
    const mapQuestionSafety        = <QuestionPair questionName={questionnaire[questionName].mapQuestionSafety}/>
    const mapRemovePinQuestion     = <QuestionPair questionName={questionnaire[questionName].mapRemovePinQuestion}/>
    const mapQuestionDetail        = <QuestionPair questionName={questionnaire[questionName].mapQuestionDetail}/>

    const personPlaceRelation      =
        <Box>
            <Typography variant={"h5"} color={"white"}>{questionName}</Typography>
            <Typography variant={"h1"} color={"white"}>{questionnaire[questionName].personPlaceRelation}</Typography>
        </Box>


    const mapQuestionOrder         = questionnaire[questionName].mapQuestionOrder.map(
        (item) => {
            return <QuestionPair questionName={item}/>
        }
    )


    return (
        <Card sm={10} sx={{backgroundColor: config.colorText}} >
            {personPlaceRelation}
            {mapQuestionInstruction}
            {mapQuestionDetail}
            {mapQuestionSafety}
            {mapRemovePinQuestion}
            {mapQuestionOrder}
        </Card>
    )

}

function QuestionPair(props) {
    const {questionName} = props;

    const result =
        <Grid container>
            <Grid items>
                <QuestionCard questionName={questionName} language={"english"}/>
            </Grid>
            <Grid items>
                <QuestionCard questionName={questionName} language={"spanish"}/>
            </Grid>
        </Grid>
    return result


}

function QuestionCard(props) {
    const {questionName, language} = props;

    const questionUnit = questionnaire[questionName]

    const variableName = <Typography variant={"caption"}>{questionName}</Typography>
    const question     = <Typography variant={"body1"} gutterBottom>{questionUnit && questionUnit.question && questionUnit.question[language]}</Typography>

    const optionsArray = questionUnit.options && questionUnit.options[language] && (questionUnit.options[language].rows ?

        [...Object.entries(questionUnit.options[language].rows), ...Object.entries(questionUnit.options[language].columns)] :

        Object.entries(questionUnit.options[language]))


    const options = optionsArray && optionsArray.map((item, index) => {
            return (
                <Grid container>
                    <Grid item sm={6}>
                        <Typography variant={"body2"} color={index % 2 ? "red" : "blue"}>
                            {`${item[0]}`}
                        </Typography>
                    </Grid>

                    <Grid item sm={4}>
                        <Typography variant={"body2"} color={index % 2 ? "red" : "blue"}>
                            {`${item[1]}`}
                        </Typography>

                    </Grid>
                </Grid>
            )
        })

    const heading  = questionUnit && questionUnit.heading && <Typography variant={"body1"} gutterBottom>{questionUnit.heading[language]}</Typography>
    const subtitle = questionUnit && questionUnit.subtitle && <Typography variant={"body1"} gutterBottom>{questionUnit.subtitle[language]}</Typography>
    const body     = questionUnit && questionUnit.body && questionUnit.body[language].map((item, index) => {return <Typography color={index % 2 ? "red" : "blue"} variant={"body1"} sx={{margin: 1}} gutterBottom>{item}</Typography>})


    return (
        <Card sx={{margin: 3, padding: 3, width: 500}}>
            {variableName}
            {heading}
            {subtitle}
            {body}
            {question}
            <Box sx={{padding: 2}}>{options}</Box>
        </Card>
    )
}

function arraysEqual(a1,a2) {
    /* WARNING: arrays must not contain {objects} or behavior may be undefined */
    return JSON.stringify(a1)==JSON.stringify(a2);
}