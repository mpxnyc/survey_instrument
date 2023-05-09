import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import Copyright from "../src/Copyright";
import * as React from "react";
import InputRadio from "./InputRadio";
import {questionnaire} from "../const/questionnaire";
import InputCheckbox from "./InputCheckbox";
import {Dialog} from "@mui/material";
import Button from "@mui/material/Button";
import InputPrompt from "./InputPrompt";
import ControlNavigation from "./ControlNavigation";
import * as PropTypes from "prop-types";
import {InputOutReferral} from "./InputOutReferral";
import InputTextEntry from "./InputTextEntry";
import InputIntegerEntry from "./InputIntegerEntry";
import InputAutoComplete from "./InputAutoComplete";
import {getQuestionFormat, questionFormats} from "../lib/questionFormats";



export default function CanvasQuestion(props) {

    const {
        data,
        handleUpdateData,
        currentQuestion,
        visible,
        language,
    } = props;


    const questionType = currentQuestion && questionnaire[currentQuestion].questionType

    const questionFormat = getQuestionFormat(questionType, data, handleUpdateData, currentQuestion, language)

    const questionComponent = questionFormat.component;



    return (
        <Box
            width={"100%"}
            height={"100%"}
        >
            {visible && questionComponent}
        </Box>

    );
}