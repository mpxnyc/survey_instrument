import MutationLab from "./viralMutationLab";
import {Dialog} from "@mui/material";
import CreationLab from "./viralVirusCreationLab";
import AnalysisLab from "./viralVirusDisplay";
import {useState} from "react";


export default function CanvasViralGame(props) {

    const {surveyData, handleUpdateSurveyData, language, currentVirus, visible} = props;
    const [currentView, setCurrentView] = useState("analysis")


    const creationLab =
        <CreationLab
            setCurrentView={setCurrentView}
            surveyData={surveyData}
            handleUpdateSurveyData={handleUpdateSurveyData}
            language={language}
        />


    const analysisLab =
        <AnalysisLab
            currentVirus={currentVirus}
            setCurrentView={setCurrentView}
            surveyData={surveyData}
            language={language}
        />


    const mutationLab =
        <MutationLab
            currentVirus={currentVirus}
            setCurrentView={setCurrentView}
            surveyData={surveyData}
            language={language}
        />


console.log("currentVirus", currentVirus)


    return (
        <Dialog open={visible}>
            {visible && currentView === "analysis" && analysisLab}
            {visible && currentView === "mutate" && mutationLab}
            {visible && currentView === "create" && creationLab}
        </Dialog>

    )
}