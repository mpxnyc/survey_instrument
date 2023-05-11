import * as React from 'react';
import Box from '@mui/material/Box';
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useRouter} from "next/router";
import Peaches from '../public/peaches.svg'
import Beach from '../public/beach.png'

import {questionnaire} from "../const/questionnaire";
import {config} from "../const/config";

import Canvas from "../components/canvas";
import CanvasMap from "../components/canvasMap";
import CanvasViralGame from "../components/canvasViralGame";

import {createDataShell, getAvailableQuestions} from "../lib/utilityFunctions";
import services from "../lib/services";
import Image from "next/image";






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



  const triggerSaveSurvey = async (data) => {
    console.log("Save Triggered")

    await services.saveSurvey(data);

  };

  const triggerAssignId = async () => {
    console.log("Assign ID Triggered")


      try {
          const id = await services.assignID();

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

  const triggerConfirmCookie = async () => {
    console.log("triggered confirm cookie")
    await handleConfirmCookie()
  }

  const handleUpdateSurveyData = (name, value) => {

    setSurveyData((old) => {

      const newData = old;
      newData[name] = value

      newData.userName && triggerSaveSurvey(newData)
      const newIndex = questionnaire.ordering.indexOf(name)
      const currentIndex = newData.lastQuestion && questionnaire.ordering.indexOf(newData.lastQuestion)

      if (currentIndex < newIndex) newData.lastQuestion = name;

      console.log("Updated SurveyData", surveyData)
      return newData;
    })


  };

  const handleNextQuestion = () => {

      if (surveyData[questionCurrent] === questionnaire[questionCurrent].exitCondition) {
          setQuestionCurrent(
              () => {
                  setQuestionFuture([])
                  return questionnaire.milestones.surveyComplete
              }
          )

          return
      }

    if (surveyData.cookiesUsername) {
      questionnaire.milestones.confirmCookie.includes(questionCurrent) && triggerConfirmCookie()
    } else {
      questionnaire.milestones.assignId.includes(questionCurrent) && !surveyData.userName && triggerAssignId()
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

  const handleConfirmCookie = async () => {

    const cookieUserName = surveyData[config.systemGeneratedVariables.variableNameForSurveyDataCookiesUserName]

    let publicId
    let lastQuestion

    if (cookieUserName) {
      publicId = await triggerFetchPublicId({userName: cookieUserName})

      lastQuestion = await triggerFetchLastQuestion({userName: cookieUserName, publicId: publicId})

      const indexLastSaved = questionnaire.ordering.findIndex((item) => {return (item === lastQuestion)})
      const indexCurrent   = questionnaire.ordering.findIndex((item) => {return (item === questionCurrent)})

      indexLastSaved > indexCurrent && setQuestionCurrent(questionnaire.ordering[indexLastSaved + 1]);

      setSurveyData(
          (current) => {
            current[config.systemGeneratedVariables.variableNameForSurveyDataUserName] = publicId
            current[config.systemGeneratedVariables.variableNameForLastQuestion] = lastQuestion
            return current
          }
      )
    }
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


  useEffect(
      () => {
        const referrerLanguageParameterValue = router.query[config.referralSettings.referrerLanguage.settingName];
        const referralTypeParameterValue = router.query[config.referralSettings.referralType.settingName];
        const referralIdParameterValue = router.query[config.referralSettings.referrerIdName]
        const viralQuestionIdParameterValue = router.query[config.referralSettings.virusGameIdName]


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
          [config.systemGeneratedVariables.variableNameForSurveyDataVirusReceivedId]: viralQuestionIdParameterValue
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

  useEffect(
      () => {

        console.log("cookies", cookies && cookies)
        cookies && handleUpdateSurveyData("cookiesUsername", cookies.userName)

      },
      [unchangingVariable]
  )

  useEffect(
      () => {



        !currentVirus.virusText && surveyData.receivedVirus && surveyData.publicId && surveyData.referrerPublicId && handleFetchVirus()

      }, [surveyData.receivedVirus, surveyData.publicId, surveyData.referrerPublicId]
  )






  return (

      <Box maxWidth maxHeight sx={{backgroundColor: "white", height: "100%", width: "100%", position: "absolute", overflow: "clip"}} >

          <Box
              height={"100%"}
              width={"100%"}

          sx={{opacity: 0.5, objectFit: "cover"}}>
              <Image src={Beach}/>
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
