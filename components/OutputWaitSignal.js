import {MPXIcon} from "./ControlGraphicsIcons";
import {config} from "../const/config";
import {Backdrop, CircularProgress, Grid} from "@mui/material";
import {arrayRange} from "../lib/utilityFunctions";
import * as React from "react";

export const WaitSignal = (props) => {

    const {waiting} = props;

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 10000000000000000 }}
            open={waiting}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}