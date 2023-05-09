import FormControl from '@mui/material/FormControl';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Typography from "@mui/material/Typography";


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
            >
                {Object.entries(questionnaire[questionName].options[language]).map((item) => {return (<FormControlLabel key={item[0]} value={item[0]} control={<Radio />} label={<Typography color="primary">{item[1]}</Typography>} />)})}
            </RadioGroup>

    );
}