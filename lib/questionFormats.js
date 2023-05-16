import Box from "@mui/material/Box";
import InputRadio from "../components/InputRadio";
import InputCheckbox from "../components/InputCheckbox";
import OutputInstructions from "../components/OutputInstructions";
import {InputOutReferral} from "../components/InputOutReferral";
import InputPlainText from "../components/InputPlainText";
import InputIntegerEntry from "../components/InputIntegerEntry";
import InputAutoComplete from "../components/InputAutoComplete";
import * as React from "react";
import InputLongtext from "../components/InputLongtext";
import InputFunkyPoxDone from "../components/InputFunkyPoxDone";
import {InputCalendarEntry} from "../components/InputCalendarEntry";
import InputRadioGrid from "../components/inputRadioGrid";


export const questionFormatProperties = {
        radio: {
            navigationType: "question",
            baseType: "string"
        },

        checkbox:{
            navigationType: "question",
            baseType: "boolean"
        },

    date: {
        navigationType: "date",
        baseType: "string"
    },
    radiogrid: {
        navigationType: "date",
        baseType: "string"
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


export const getQuestionFormat = (questionType, data, handleUpdateData, currentQuestion, language, colorBackground, colorText) => {


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
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />
                </Box>,
            navigationType: questionFormatProperties.radio.navigationType,
            baseType: questionFormatProperties.radio.baseType
        },
        checkbox:{
            component:
                <Box sx={{ my: 4 }}>
                    <InputCheckbox
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />
                </Box>,
            navigationType: questionFormatProperties.checkbox.navigationType,
            baseType: questionFormatProperties.checkbox.baseType
        },
        instruction: {
            component:
                <Box sx={{ my: 4 }}>
                    <OutputInstructions
                        questionName={currentQuestion}
                        language={language}
                        colorBackground={colorBackground}
                        colorText={colorText}
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
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />
                </Box>,
            navigationType: questionFormatProperties.longtext.navigationType,
            baseType: questionFormatProperties.longtext.baseType
        },
        date: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputCalendarEntry
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />
                </Box>,
            navigationType: questionFormatProperties.date.navigationType,
            baseType: questionFormatProperties.date.baseType
        },
        radiogrid: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputRadioGrid
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />
                </Box>,
            navigationType: questionFormatProperties.radiogrid.navigationType,
            baseType: questionFormatProperties.radiogrid.baseType
        },
        funkypoxdone: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputFunkyPoxDone
                        questionName={currentQuestion}
                        language={language}
                        colorBackground={colorBackground}
                        colorText={colorText}
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
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />
                </Box>,
            navigationType: questionFormatProperties.surveydone.navigationType,
            baseType: questionFormatProperties.surveydone.baseType
        },

        confirm: {
            component:
                <Box sx={{ my: 4 }}>
                    <OutputInstructions
                        questionName={currentQuestion}
                        language={language}
                        colorBackground={colorBackground}
                        colorText={colorText}
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
                        colorBackground={colorBackground}
                        colorText={colorText}
                    />
                </Box>,
            navigationType: questionFormatProperties.sharedialog.navigationType,
            baseType: questionFormatProperties.sharedialog.baseType
        },

        plaintext: {
            component:
                <Box sx={{ my: 4 }}>
                    <InputPlainText
                        data={data}
                        handleUpdateData={handleUpdateData}
                        questionName={currentQuestion}
                        language={language}
                        colorBackground={colorBackground}
                        colorText={colorText}
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
                        colorBackground={colorBackground}
                        colorText={colorText}
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
                        colorBackground={colorBackground}
                        colorText={colorText}
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
                    colorBackground={colorBackground}
                    colorText={colorText}
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

