
import {Box, Button, Stack, Typography} from "@mui/material";

import {RWebShare} from "react-web-share";
import React, {useState} from "react";
import {config} from "../const/config";
import {questionnaire} from "../const/questionnaire";
import FormControl from "@mui/material/FormControl";


export const InputOutReferral = (props) => {
    const {language, handleUpdateData, questionName, data} = props;

    const [shareClickCounter, setShareClickCounter] = useState({friends: 0, hookups: 0})
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL


    const urlFriends = new URL(baseURL)
    urlFriends.searchParams.append(config.referralSettings.referrerIdName, data.publicId && encodeURIComponent(data.publicId))
    urlFriends.searchParams.append(config.referralSettings.referralType.settingName, encodeURIComponent(config.referralSettings.referralType.values.friend))
    urlFriends.searchParams.append(config.referralSettings.referrerLanguage.settingName, encodeURIComponent(config.referralSettings.referrerLanguage.values[language]))


    const urlHookups = new URL(baseURL)
    urlHookups.searchParams.append(config.referralSettings.referrerIdName, data.publicId && encodeURIComponent(data.publicId))
    urlHookups.searchParams.append(config.referralSettings.referralType.settingName, encodeURIComponent(config.referralSettings.referralType.values.hookup))
    urlHookups.searchParams.append(config.referralSettings.referrerLanguage.settingName, encodeURIComponent(config.referralSettings.referrerLanguage.values[language]))


    const handleClickCounter = (type) => {

        if (type === "friend") {
            setShareClickCounter(
                (current) => {
                    const result = {...current, friends: current.friends + 1}
                    handleUpdateData(questionName, result)
                    return result
                })
        } else {
            setShareClickCounter((
                current) => {
                const result = {...current, friends: current.hookups + 1}
                handleUpdateData(questionName, result)
                return result
            })
        }
    }

    return (
        <FormControl>
            <Typography>{questionnaire[questionName].sharePromptHeading[language]}</Typography>
            <Typography>{questionnaire[questionName].sharePromptBody[language]}</Typography>
            <Stack direction="column" alignContent={"center"} alignItems={"center"} >
                <Stack direction="row" alignContent={"center"} alignItems={"center"} >
                    <RWebShare
                        data={{
                            text: questionnaire[questionName].shareMessage[language],
                            url: urlFriends,
                            title: "MPX NYC",
                        }}
                        onClick={() => handleClickCounter("friend")}
                    >
                        <Button variant={"outlined"} >
                            <Stack direction="column" alignContent={"center"} alignItems={"center"} >
                               <Typography>Friends</Typography>
                            </Stack>
                        </Button>
                    </RWebShare>

                    <RWebShare
                        data={{
                            text: questionnaire[questionName].shareMessage[language],
                            url: urlHookups,
                            title: "MPX NYC",
                        }}
                        onClick={() => handleClickCounter("hookup")}
                    >
                        <Button variant={"outlined"} >
                            <Stack direction="column" alignContent={"center"} alignItems={"center"} >
                                <Typography>Hookups</Typography>
                            </Stack>
                        </Button>
                    </RWebShare>
                </Stack>
            </Stack>
        </FormControl>
    )

}