import FormControl from '@mui/material/FormControl';
import {Card, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {config} from "../const/config";


export default function OutputUserNameDisplay(props) {
    const {data, handleUpdateData, questionName, language, colorBackground, colorText}= props;

    return (
        <Card sx={{backgroundColor: colorText, margin: 3}}>
            <Typography variant={"h4"} align={"center"} color={colorBackground}>
                {data[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName]}
            </Typography>

        </Card>
    );
}