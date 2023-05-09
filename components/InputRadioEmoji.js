import React, {useReducer, useState} from "react";
import {
    Box,
    Card,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, IconButton,
    Radio,
    RadioGroup,
    Stack,
    Typography
} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import RandomIcon from "./ControlGraphicsIcons";
import {styled} from "@mui/material/styles";
import theme from "../const/theme";

// language={language}
// questionCurrent={questionCurrent}
// setData={setSurveyData}
// data={surveyData}
// body={""}

export const RadioQuestion = (props) => {
    const {
        language,
        questionCurrent,
        data,
        handleUpdateData
    } = props;



    return (
        <Box sx={{margin: 0}}>
                <RadioGroup
                    row
                    value={data && data[questionCurrent]}
                    onChange={(event) => {handleUpdateData(questionCurrent, event.target.value)}}
                >
                    <RadioOptionGrid
                        questionCurrent={questionCurrent}
                        language={language}

                    />

                </RadioGroup>


        </Box>
    )
}

export const RadioHintQuestion = (props) => {
    const {
        language,
        questionCurrent,
        setData,
        data,
    } = props;

    const [, forceRerender] = useReducer(x => x + 1, 0, x => x + 1)
    const [showHint, setShowHint] = useState(false)

    return (
        <Box sx={{margin: 0}}>

            <FormControl>


                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={data && data[questionCurrent]}
                    onChange={
                        (event) => {
                            const newData = data;

                            newData[questionCurrent] = event.target.value
                            setData(newData);
                            forceRerender()
                        }

                    }
                >

                    <RadioOptionGrid
                        questionCurrent={questionCurrent}
                        language={language}
                    />
                </RadioGroup>
            </FormControl>

            <Stack>
                {<Box alignSelf={"center"}><IconButton onClick={() => {setShowHint(true)}} variant="outlined" size={"small"} sx={{color: "blue"}} ></IconButton></Box>}
            </Stack>

        </Box>
    )
}

const RadioOptionGrid = (props) => {

    const {questionCurrent, language} = props;


    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >
            {
                questionnaire[questionCurrent] && questionnaire[questionCurrent].options && Object.entries(questionnaire[questionCurrent].options[language]).map(responseOption => {

                    return(
                        <Box
                            item
                            key={responseOption[0]}
                             >

                            <Item>
                                <FormControlLabel
                                    labelPlacement="bottom"
                                    control={
                                        <Radio
                                            icon={<SelectionItem text={responseOption[1]} selected={false}/>}
                                            checkedIcon={<SelectionItem text={responseOption[1]} selected={true}/>}
                                        />}
                                    value={responseOption[0]}
                                    sx={{margin: 0}}
                                    label={""}/>
                            </Item>
                        </Box>
                    )
                })
            }
        </Grid>
    )
}

const SelectionItem = (props) => {

    const {text, selected} = props;

    return(
        <Card

            elevation={0}
            color={"primary"}
            sx={
                {
                    margin: 0,
                    border: 1,
                    borderColor: selected ? theme.palette.primary : "transparent",
                         width: selected ? 50 : 50,
                    height: selected ? 50 : 50,
                    alignContent: "center",
                    alignItems: "center",
                    padding: selected ? 0 : 0,
                    alignSelf: "center",
                    borderRadius: 0
                }
            }
        >

            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                alignSelf={"center"}
                sx={
                    {
                        margin: 0,
                        position: "relative",
                        bottom: 0,
                        display: "flex",
                        direction:"column",
                        height:"100%",

                    }
                }
            >



                <Typography
                    alignContent={"center"}
                    fontSize={selected ? 14 : 14}
                    color="primary"
                    sx={
                        {
                            position: "relative"
                        }
                    }
                >
                    {text}

                </Typography>
            </Stack>
        </Card>
    )
}

export const Item = styled(Box)(({theme}) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: "center",
    alignContent: "center",
    borderRadius: 500
}));