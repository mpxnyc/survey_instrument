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

const SelectionItemCheckbox = (props) => {

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
                    borderColor: theme.palette.primary.main,
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
                <Box
                    sx={
                        {
                            position: "relative",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0.7
                        }
                    }>
                    <RandomIcon selected={true} size={selected ? 10 : 50}/>
                </Box>

                <Box
                    sx={
                        {
                            position: "relative",
                            left: 0,
                            top: 0,
                            right: 0,
                            bottom: 0
                        }
                    }>
                    <Typography
                        alignContent={"center"}
                        fontSize={selected ? 16 : 12}
                        fontWeight={"bold"}
                        color="primary"

                    >
                        {text}
                    </Typography>
                </Box>

            </Stack>
        </Card>
    )
}