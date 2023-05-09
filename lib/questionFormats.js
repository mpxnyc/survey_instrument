import Box from "@mui/material/Box";
import InputRadio from "../components/InputRadio";
import InputCheckbox from "../components/InputCheckbox";
import InputPrompt from "../components/InputPrompt";
import {InputOutReferral} from "../components/InputOutReferral";
import InputTextEntry from "../components/InputTextEntry";
import InputIntegerEntry from "../components/InputIntegerEntry";
import InputAutoComplete from "../components/InputAutoComplete";
import * as React from "react";
import InputLongtext from "../components/InputLongtext";
import InputFunkyPoxDone from "../components/InputFunkyPoxDone";
import {RadioQuestion} from "../components/InputRadioEmoji";
import {CheckboxQuestion} from "../components/InputTextboxEmoji";

export const questionFormatProperties = {
        radio: {
            navigationType: "question",
            baseType: "string"
        },

        checkbox:{
            navigationType: "question",
            baseType: "boolean"
        },

        instruction: {
            navigationType: "instruction",
            baseType: null
        },

        confirm: {
            navigationType: "confirm",
            baseType: null
        },

    longtext: {
        navigationType: "question",
        baseType: null
    },

        sharedialog: {
            navigationType: "question",
            baseType: null
        },
    funkypoxdone: {
        navigationType: "funkybox",
        baseType: null
    },
    surveydone: {
        navigationType: "surveydone",
        baseType: null
    },

        plaintext: {
            navigationType: "question",
            baseType: "string"
        },

        integer:{
            navigationType: "question",
            baseType: "integer"
        },
        autocomplete: {
            navigationType: "question",
            baseType: "string"
        }
    }


export const getQuestionFormat = (questionType, data, handleUpdateData, currentQuestion, language) => {


    const questionFormats = {
        radio: {
            component:
                <Box
                    width={"100%"}
                    height={"100%"}
                   >
                    <InputRadio
                        language={language}
                        questionName={currentQuestion}
                        data={data}
                        handleUpdateData={handleUpdateData}
                    />
                </Box>,
            navigationType: questionFormatProperties.radio.navigationType,
            baseType: questionFormatProperties.radio.baseType
        },

        checkbox:{
            component:
                <Box sx={{ my: 4 }}>
                    <CheckboxQuestion
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionCurrent={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.checkbox.navigationType,
            baseType: questionFormatProperties.checkbox.baseType
        },

        instruction: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputPrompt
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.instruction.navigationType,
            baseType: questionFormatProperties.instruction.baseType
        },

        longtext: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputLongtext
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.longtext.navigationType,
            baseType: questionFormatProperties.longtext.baseType
        },

        funkypoxdone: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputFunkyPoxDone
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.funkypoxdone.navigationType,
            baseType: questionFormatProperties.funkypoxdone.baseType
        },
        surveydone: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputFunkyPoxDone
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.surveydone.navigationType,
            baseType: questionFormatProperties.surveydone.baseType
        },

        confirm: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputPrompt
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.confirm.navigationType,
            baseType: questionFormatProperties.confirm.baseType
        },

        sharedialog: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputOutReferral
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.sharedialog.navigationType,
            baseType: questionFormatProperties.sharedialog.baseType
        },

        plaintext: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputTextEntry
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.plaintext.navigationType,
            baseType: questionFormatProperties.plaintext.baseType
        },

        integer:{
            component:
                <Box sx={{ my: 4 }}>
                    <InputIntegerEntry
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.integer.navigationType,
            baseType: questionFormatProperties.integer.baseType
        },
        autocomplete: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputAutoComplete
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                    />
                </Box>,
            navigationType: questionFormatProperties.autocomplete.navigationType,
            baseType: questionFormatProperties.autocomplete.baseType
        },
        viralGame: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputAutoComplete
                    data={data}
                    handleUpdateData={handleUpdateData}
                    questionName={currentQuestion}
                    language={language}
                />
                </Box>,
        }
    }



    const result = {
        component: questionFormats[questionType] && questionFormats[questionType].component,
        navigationType: questionFormats[questionType] && questionFormats[questionType].navigationType,
        baseType: questionFormats[questionType] && questionFormats[questionType].baseType
    }
    return result
}

