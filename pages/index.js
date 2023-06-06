import * as React from 'react';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";



import {questionnaire} from "../const/questionnaire";
import {config} from "../const/config";

import Canvas from "../components/canvas";
import CanvasMap from "../components/canvasMap";
import CanvasViralGame from "../components/canvasViralGame";

import { createDataShell, getAvailableQuestions} from "../lib/utilityFunctions";
import services from "../lib/services";
import {Backdrop, CircularProgress, Dialog, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Wallpaper} from "../components/OutputWallpaper";
import {WaitSignal} from "../components/OutputWaitSignal";
import {Error} from "../components/OutputError";
import {IDUnassigned, NoResponse} from "../lib/errors";






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

  const [waiting, setWaiting] = useState(false)
    const [errorState, setErrorState] = useState()

    let busySaving = false;


    const handleStopWaiting = (cookieResponse) => {
        setWaiting(false);
    }

  const triggerSaveSurvey = async (data) => {

        try {
            console.log("Save Triggered")

            if (busySaving) {
                console.log("still busy saving")
                return;
            } else {
                busySaving = true
                const result = await services.saveSurvey(data);
                busySaving = false
            }
        } catch(e) {
            handleStopWaiting()
            setErrorState(e)
        }

  };

  const triggerAssignId = async () => {



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

          return true

      } catch(e) {
          console.log(e)
          setErrorState(e)
      }

  };

  async function triggerSubmitCookie(data) {

      try {
          busySaving = true;
          setWaiting(true)

          if (questionCurrent !== "welcome") data[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName] = data[questionCurrent]

          const cookieResponse = await services.submitCookie(data)


          const {public_id: publicId, lastQuestion, sessionId} = cookieResponse.data.result



          const focusQuestion = lastQuestion === "" ? "consentStudy" : lastQuestion

          handleUpdateSurveyData("userName", data[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName])
          handleUpdateSurveyData("publicId", publicId)
          handleUpdateSurveyData("lastQuestion", focusQuestion)
          handleUpdateSurveyData("sessionId", sessionId)



          setQuestionCurrent(
              (oldCurrent) => {
                  setQuestionHistory([]);
                  const availableQuestions = getAvailableQuestions(data, focusQuestion, [], questionnaire.ordering)

                  const displayQuestion = availableQuestions.shift()


                  setQuestionFuture(availableQuestions)
                  questionnaire[displayQuestion] && questionnaire[displayQuestion].questionType && questionnaire[displayQuestion].questionType === "map" && setQuestionCurrentMap(questionnaire[displayQuestion].mapQuestionInstruction)


                  console.log("display question from cookie", displayQuestion)
                  return displayQuestion
              }
          )



          busySaving = false;
          handleStopWaiting(await cookieResponse);

      } catch(e) {
          handleStopWaiting()
          setErrorState(e)
      }



    };

  const handleUpdateSurveyData = (name, value) => {


    setSurveyData( (old) => {

      const newData = old;
      newData[name] = value;

      questionCurrent !== "consent" && newData.userName && triggerSaveSurvey(newData)

      const newIndex = questionnaire.ordering.indexOf(name)
      const currentIndex = questionnaire.ordering.indexOf(newData.lastQuestion)


      if (currentIndex < newIndex) newData.lastQuestion = name;


      return newData;
    })


  };

  const handleNextQuestion = async () => {


      try {
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


          //Forced Response
          if (surveyData[questionCurrent] === "" && questionnaire[questionCurrent].forcedResponse) throw new NoResponse()
          if (Object.keys(surveyData[questionCurrent]).length === 0 && questionnaire[questionCurrent].questionType === "map" && questionnaire[questionCurrent].forcedResponse) throw new NoResponse()

          //if we do have a cookie, subit the cookie when the time is right. Or also if user gives us username
          questionnaire.milestones.retrieveId.includes(questionCurrent) && surveyData[questionCurrent] !== "no" && triggerSubmitCookie(surveyData);

          //if we dont have a cookie, assign id when the time is right
          if (questionnaire.milestones.assignId.includes(questionCurrent) && !surveyData.userName) {
              const result = triggerAssignId()
          }


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

          console.log("availableQuestions before shift", availableQuestions)

          setQuestionCurrent(
              (oldCurrent) => {


                  const newCurrent = availableQuestions.shift();

                  setQuestionHistory((past) => {
                      past.push(oldCurrent)
                      setQuestionFuture(availableQuestions);
                      questionnaire[newCurrent] && questionnaire[newCurrent].questionType && questionnaire[newCurrent].questionType === "map" && setQuestionCurrentMap(questionnaire[newCurrent].mapQuestionInstruction)
                      console.log("question history", past)
                      return past
                  })

                  console.log("availableQuestions after shift", availableQuestions)
                  console.log("question current", newCurrent)
                  return newCurrent
              }
          )
      } catch(e) {
          console.log(e)
          setErrorState(e)
      }



  };

  const handlePreviousQuestion = async () => {

      const availableQuestions = getAvailableQuestions(surveyData, questionCurrent, questionHistory, questionnaire.ordering);

      console.log("availableQuestions before shift", availableQuestions)

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
            console.log("availableQuestions after shift", availableQuestions)
            console.log("question history", past)
            console.log("question current", newCurrent)
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



  useEffect(
      () => {
        handleUpdateSurveyData(config.systemGeneratedVariables.variableNameForSurveyDataOwnLanguage, language)
      },
      [language]
  )



    useEffect(
       () => {
          const referrerLanguageParameterValue = router.query[config.referralSettings.referrerLanguage.settingName];
          const referralTypeParameterValue = router.query[config.referralSettings.referralType.settingName];
          const referralIdParameterValue = router.query[config.referralSettings.referrerIdName];
          const viralQuestionIdParameterValue = router.query[config.referralSettings.virusGameIdName];
          const referralChannelParameterValue  = router.query[config.referralSettings.referralChannel.settingName];
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
              [config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName]: cookiesUserName,
              [config.systemGeneratedVariables.variableNameForSurveyDataSessionId]: 1,
              [config.systemGeneratedVariables.variableNameForSurveyDataChannel]: referralChannelParameterValue
          }

          const initialLanguage = initialData[config.systemGeneratedVariables.variableNameForSurveyDataReferrerLanguage]

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






  return (

      <Box maxWidth maxHeight sx={{backgroundColor: config.wallpaper.color, height: "100%", width: "100%", position: "absolute", overflow: "clip"}}>
          <Wallpaper/>

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
              setWaiting={setWaiting}
              setErrorState={setErrorState}
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

          <WaitSignal waiting={waiting}/>

          <Error
              errorState={errorState}
              setErrorState={setErrorState}
              language={language}
          />

      </Box>


  );
}


