import {useState} from "react";
import {Stack, TextField} from "@mui/material";
import * as React from "react";
import {levenshteinDistance} from "../lib/utilityFunctions";
import {config} from "../const/config";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import services from "../lib/services";

export default function CreationLab(props) {

    const {setCurrentView, surveyData, handleUpdateSurveyData} = props;

    const [newVirus, setNewVirus] = useState("");
    const [notification, setNotification] = useState("")
    const [newVirusStatus, setNewVirusStatus] = useState();



    const validateVirus = () => {
        const length = newVirus.length
        const valid = (length >= config.viralGameOptions.create.minLength) && (length <= config.viralGameOptions.create.maxLength)
        return valid
    }

    const handleVirusChange = (event) => {
        setNewVirus(event.target.value)
        validateVirus() ? setNewVirusStatus("success") : setNewVirusStatus("warning")
    }

    const handleCancel = () => {
        setCurrentView("analysis")
    }

    const handleSubmit = async () => {
        //validate
        //submit and return virusId
        //saveVirusId in SurveyData
        //set notification to "Success"



        if (!validateVirus()) {
            setNotification(`Invalid Virus! You have to write a message between ${config.viralGameOptions.mutate.minMutationDistance} and ${config.viralGameOptions.mutate.maxMutationDistance} characters long. Please try again!`)
            setNewVirus("")
            return;
        }

        try {
            const virus = {
                virusText: newVirus,
                publicId: surveyData.publicId
            }
            const result = await services.createVirus(virus)

            const virusPublicId = result.data.result

            handleUpdateSurveyData(config.systemGeneratedVariables.variableNameForSurveyDataVirusCreatedId, virusPublicId)
            setCurrentView("analysis")


        } catch(e) {
            console.log(e)
            setNotification("Failed :(")
        }

    }




    const textField = <TextField
        value={newVirus}
        onChange={handleVirusChange}
        color={newVirusStatus}
        sx={{justifySelf: "center"}}
    />

    const virusIndicator =
        <CoronavirusTwoToneIcon
            color={newVirusStatus === "warning" ? "error" : "primary"}
        />

    const buttons =
        <div>
            <Button onClick={handleSubmit}>Accept</Button>
            <Button onClick={handleCancel}>Cancel</Button>
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
            <Typography variant={"h4"}>Viral Creation Lab</Typography>
            <Typography variant={"body1"}>To make a virus, write a message that is between {config.viralGameOptions.create.minLength} and {config.viralGameOptions.create.maxLength} characters long.</Typography>
            {textField}
            {virusIndicator}
            {notification}
            {buttons}
        </Stack>
    )
}