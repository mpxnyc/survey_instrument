import {MPXIcon} from "./ControlGraphicsIcons";
import {config} from "../const/config";
import {Backdrop, Card, CircularProgress, Dialog, Grid} from "@mui/material";
import {arrayRange} from "../lib/utilityFunctions";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const Error = (props) => {
    const {errorState, setErrorState, language} = props;

    let errorOccurred = errorState ? true : false;

    const errorHeader  = errorState && errorState.header
    const errorName    = errorState && errorState.name
    const errorMessage = errorState && errorState.message


    const handleOnClose = () => {
        if (errorName === "NoResponse") {
            setErrorState(null);
        }
    }

    const number = Math.floor(Math.random() * 12) + 1;
    const fileName = `answer_${number}${language === "english" ? "" : "_sp"}.jpg`


    const skipQuestionMessage =
        <Card>
            <img src={fileName} width={"100%"} height={"100%"}></img>

        </Card>

    const otherMessage =
        <Card sx={{backgroundColor: config.colorBackground, borderColor: "red", border: 3, color: "red", padding: 3}}>
            <Typography color={config.colorText} variant={"body1"}>{errorMessage}</Typography>
        </Card>

    return (
        <Dialog
            open={errorOccurred}
            onClose={handleOnClose}
        >
            {
                errorName === "NoResponse" ? skipQuestionMessage : otherMessage
            }

        </Dialog>
    )
}