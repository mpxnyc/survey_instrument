import FormControl from '@mui/material/FormControl';
import {Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup} from "@mui/material";
import * as React from "react";
import {questionnaire} from "../const/questionnaire";
import {useEffect} from "react";

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
                {Object.entries(questionnaire[questionName].options[language]).map((item) => {return (<FormControlLabel control={<Checkbox checked={value && value[item[0]]} onChange={handleCheckBoxChange} name={item[0]}/>} label={item[1]} />)})}
            </FormGroup>

    );
}