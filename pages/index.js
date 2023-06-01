import * as React from 'react';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";
import Peaches from '../public/peaches.svg'
import Hearts from '../public/Asset 2.svg'
import MpxIcon from '../public/Asset 6.png'


import {questionnaire} from "../const/questionnaire";
import {config} from "../const/config";

import Canvas from "../components/canvas";
import CanvasMap from "../components/canvasMap";
import CanvasViralGame from "../components/canvasViralGame";

import {arrayRange, createDataShell, getAvailableQuestions} from "../lib/utilityFunctions";
import services from "../lib/services";
import Image from "next/image";
import {InputCalendarEntry} from "../components/InputCalendarEntry";
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import RandomIcon, {Droplets, Eggplant, Peach, Unicorn} from "../components/ControlGraphicsIcons";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";






export default function Index() {

  const router = useRouter();

  const [cookies, setCookie] = useCookies(['userName']);

  const [surveyData, setSurveyData] = useState(createDataShell(questionnaire.ordering));
  const [language, setLanguage] = useState(config.defaultLanguage);
  const [unchangingVariable, setUnchangingVariable] = useState(0);

  const [markers, setMarkers] = useState({});
  const [currentMarker, setCurrentMarker] = useState();

  const [questionHistory, setQuestionHistory] = useState([]);
  const [questionCurrent, setQuestionCurrent] = useState(questionnaire.ordering[0]);
  const [questionFuture, setQuestionFuture]   = useState(questionnaire.ordering.slice(1));
  const [questionHistoryMap, setQuestionHistoryMap] = useState([]);
  const [questionCurrentMap, setQuestionCurrentMap] = useState();
  const [questionFutureMap, setQuestionFutureMap]   = useState(questionnaire.ordering.slice(1));

  const [currentVirus, setCurrentVirus] = useState({});

    let busySaving = false

  const triggerSaveSurvey = async (data) => {
    console.log("Save Triggered")

      if (busySaving) {
          console.log("still busy saving")
          return;
      } else {
          busySaving = true
          console.log("busySaving", busySaving)
          const result = await services.saveSurvey(data);
          busySaving = false
          console.log("finishedSaving", busySaving, result)
      }


  };

  const triggerAssignId = async () => {
    console.log("Assign ID Triggered")


      try {
          busySaving = true;
          const id = await services.assignID();
          busySaving = false;


          setSurveyData(
              (current) => {
                  const newData = current;
                  newData["publicId"] = id.public_id
                  newData["userName"] = id.user_name


                  setCookie('userName', id.user_name, {maxAge: config.testing ? config.cookieDuration.testing : config.cookieDuration.production})


                  return newData;
              })

          console.log("set cookie")

      } catch(e) {
        console.log("Assign ID Failed")
          console.log(e)
      }

  };

  const triggerFetchLastQuestion = async (data) => {
    const response = await services.getLastQuestion(data);
    return response
  };

  const triggerFetchPublicId = async (data) => {
    const response = await services.getPublicId(data);
    return response
  }

  // const triggerConfirmCookie = async () => {
  //   console.log("triggered confirm cookie")
  //   await handleConfirmCookie()
  // }

  const handleUpdateSurveyData = (name, value) => {


    setSurveyData( (old) => {

      const newData = old;
      newData[name] = value;

      questionCurrent !== "consent" && newData.userName && triggerSaveSurvey(newData)

      const newIndex = questionnaire.ordering.indexOf(name)
      const currentIndex = questionnaire.ordering.indexOf(newData.lastQuestion)


      if (currentIndex < newIndex) newData.lastQuestion = name;

      console.log("Updated SurveyData", surveyData)
      return newData;
    })


  };

  const handleNextQuestion = () => {

      if (surveyData[questionCurrent] && (surveyData[questionCurrent] === questionnaire[questionCurrent].exitCondition)) {

          setQuestionCurrent(
              () => {
                  setQuestionFuture([])
                  return questionnaire.milestones.surveyComplete
              }
          )

          return
      }

      if (surveyData[questionCurrent] && (surveyData[questionCurrent] === questionnaire[questionCurrent].ineligibleCondition)) {

          setQuestionCurrent(
              () => {
                  setQuestionFuture([])
                  return questionnaire.milestones.surveyIneligible
              }
          )

          return
      }

      //if we do have a cookie, subit the cookie when the time is right. Or also if user gives us username
      questionnaire.milestones.retrieveId.includes(questionCurrent) && surveyData[questionCurrent] !== "no" && triggerSubmitCookie(surveyData);

      //if we dont have a cookie, assign id when the time is right
      questionnaire.milestones.assignId.includes(questionCurrent) && !surveyData.userName && triggerAssignId()


    if (questionnaire[questionCurrent].questionType === "checkbox") {
        // make sure that logical question  obtains 'false' instead of 'null' once user has seen it

        setSurveyData(
            (current) => {
                const innerVariableNames = Object.keys(current[questionCurrent])
                innerVariableNames.map(
                    (item) => {
                        current[questionCurrent][item] = !current[questionCurrent][item] ? false : current[questionCurrent][item];
                    }
                )

                return current
            }
        )
    }

    const availableQuestions = getAvailableQuestions(surveyData, questionCurrent, questionHistory, questionnaire.ordering);

    setQuestionCurrent(
        (oldCurrent) => {


          const newCurrent = availableQuestions.shift();

          setQuestionHistory((past) => {
            past.push(oldCurrent)
            setQuestionFuture(availableQuestions);
            questionnaire[newCurrent] && questionnaire[newCurrent].questionType && questionnaire[newCurrent].questionType === "map" && setQuestionCurrentMap(questionnaire[newCurrent].mapQuestionInstruction)
            return past
          })

          return newCurrent
        }
    )

  };

  const handlePreviousQuestion = async () => {

    const availableQuestions = getAvailableQuestions(surveyData, questionCurrent, questionHistory, questionnaire.ordering);

    setQuestionHistory(
        (past) => {
          const newCurrent = past.pop()
          setQuestionCurrent(
              (oldCurrent) => {
                availableQuestions.unshift(oldCurrent)
                setQuestionFuture(availableQuestions);
                return newCurrent
              }
          )
          return past
        }
    )


  };

  const handleToggleLanguage = () => {
    setLanguage(
        (current) => {
          const result = current === "english" ? "spanish" : "english"
          return result
        }
    )
  }

  // const handleConfirmCookie = async () => {
  //
  //     console.log("confirming cookie")
  //     const cookieUserName = surveyData[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName]
  //
  //     if (cookieUserName) {
  //         const payload = {userName: cookieUserName}
  //         payload[config.systemGeneratedVariables.variableNameForSurveyDataReferrerId] = surveyData[config.systemGeneratedVariables.variableNameForSurveyDataReferrerId] && surveyData[config.systemGeneratedVariables.variableNameForSurveyDataReferrerId]
  //         payload[config.systemGeneratedVariables.variableNameForSurveyDataReferrerLanguage] = surveyData[config.systemGeneratedVariables.variableNameForSurveyDataReferrerLanguage] && surveyData[config.systemGeneratedVariables.variableNameForSurveyDataReferrerLanguage]
  //         payload[config.systemGeneratedVariables.variableNameForSurveyDataReferralType] = surveyData[config.systemGeneratedVariables.variableNameForSurveyDataReferralType] && surveyData[config.systemGeneratedVariables.variableNameForSurveyDataReferralType]
  //
  //         console.log("surveyData before confirm cookie", surveyData)
  //         console.log("payload before confim cookie", payload)
  //
  //         // const cookieResponse = await services.submitCookie(payload)
  //         // console.log("cookieResponse", cookieResponse)
  //
  //     //publicId = await triggerFetchPublicId({userName: cookieUserName})
  //
  //     //lastQuestion = await triggerFetchLastQuestion({userName: cookieUserName, publicId: publicId})
  //
  //     //const indexLastSaved = questionnaire.ordering.findIndex((item) => {return (item === lastQuestion)})
  //     //const indexCurrent   = questionnaire.ordering.findIndex((item) => {return (item === questionCurrent)})
  //
  //     //indexLastSaved > indexCurrent && setQuestionCurrent(questionnaire.ordering[indexLastSaved + 1]);
  //
  //
  //     // setSurveyData(
  //     //     (current) => {
  //     //       current[config.systemGeneratedVariables.variableNameForSurveyDataUserName] = publicId
  //     //       current[config.systemGeneratedVariables.variableNameForLastQuestion] = lastQuestion
  //     //       return current
  //     //     }
  //     // )
  //   }
  // }

  const handleConfirmRemovePin = () => {



    setMarkers((prev) => {


      const newState = prev
      delete newState[currentMarker]

        setQuestionCurrentMap("");
      setCurrentMarker(null)

        const entriesForQuestion = Object.fromEntries(Object.entries(newState).filter((item) => {return (item[1].variable === questionCurrent)}))

        handleUpdateSurveyData(questionCurrent, entriesForQuestion)

      return (newState)
    })
  }

  const handleCancelRemovePin = () => {
      setQuestionCurrentMap("");
  }

  const handleFetchVirus = async () => {
    console.log("fetch virus triggered")
    try {

      const virus = {
        virusPublicId: surveyData.receivedVirus,
        publicId: surveyData.publicId,
        referrerPublicId: surveyData.referrerPublicId
      }



      const response = await services.fetchVirus(virus)



      const responseObject = response.result.records[0]
      const virusText = responseObject._fields[responseObject._fieldLookup["virusText"]]
      const virusOriginTime = responseObject._fields[responseObject._fieldLookup["virusOriginTime"]]

      const result = {
        virusText: virusText,
        virusPublicId: virus.virusPublicId,
        virusOriginTime: virusOriginTime
      }


      setCurrentVirus(result);


    } catch(e) {
      console.log(e)

    }
  }


  useEffect(
      () => {
        handleUpdateSurveyData(config.systemGeneratedVariables.variableNameForSurveyDataOwnLanguage, language)
      },
      [language]
  )


    async function triggerSubmitCookie(data) {

      console.log("submit cookie data", data)
        busySaving = true;

      if (questionCurrent !== "welcome") data[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName] = data[questionCurrent]

        const cookieResponse = await services.submitCookie(data)

        const {public_id: publicId, lastQuestion} = cookieResponse.data.result

        console.log("publicId", publicId)
        console.log("lastQuestion", lastQuestion)

        const focusQuestion = lastQuestion === "" ? "consentStudy" : lastQuestion

        handleUpdateSurveyData("userName", data[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName])
        handleUpdateSurveyData("publicId", publicId)
        handleUpdateSurveyData("lastQuestion", focusQuestion)



        setQuestionCurrent(
            (oldCurrent) => {
                setQuestionHistory([]);
                const availableQuestions = getAvailableQuestions(data, focusQuestion, [], questionnaire.ordering)
                setQuestionFuture(availableQuestions)
                return focusQuestion
            }
        )

        busySaving = false;

    }

    useEffect(
       () => {
          const referrerLanguageParameterValue = router.query[config.referralSettings.referrerLanguage.settingName];
          const referralTypeParameterValue = router.query[config.referralSettings.referralType.settingName];
          const referralIdParameterValue = router.query[config.referralSettings.referrerIdName]
          const viralQuestionIdParameterValue = router.query[config.referralSettings.virusGameIdName]
          const cookiesUserName = cookies && cookies.userName


          const referralTypeDictionary = Object.entries(config.referralSettings.referralType.values).reduce(
              (current, next) => {
                  const newState = {...current, [next[1]]: next[0]}
                  return newState
              }, {}
          )

          const referralLanguageDictionary = Object.entries(config.referralSettings.referrerLanguage.values).reduce(
              (current, next) => {
                  const newState = {...current, [next[1]]: next[0]}
                  return newState
              }, {}
          )

          const initialData = {
              [config.systemGeneratedVariables.variableNameForSurveyDataReferrerLanguage]: referralLanguageDictionary[referrerLanguageParameterValue],
              [config.systemGeneratedVariables.variableNameForSurveyDataReferralType]: referralTypeDictionary[referralTypeParameterValue],
              [config.systemGeneratedVariables.variableNameForSurveyDataReferrerId]: referralIdParameterValue,
              [config.systemGeneratedVariables.variableNameForSurveyDataVirusReceivedId]: viralQuestionIdParameterValue,
              [config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName]: cookiesUserName
          }

          const initialLanguage = initialData[config.systemGeneratedVariables.variableNameForSurveyDataReferrerLanguage]

          console.log("initial data", initialData)

          setSurveyData(
              (current) => {
                  return ({...current, ...initialData})
              }
          )

          setLanguage(
              (current) => {
                  return (initialLanguage ? initialLanguage : current)
              }
          )

      },
      [router.query]
  )


  useEffect(
      () => {



        !currentVirus.virusText && surveyData.receivedVirus && surveyData.publicId && surveyData.referrerPublicId && handleFetchVirus()

      }, [surveyData.receivedVirus, surveyData.publicId, surveyData.referrerPublicId]
  )




const icon = <Droplets selected size={40}/>

  return (

      <Box maxWidth maxHeight sx={{backgroundColor: config.colorWallpaper, height: "100%", width: "100%", position: "absolute", overflow: "clip"}} >



          <Grid container direction={"row"} sx={{display: "flex", alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center", justifySelf: "center", alignSelf: "center"}}>
              {arrayRange(1,500,1).map(item => <Grid sm={0.1} item maxWidth sx={{display: "flex", margin: 5, alignContent: "center", alignItems: "center", justifyContent: "center", justifyItems: "center", justifySelf: "center", alignSelf: "center"}}>{icon}</Grid>)}
          </Grid>



          <Box
              height={"100%"}
              width={"100%"}

          sx={{opacity: 1, objectFit: "fill", justifyContent: "center", display: "flex"}}>
              <Image src={Hearts}/>
          </Box>






        <CanvasMap
            data={surveyData}
            handleUpdateSurveyData={handleUpdateSurveyData}
            currentQuestion={questionCurrent}
            questionFuture={questionFuture}
            visible={questionCurrent && questionnaire[questionCurrent] && questionnaire[questionCurrent].questionType === "map"}

            language={language}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            handleToggleLanguage={handleToggleLanguage}
            questionHistory={questionHistory}
            setCurrentMarker={setCurrentMarker}
            setMarkers={setMarkers}
            setQuestionCurrentMap={setQuestionCurrentMap}
            setQuestionHistoryMap={setQuestionHistoryMap}
            currentMarker={currentMarker}
            markers={markers}
            questionCurrentMap={questionCurrentMap}
            handleConfirmRemovePin={handleConfirmRemovePin}
            handleCancelRemovePin={handleCancelRemovePin}
        />
        <Canvas
            data={surveyData}
            handleUpdateData={handleUpdateSurveyData}
            questionCurrent={questionCurrent}
            questionHistory={questionHistory}
            questionFuture={questionFuture}
            questionList={questionnaire.ordering}
            language={language}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            handleToggleLanguage={handleToggleLanguage}
            markers={markers}
            setMarkers={setMarkers}
            currentMarker={currentMarker}
            setCurrentMarker={setCurrentMarker}
            questionHistoryMap={questionHistoryMap}
            setQuestionHistoryMap={setQuestionHistoryMap}
            questionCurrentMap={questionCurrentMap}
            setQuestionCurrentMap={setQuestionCurrentMap}
            questionFutureMap={questionFutureMap}
            setQuestionFutureMap={setQuestionFutureMap}
            handleConfirm={handleConfirmRemovePin}
            handleCancel={handleCancelRemovePin}
            colorBackground={config.colorBackground}
            colorText={config.colorText}
        />

        <CanvasViralGame
            surveyData={surveyData}
            handleUpdateSurveyData={handleUpdateSurveyData}
            language={language}
            currentVirus={currentVirus}
            visible={false}
        />

      </Box>


  );
}


