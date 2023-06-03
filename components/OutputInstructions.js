import FormControl from '@mui/material/FormControl';
import {FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {config} from "../const/config";


export default function OutputInstructions(props) {
    const {questionName, language} = props;

    return (
        <Box>
            {questionnaire[questionName].body[language].map(
                (line, index) => {
                    return <Typography key={index} align="center" variant="body1" color={config.colorText} gutterBottom sx={{margin: 2}}>{line}</Typography>
                }
            )}

        </Box>
    );
}