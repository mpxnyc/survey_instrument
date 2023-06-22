import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {questionnaire} from "../const/questionnaire";
import OutputUserNameDisplay from "./OutputUserNameDisplay";
import InputRadio from "./InputRadio";
import * as React from "react";
import {config} from "../const/config";

export default function InputUserNameConfirm(props) {

    const {data, handleUpdateData, questionName, language, colorBackground, colorText} = props;

    const cookieFound = data && data[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName]


    return (
        <Box>
            <Typography margin={2} color={colorText} variant={"h3"}>{questionnaire[questionName] && questionnaire[questionName].heading && questionnaire[questionName].heading[language]}</Typography>
            {/*{ cookieFound && <OutputUserNameDisplay*/}
            {/*    language={language}*/}
            {/*    questionName={questionName}*/}
            {/*    data={data}*/}
            {/*    handleUpdateData={handleUpdateData}*/}
            {/*    colorBackground={colorBackground}*/}
            {/*    colorText={colorText}*/}
            {/*/>}*/}
            {/*{cookieFound && <InputRadio*/}
            {/*    language={language}*/}
            {/*    questionName={questionName}*/}
            {/*    data={data}*/}
            {/*    handleUpdateData={handleUpdateData}*/}
            {/*    colorBackground={colorBackground}*/}
            {/*    colorText={colorText}*/}
            {/*/>}*/}
        </Box>
    )
}