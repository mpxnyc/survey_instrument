import FormControl from '@mui/material/FormControl';
import {ButtonGroup, Fab, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {questionnaire} from "../const/questionnaire";
import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


export default function InputFunkyPoxDone(props) {
    const {questionName, language} = props;

    return (
        <Box>
            <Typography variant={"h2"} gutterBottom>{questionnaire[questionName].heading[language]}</Typography>
            {questionnaire[questionName].body[language].map(
                (item) => {
                    return(<Typography gutterBottom variant={"body1"}>{item}</Typography>)
                }
            )
            }

        </Box>
    );
}