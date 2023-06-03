import {MPXIcon} from "./ControlGraphicsIcons";
import {config} from "../const/config";
import {Backdrop, CircularProgress, Dialog, Grid} from "@mui/material";
import {arrayRange} from "../lib/utilityFunctions";
import * as React from "react";
import Typography from "@mui/material/Typography";

export const Error = (props) => {
    const {errorState, setErrorState} = props;

    let errorOccurred = errorState ? true : false;

    const errorHeader  = errorState && errorState.header
    const errorName    = errorState && errorState.name
    const errorMessage = errorState && errorState.message


    const handleOnClose = () => {
        if (errorName === "NoResponse") {
            setErrorState(null);
        }
    }

    return (
        <Dialog
            open={errorOccurred}
            onClose={handleOnClose}
        >
            <Typography>{errorHeader}</Typography>
            <Typography>{errorName}</Typography>
            <Typography>{errorMessage}</Typography>

        </Dialog>
    )
}