import FormControl from '@mui/material/FormControl';
import {
    Autocomplete,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField
} from "@mui/material";
import * as React from "react";
import {questionnaire} from "../const/questionnaire";
import {useEffect, useState} from "react";

export default function InputAutoComplete(props) {
    const {data, handleUpdateData, questionName, language} = props;
    const [value, setValue] = useState(data[questionName]);
    const [inputValue, setInputValue] = useState()


    const handleTextBoxChange = (event) => {

        setValue(
            (old) => {
                const result = {...old, [event.target.name]: event.target.value}

                handleUpdateData(questionName, result)

                return result
            }

        )

    }

    const handleInputValueChange = (event, newValue) => {
        setInputValue(
            (old) => {
                const result = {...old, [event.target.name]: event.target.value}

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
                <Stack>
                    {Object.entries(questionnaire[questionName].options[language]).map((item) => {return (<FormControlLabel control={<Autocomplete options={questionnaire[questionName].wordList} renderInput={(params) => <TextField {...params}  />} value={value && value[item[0]]} onChange={handleTextBoxChange} inputValue={inputValue} onInputValueChange={handleInputValueChange} name={item[0]}/>}  />)})}
                </Stack>
            </FormGroup>

    );
}