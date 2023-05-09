import {questionnaire} from "../const/questionnaire";
import {Card, Checkbox, FormControlLabel, Grid, Stack} from "@mui/material";
import {Item} from "./InputRadioEmoji";

import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../const/theme";

export const CheckboxQuestion = (props) => {
    const {
        language,
        questionCurrent,
        data,
        handleUpdateData

    } = props;



    const n = Object.entries(questionnaire[questionCurrent] && questionnaire[questionCurrent].options && questionnaire[questionCurrent].options[language]).length

    const answers = Object.entries(questionnaire[questionCurrent] && questionnaire[questionCurrent].options && questionnaire[questionCurrent].options[language])



    let optionArray = []

    for (let i = 0; i < n; i++) {

        optionArray[i] =
            <Grid  item key={answers[i][0]} xs={4} sm={4} md={4} lg={4} xl={4} alignItems={"center"} alignContent={"center"}>
                <Item>
                    <FormControlLabel
                        onChange={(event) => {handleUpdateData(questionCurrent, event.target.value)}}
                        value={answers[i][0]}
                        control={<Checkbox icon={<SelectionItemCheckbox text={answers[i][1]} selected={false}/>} checkedIcon={<SelectionItemCheckbox text={answers[i][1]} selected={true}/>} />}
                        checked={data && data[answers[i][0]]}
                        labelPlacement="bottom"
                        sx={{margin: 0, backgroundColor: theme.palette.background.paper}}
                    />
                </Item>
            </Grid>

    }


    return (
        <Box sx={{padding: 0}} >
            <FormControl>

                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0 }}

                >
                    {
                        optionArray && optionArray
                    }
                </Grid>
            </FormControl>
        </Box>
    )


}

const SelectionItemCheckbox = (props) => {

    const {text, selected} = props;

    return(
        <Card

            elevation={0}
            sx={
                {
                    margin: 0,
                    backgroundColor: selected ? "blue" : "transparent",
                    color: selected ? "blue" : "transparent",
                    border: 4,
                    width: 80,
                    height: 100,
                    alignContent: "center",
                    alignItems: "center",
                    // padding: selected ? 6 : 6,
                    borderRadius: 2,
                    alignSelf: "center"
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
                        height:"100%"
                    }
                }
            >

                <Typography
                    alignContent={"center"}
                    fontSize={selected ? 16 : 12}
                    fontWeight={"bold"}
                    color={selected ? theme.palette.text.primary : theme.palette.text.primary }
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