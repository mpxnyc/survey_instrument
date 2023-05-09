import {useEffect, useState} from "react";
import {Stack, TextField} from "@mui/material";
import * as React from "react";
import {levenshteinDistance} from "../lib/utilityFunctions";
import {config} from "../const/config";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import {RWebShare} from "react-web-share";
import {questionnaire} from "../const/questionnaire";
import services from "../lib/services";

export default function AnalysisLab(props) {



    const {currentVirus, setCurrentView, surveyData, language} = props;

    const baseURL = process.env.NEXT_PUBLIC_BASE_URL

    const urlViralGameShare = new URL(baseURL)
    urlViralGameShare.searchParams.append(config.referralSettings.virusGameIdName, surveyData[config.systemGeneratedVariables.variableNameForSurveyDataVirusCreatedId] && encodeURIComponent(surveyData[config.systemGeneratedVariables.variableNameForSurveyDataVirusCreatedId]))
    urlViralGameShare.searchParams.append(config.referralSettings.referrerIdName, surveyData.publicId && encodeURIComponent(surveyData.publicId))
    urlViralGameShare.searchParams.append(config.referralSettings.referralType.settingName, encodeURIComponent(config.referralSettings.referralType.values.friend))
    urlViralGameShare.searchParams.append(config.referralSettings.referrerLanguage.settingName, encodeURIComponent(config.referralSettings.referrerLanguage.values[language]))


    const transmitButton =
        <RWebShare
            data={{
                text: "Hello! Here is a virus. Lets play!",
                url: urlViralGameShare,
                title: "CanvasViralGame!",
            }}
            onClick={() => {}}
        >
            <Button variant={"contained"} >Transmit</Button>
        </RWebShare>




const handleTransmit = () => {

}

const handleMutate = () => {
    setCurrentView("mutate")
}

const handleCreate = () => {
    setCurrentView("create")
}






    const viruscontent = <Typography>{currentVirus && currentVirus.virusText}</Typography>


    const buttons =
        <div>
            {transmitButton}
            <Button onClick={handleMutate} variant={"contained"}>Mutate</Button>
            <Button onClick={handleCreate} variant={"contained"}>Create</Button>
        </div>



    return (
        <Stack
            direction={"column"}
            justifySelf={"center"}
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
            alignContent={"center"}
        >
            <Typography variant={"h4"}>Viral Analysis Lab</Typography>
            <Typography variant={"body1"}>A friend has shared this virus. You have to transmit, mutate, or replace.</Typography>
            {viruscontent}
            {buttons}
        </Stack>
    )
}