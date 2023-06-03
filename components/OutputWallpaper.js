import {Grid} from "@mui/material";
import {arrayRange} from "../lib/utilityFunctions";
import * as React from "react";
import {MPXIcon} from "./ControlGraphicsIcons";
import {config} from "../const/config";

export const Wallpaper = () => {
    const icon = <MPXIcon selected size = {config.wallpaper.icon.size} icon={config.wallpaper.icon.name}/>
    return (
        <Grid container direction={"row"} sx={{display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center", justifySelf: "center", alignSelf: "center"}}>
            {arrayRange(1,config.wallpaper.icon.reps,1).map((item, index) => <Grid key={index} sm={0.1} item maxWidth sx={{display: "flex", margin: 5, alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center", justifySelf: "center", alignSelf: "center"}}>{icon}</Grid>)}
        </Grid>
    )
}