import {questionnaire} from "../const/questionnaire";
import * as React from "react";
import CanvasQuestion from "./canvasQuestion";
import {getAvailableQuestions} from "../lib/utilityFunctions";
import ControlNavigation from "./ControlNavigation";
import {getQuestionFormat} from "../lib/questionFormats";
import {CardMedia, Dialog, FormLabel, Stack} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {RadioQuestion} from "./InputRadioEmoji";
import theme from "../const/theme";
import Image from "next/image";


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
        setQuestionFutureMap
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


            handleUpdateData(questionCurrent, newData)
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
                                        />
                                    )
                                }
                            )
                        }

                        <CanvasQuestion
                            key={item + 'Instruction'}
                            data={markers[currentMarker]}
                            handleUpdateData={handleUpdateMarker}
                            currentQuestion={questionnaire[item].mapQuestionInstruction}
                            visible={questionCurrentMap === questionnaire[item].mapQuestionInstruction}
                            language={language}
                            handleNextQuestion={handleNextQuestionMap}
                            handlePreviousQuestion={handlePreviousQuestionMap}
                            handleToggleLanguage={handleToggleLanguage}
                            questionHistory={questionHistoryMap}
                        />

                    </div>

            )
        }
    )

    const questionType    = questionCurrent    && questionnaire[questionCurrent].questionType
    const questionTypeMap = questionCurrentMap && questionnaire[questionCurrentMap].questionType

    const questionFormat = questionType !== "map" ?
        getQuestionFormat(questionType,    data, handleUpdateData, questionCurrent,    language) :
        getQuestionFormat(questionTypeMap, data, handleUpdateData, questionCurrentMap, language)

    const handleNext =  questionType !== "map" ?
        handleNextQuestion :
        handleNextQuestionMap

    const handlePrevious = questionType !== "map" ?
        handlePreviousQuestion :
        handlePreviousQuestionMap

    const handleCloseDialog = () => {
        setQuestionCurrentMap("")
    }

    const navigationType = questionFormat.navigationType;


    const questionHeader = questionType === "map" ?
        (questionCurrentMap && questionnaire[questionCurrentMap] && questionnaire[questionCurrentMap].question && questionnaire[questionCurrentMap].question[language]) :
        (questionCurrent    && questionnaire[questionCurrent]    && questionnaire[questionCurrent].question    && questionnaire[questionCurrent].question[language])

    const backButtonDisabled    = questionType === "map" ? questionHistoryMap.length === 0 : questionHistory.length === 0
    const forwardButtonDisabled = questionType === "map" ? false : questionFuture.length === 0




    return (
        <Dialog
            open           = {questionType !== "map" || questionCurrentMap}
            elevation      = {10}
            hideBackdrop   = {true}
            sx={{backgroundColor: "transparent"}}
        >

            <Box
                elevation={0}
                justifyItems="center"

                justifySelf="center"
                sx={{
                    overflowY: 'auto',
                    padding: 2,
                    backgroundColor: "transparent"
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
                                color={"primary"}
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
            />




        </Dialog>);
}