import FormControl from '@mui/material/FormControl';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function InputPrompt(props) {
    const {questionName, language} = props;

    return (
        <Box>
            <Typography>{questionnaire[questionName].heading[language]}</Typography>
            <Typography>{questionnaire[questionName].body[language]}</Typography>
        </Box>
    );
}