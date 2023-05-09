import FormControl from '@mui/material/FormControl';
import {Card, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack} from "@mui/material";
import * as React from "react";
import {questionnaire} from "../const/questionnaire";
import {useEffect} from "react";
import Typography from "@mui/material/Typography";
import theme from "../const/theme";
import RandomIcon from "./ControlGraphicsIcons";
import Box from "@mui/material/Box";

export default function InputCheckbox(props) {
    const {data, handleUpdateData, questionName, language} = props;
    const [value, setValue] = React.useState(data[questionName]);


    const handleCheckBoxChange = (event) => {

        setValue(
            (old) => {

                const result = {...old, [event.target.name]: event.target.checked}

                handleUpdateData(questionName, result)

                return result
            }

        )

    }




    return (

            <FormGroup
                id={questionName}
                row={true}
                aria-labelledby="demo-radio-buttons-group-label"
            >
                {Object.entries(questionnaire[questionName].options[language]).map(
                    (item) => {

                    return (
                        <FormControlLabel

                            control={
                            <Checkbox
                                checked={value && value[item[0]]}
                                onChange={handleCheckBoxChange}
                                name={item[0]}
                                icon={<SelectionItemCheckbox selected={false} text={item[1]}/>}
                                checkedIcon={<SelectionItemCheckbox selected={true} text={item[1]}/>}
                            />
                        }
                        />)})}

            </FormGroup>

    );
}

export const SelectionItemCheckbox = (props) => {

    const {text, selected} = props;

    return(
        <Card

            backgroundColor="primary"
            color="primary"
            elevation={0}
            sx={
                {
                    margin: 0,

                    border: selected ? 4: 0,
                    borderColor: theme.palette.secondary.main,
                    backgroundColor: selected ? theme.palette.secondary.main : null,
                    width: 100,
                    height: 100,
                    alignContent: "center",
                    alignItems: "center",
                    padding: 1,
                    borderRadius: 1000,
                    alignSelf: "center"
                }
            }
        >
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                alignSelf={"center"}

            >
                <Box
                    height={"100%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignSelf={"center"}
                    sx={{display: "flex", position: "absolute", top: 0, left: 0, bottom: 0, right: 0, opacity: selected ? 0.2 : 0.2, textAlign: "center"}}
                    >

                </Box>

                <Box
                    justifyContent={"center"}
                    alignItems={"center"}
                    alignSelf={"center"}
                    height={"100%"}
                    sx={{display: "flex", position: "absolute",  left: 0, bottom: 0, right: 0, textAlign: "center"}}
                    >
                    <Typography
                        align={"center"}
                        fontSize={selected ? 25 : 16}
                        fontWeight={"bold"}
                        color= {selected ? "white" : theme.palette.secondary.main}
variant={"caption"}
                    >
                        {text}
                    </Typography>
                </Box>

            </Stack>
        </Card>
    )
}