import {questionnaire} from "../const/questionnaire";
import * as React from "react";
import CanvasQuestion from "./canvasQuestion";
import {getAvailableQuestions} from "../lib/utilityFunctions";
import ControlNavigation from "./ControlNavigation";
import {getQuestionFormat} from "../lib/questionFormats";
import {Card, CardMedia, Dialog, FormLabel, Paper, Stack} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import theme from "../const/theme";
import Image from "next/image";
import Unicorn from "../const/graphics/MPX_unicorn.svg";
import {config} from "../const/config";
import RandomIcon, {Droplets, Peach} from "./ControlGraphicsIcons";


export default function Canvas(props) {

    const {
        data,
        handleUpdateData,
        questionCurrent,
        questionHistory,
        questionFuture,
        questionList,
        language,
        handleNextQuestion,
        handlePreviousQuestion,
        handleToggleLanguage,
        markers,
        setMarkers,
        currentMarker,
        setCurrentMarker,
        questionHistoryMap,
        setQuestionHistoryMap,
        questionCurrentMap,
        setQuestionCurrentMap,
        handleConfirm,
        handleCancel,
        setQuestionFutureMap,
        colorBackground,
        colorText
    } = props;


    const handleNextQuestionMap = () => {

        const availableQuestions = getAvailableQuestions(markers[currentMarker], questionCurrentMap, questionHistoryMap, questionnaire[questionCurrent].mapQuestionOrder);

        setQuestionCurrentMap(
            (oldCurrent) => {


                const newCurrent = availableQuestions.shift();

                setQuestionHistoryMap((past) => {
                    past.push(oldCurrent)
                    setQuestionFutureMap(availableQuestions);
                    return past
                })

                return newCurrent
            }
        )

    };

    const handlePreviousQuestionMap = async () => {

        const availableQuestions = getAvailableQuestions(markers[currentMarker], questionCurrentMap, questionHistoryMap, questionnaire[questionCurrent].mapQuestionOrder);

        setQuestionHistoryMap(
            (past) => {
                const newCurrent = past.pop()
                setQuestionCurrentMap(
                    (oldCurrent) => {
                        availableQuestions.unshift(oldCurrent)
                        setQuestionFutureMap(availableQuestions);
                        return newCurrent
                    }
                )
                return past
            }
        )


    };



    const handleUpdateMarker = (name, value) => {
        setMarkers((old) => {
            const newData = old;
            newData[currentMarker][name] = value

            const entriesForQuestion = Object.fromEntries(Object.entries(newData).filter((item) => { return (item[1].variable === questionCurrent)}))

            handleUpdateData(questionCurrent, entriesForQuestion)
            return newData;
        })

    };

    const questionsDisplay = questionList.map(
        (item) => {
            return (

                questionnaire[item].questionType !== "map" ?

                    <CanvasQuestion
                        key={item}
                        data={data}
                        handleUpdateData={handleUpdateData}
                        currentQuestion={item}
                        visible={questionCurrent === item}
                        language={language}
                        handleNextQuestion={handleNextQuestion}
                        handlePreviousQuestion={handlePreviousQuestion}
                        handleToggleLanguage={handleToggleLanguage}
                        questionHistory={questionHistory}
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />

                    :

                    <div
                    key={item}
                    >

                        {
                            questionnaire[item].mapQuestionOrder && questionnaire[item].mapQuestionOrder.map(
                                (itemInner) => {
                                    return (
                                        <CanvasQuestion
                                            key={item + itemInner}
                                            data={markers[currentMarker]}
                                            handleUpdateData={handleUpdateMarker}
                                            currentQuestion={itemInner}
                                            visible={questionCurrentMap === itemInner}
                                            language={language}
                                            handleNextQuestion={handleNextQuestionMap}
                                            handlePreviousQuestion={handlePreviousQuestionMap}
                                            handleToggleLanguage={handleToggleLanguage}
                                            questionHistory={questionHistoryMap}
                                            colorBackground={colorBackground}
                                            colorText={colorText}
                                        />
                                    )
                                }
                            )
                        }

                        <CanvasQuestion
                            key={item + 'Instruction'}
                            data={markers[currentMarker]}
                            handleUpdateData={handleUpdateMarker}
                            currentQuestion={questionCurrentMap}
                            visible={[questionnaire[item].mapQuestionInstruction, questionnaire[item].mapQuestionDetail, questionnaire[item].mapQuestionSafety].includes(questionCurrentMap)}
                            language={language}
                            handleNextQuestion={handleNextQuestionMap}
                            handlePreviousQuestion={handlePreviousQuestionMap}
                            handleToggleLanguage={handleToggleLanguage}
                            questionHistory={questionHistoryMap}
                            colorBackground={colorBackground}
                            colorText={colorText}
                        />

                        <CanvasQuestion
                            key={item + 'removePinQuestion'}
                            data={markers[currentMarker]}
                            handleUpdateData={handleUpdateMarker}
                            currentQuestion={questionnaire[item].mapRemovePinQuestion}
                            visible={questionCurrentMap === questionnaire[item].mapRemovePinQuestion}
                            language={language}
                            handleNextQuestion={handleNextQuestionMap}
                            handlePreviousQuestion={handlePreviousQuestionMap}
                            handleToggleLanguage={handleToggleLanguage}
                            questionHistory={questionHistoryMap}
                            colorBackground={colorBackground}
                            colorText={colorText}
                        />

                    </div>

            )
        }
    )

    const questionType    = questionCurrent    && questionnaire[questionCurrent].questionType
    const questionTypeMap = questionCurrentMap && questionnaire[questionCurrentMap].questionType

    const questionFormat = questionType !== "map" ?
        getQuestionFormat(questionType,    data, handleUpdateData, questionCurrent,    language, colorBackground, colorText) :
        getQuestionFormat(questionTypeMap, data, handleUpdateData, questionCurrentMap, language, colorBackground, colorText)

    const handleNext =  questionType !== "map" ?
        handleNextQuestion :
        handleNextQuestionMap

    const handlePrevious = questionType !== "map" ?
        handlePreviousQuestion :
        handlePreviousQuestionMap

    const navigationType = questionFormat.navigationType;

    const handleCloseDialog = () => {
        questionFormat.navigationType === "instruction" && setQuestionCurrentMap("")
    }




    let questionHeader

    switch (questionType) {
        case 'map':
            questionHeader = questionCurrentMap && questionnaire[questionCurrentMap] && questionnaire[questionCurrentMap].question && questionnaire[questionCurrentMap].question[language]
            break;
        case 'radio_with_username_display':
            questionHeader = ""
            break;
        default:
            questionHeader = questionCurrent    && questionnaire[questionCurrent]    && questionnaire[questionCurrent].question    && questionnaire[questionCurrent].question[language]

    }

    const backButtonDisabled    = questionType === "map" ? questionHistoryMap.length === 0 : questionHistory.length === 0
    const forwardButtonDisabled = questionType === "map" ? false : questionFuture.length === 0


const dialogOpen = questionType !== "map" || questionCurrentMap ? true : false

    return (
        <Dialog
            open           = {dialogOpen}
            elevation      = {10}
            hideBackdrop   = {true}
            PaperProps={{sx: {backgroundColor: "transparent", border: 1, borderColor: config.colorText, borderRadius: 5} }}
            onClose={handleCloseDialog}

        >

<Card sx={{backgroundColor: "red"}}><Typography color="white" weight="bold" align={"center"}>TESTING ONLY - DATA WILL BE DISCARDED</Typography></Card>

            <Box
            sx={{backgroundColor: config.colorBackground}}
            >


                <Box
                    elevation={0}
                    justifyItems="center"

                    justifySelf="center"
                    sx={{
                        overflowY: 'auto',
                        padding: 2,
                        backgroundColor: config.colorBackground

                    }}>
                    <FormControl
                        sx={{
                            position: "relative",
                            bottom: 0,
                            top: 0,
                            left: 0,
                            right: 0
                        }}>

                        <Stack


                            justifySelf={"center"}
                            alignSelf={"center"}
                            direction={"column"}
                            width={"100%"}
                            height={"100%"}
                        >
                            <FormLabel id="demo-radio-buttons-group-label">
                                <Typography
                                    variant="body1"
                                    textAlign={"center"}
                                    color={colorText}
                                >
                                    {questionHeader}
                                </Typography>
                            </FormLabel>
                            {questionsDisplay}
                        </Stack>
                    </FormControl>
                </Box>



                <ControlNavigation
                    data                   = {data}
                    type                   = {navigationType}
                    handleNextQuestion     = {handleNext}
                    handlePreviousQuestion = {handlePrevious}
                    handleConfirm          = {handleConfirm}
                    handleCancel           = {handleCancel}
                    handleToggleLanguage   = {handleToggleLanguage}
                    questionHistory        = {questionHistory}
                    currentQuestion        = {questionCurrent}
                    variant                = {"outlined"}
                    color                  = {"primary"}
                    backButtonDisabled     = {backButtonDisabled}
                    forwardButtonDisabled  = {forwardButtonDisabled}
                    handleCloseDialog      = {handleCloseDialog}
                    language               = {language}
                    colorBackground        = {colorBackground}
                    colorText              = {colorText}
                />

            </Box>








        </Dialog>);
}