import FormControl from '@mui/material/FormControl';
import {Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {SelectionItemCheckbox} from "./InputCheckbox";


export default function InputRadio(props) {
    const {data, handleUpdateData, questionName, language} = props;
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
                                key={item[0]}
                                value={item[0]}
                                control={
                                <Radio
                                    icon={<SelectionItemCheckbox selected={false} text={item[1]}/>}
                                    checkedIcon={<SelectionItemCheckbox selected={true} text={item[1]}/>}

                                />}
                            />)
                    })}
            </RadioGroup>


    );
}