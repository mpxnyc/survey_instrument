import PropTypes from "prop-types";
import React, {useReducer, useState} from "react";
import {Box, Stack, TextField, Typography} from "@mui/material";

import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers";
import DatePicker from 'react-date-picker'



export const InputCalendarEntry = (props) => {
    const {data, handleUpdateData, questionName, language, colorBackground, colorText} = props;
    const [value, setValue] = useState(data[questionName]);

    const handleOnChange = (event) => {
        const date = dayjs(`${event[`$D`]}-${event[`$M`] + 1}-${event[`$y`]}`)
        setValue(
            () => {
                handleUpdateData(questionName, event.toString())
                return date
            }
        );
    }

    return (
        <Stack alignItems={"center"} alignContent={"center"} sx={{margin: 0}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker value={Date.parse(value)} onChange={handleOnChange}/>
            </LocalizationProvider>
        </Stack>
    )


}