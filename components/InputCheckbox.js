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
    const {data, handleUpdateData, questionName, language, colorBackground, colorText} = props;
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
                sx={{display: "flex",  textAlign: "center", alignItems: "center", alignContent: "center", alignSelf: "center", justifySelf: "center", justifyContent: "center", justifyItems: "center"}}


            >
                {Object.entries(questionnaire[questionName].options[language]).map(
                    (item) => {



                    return (
                        <FormControlLabel
                            key={item[0]}
                            sx={{margin: 0}}

                            control={
                            <Checkbox
                                checked={value[item[0]]}
                                onChange={handleCheckBoxChange}
                                name={item[0]}
                                icon={<SelectionItemCheckbox selected={false} text={item[1]} colorBackground={colorBackground} colorText={colorText}/>}
                                checkedIcon={<SelectionItemCheckbox selected={true} text={item[1]} colorBackground={colorBackground} colorText={colorText}/>}
                            />
                        }
                        />)})}

            </FormGroup>

    );
}

const SelectionItemCheckbox = (props) => {

    const {text, selected, colorBackground, colorText} = props;

    return(
        <Card

            color="primary"
            elevation={0}
            sx={
                {
                    margin: 0,

                    border: selected ? 2: 2,
                    borderColor: colorText,
                    backgroundColor: selected ? colorText : colorBackground,
                    width: 60,
                    height: 60,
                    alignContent: "center",
                    alignItems: "center",
                    padding: 5,
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

                        color= {selected ? colorBackground : colorText}
                        variant={"body2"}
                        sx={{padding: 2}}
                    >
                        {text}
                    </Typography>
                </Box>

            </Stack>
        </Card>
    )
}