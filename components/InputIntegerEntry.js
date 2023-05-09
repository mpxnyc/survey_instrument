import FormControl from '@mui/material/FormControl';
import {Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Stack, TextField} from "@mui/material";
import * as React from "react";
import {questionnaire} from "../const/questionnaire";
import {useEffect} from "react";

export default function InputIntegerEntry(props) {
    const {data, handleUpdateData, questionName, language} = props;
    const [value, setValue] = React.useState(data[questionName]);


    const handleTextBoxChange = (event) => {

        setValue(
            (old) => {
                const result =  event.target.value

                handleUpdateData(questionName, result)

                return result
            }

        )

    }




    return (

        <TextField type={"number"} value={value} onChange={handleTextBoxChange} sx={{justifySelf: "center"}} />

    );
}