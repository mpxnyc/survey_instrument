import {useState} from "react";
import {Stack, TextField} from "@mui/material";
import * as React from "react";
import {levenshteinDistance} from "../lib/utilityFunctions";
import {config} from "../const/config";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
import services from "../lib/services";

export default function MutationLab(props) {
    const {currentVirus, setCurrentView, surveyData} = props;



    console.log("currentVirus ~~", currentVirus, "~~~")
    const [newVirus, setNewVirus] = useState(currentVirus && currentVirus.virusText);
    const [notification, setNotification] = useState("");
    const [newVirusStatus, setNewVirusStatus] = useState();



    const validateVirus = () => {
        const distance = levenshteinDistance(currentVirus && currentVirus.virusText, newVirus)
        const valid = (distance >= config.viralGameOptions.mutate.minMutationDistance) && (distance <= config.viralGameOptions.mutate.maxMutationDistance)
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
            setNotification(`Invalid Mutation. You have to change between ${config.viralGameOptions.mutate.minMutationDistance} and ${config.viralGameOptions.mutate.maxMutationDistance} letters. Please try again!`)
            setNewVirus(currentVirus && currentVirus.virusText)
            return;
        }

        try {

            const receivedVirus = surveyData.receivedVirus

            const virusMutation = {
                virusText: newVirus,
                publicId: surveyData.publicId,
                virusPublicId: currentVirus && currentVirus.virusPublicId
            }

                await services.mutateVirus(virusMutation)

            setNotification("Success!")
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
            <Typography variant={"h4"}>Viral Mutation Lab</Typography>
            <Typography variant={"body1"}>To mutate this virus, change between {config.viralGameOptions.mutate.minMutationDistance} and {config.viralGameOptions.mutate.maxMutationDistance} letters.</Typography>
            {textField}
            {virusIndicator}
            {notification}
            {buttons}
        </Stack>
    )
}