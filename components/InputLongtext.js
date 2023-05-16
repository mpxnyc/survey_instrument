import FormControl from '@mui/material/FormControl';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function InputLongtext(props) {

    const {data, handleUpdateData, questionName, language, colorBackground, colorText} = props;
    return (
        <Box>
            <Typography variant={"h2"} color={colorText}>{questionnaire[questionName].heading && questionnaire[questionName].heading[language]}</Typography>
            <Typography variant={"h5"} color={colorText}>{questionnaire[questionName].subtitle && questionnaire[questionName].subtitle[language]}</Typography>
            {questionnaire[questionName].body[language].map(
                (item, index) => {
                    return(<Typography key={index} variant={"body1"} color={colorText} sx={{margin: 2}}>{item}</Typography>)
                }
            )}
        </Box>
    );
}