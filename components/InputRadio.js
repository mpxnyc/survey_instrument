import FormControl from '@mui/material/FormControl';
import {Card, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, Stack} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import theme from "../const/theme";
import Box from "@mui/material/Box";


export default function InputRadio(props) {
    const {data, handleUpdateData, questionName, language, colorBackground, colorText} = props;
    const [value, setValue] = useState(data[questionName]);

    const handleChange = (event) => {
        setValue(() => {
            handleUpdateData(questionName, event.target.value)
            return event.target.value
        })
    }


    return (

            <RadioGroup
                id={questionName}
                row={true}
                aria-labelledby="demo-radio-buttons-group-label"
                //name="radio-buttons-group"
                value={value}
                onChange={handleChange}
                sx={{display: "flex",  textAlign: "center", alignItems: "center", alignContent: "center", alignSelf: "center", justifySelf: "center", justifyContent: "center", justifyItems: "center"}}
            >
                {Object.entries(questionnaire[questionName].options[language]).map(
                    (item) => {
                        return (
                            <FormControlLabel
                                sx={{margin: 0}}
                                key={item[0]}
                                value={item[0]}
                                control={
                                <Radio
                                    icon={<SelectionItemRadio selected={false} text={item[1]} colorBackground={colorBackground} colorText={colorText}/>}
                                    checkedIcon={<SelectionItemRadio selected={true} text={item[1]} colorBackground={colorBackground} colorText={colorText}/>}

                                />}
                            />)
                    })}
            </RadioGroup>


    );
}



const SelectionItemRadio = (props) => {

    const {text, selected, colorBackground, colorText} = props;



    return(
        <Card

            color={colorText}
            elevation={0}
            sx={
                {
                    margin: 0,
                    backgroundColor: selected ? colorText : colorBackground,
                    width: 50,
                    height: 50,
                    alignContent: "center",
                    alignItems: "center",
                    padding: 4,
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

                    >
                        {text}
                    </Typography>
                </Box>

            </Stack>
        </Card>
    )
}