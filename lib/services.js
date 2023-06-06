// import axios from "axios";
// import {sanitizeFormData, sanitizeReferralData} from "./utilityFunctions";
// import {
//     AnswerQuestion,
//     CantAssignReferral,
//     CantGetID, CantSaveEmail,
//     IDUnassigned,
//     NoCensusTract,
//     NoReferrerID,
//     SurveyNotSaved
// } from "./Errors";
// import {XMLParser} from 'fast-xml-parser'


// const headers = {
//   'Content-Type': 'application/json',
//   'Authorization': 'JWT fefege...'
// }


import axios from "axios";
import {config} from "../const/config";
import {cleanSurveyData} from "./cleanSurveyData";
import {readCypher, virusCypher, writeCypher} from "./cypher";
import _ from "lodash";
import {
    IDUnassigned,
    NoCensusTract,
    SubmitCookieFailed,
    SurveyNotSaved
} from "./errors";

let stillSaving = false;
let stillAssigningId = false;
let stillSubmittingCookie = false;

const services = {
    getCensusTract: async ({lat, lng}) => {

        try {
            const response = await fetch("/api/fetchCensus", {method: "POST", body: JSON.stringify({lat: lat, lng: lng})});
            const result   = await response.json()
            return result.result;
        } catch (e) {
            console.log(e)
            throw new NoCensusTract(e.message)
        }
    },

    assignID: async () => {

        console.log("initialte assign ID")

       if (stillAssigningId) {
           console.log("still assigning ID")
           return
       }

        try {


            stillAssigningId = true;
            const response = await fetch("/api/assignId", {method: "GET"});
            const result   = await response.json()

            stillAssigningId = false;
            return result;
        } catch (e) {
            stillAssigningId = false;
            throw new IDUnassigned()
        }


    },

    saveSurvey: _.throttle(async (data) => {

        console.log("save initiated after throttle")
        if (stillSaving) {
            console.log("still saving")
            return
        }

        const sanitized_form_data = cleanSurveyData(data);
        console.log("Sending data to backend", sanitized_form_data)

        const payload = {
            surveyData: sanitized_form_data,
            cypher: writeCypher(sanitized_form_data)
        }

        try {
            stillSaving = true
            const response = await axios.post("/api/saveSurveyData", payload)
            const result   = await response
            stillSaving = false;
            return result;
        } catch (e) {
            stillSaving = false;
            console.log(e)
            throw new SurveyNotSaved(e.message)
        }


    }, config.saveThrottleDuration, {leading: false, trailing: true}),

    submitCookie: async (data) => {
        console.log("initiate submit cookie")

        if (stillSubmittingCookie) {
            console.log("still submitting cookie")
            return;
        }

        const payload = {
            surveyData: data,
            cypher: readCypher(data)
        }

        try {

            stillSubmittingCookie = true;
            const response = await axios.post("/api/submitCookie", payload)
            const result   = await response

            stillSubmittingCookie = false;
            return result;
        } catch (e) {
            console.log(e)
            stillSubmittingCookie = false;
            throw new SubmitCookieFailed()
        }
    }
}

export default services;