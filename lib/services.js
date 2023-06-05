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

        try {


            const response = await fetch("/api/assignId", {method: "GET"});
            const result   = await response.json()

            return result;
        } catch (e) {

            throw new IDUnassigned()
        }


    },

    saveSurvey: _.throttle(async (data) => {

        console.log("Sending data to backend")
        const sanitized_form_data = cleanSurveyData(data);


        const payload = {
            surveyData: sanitized_form_data,
            cypher: writeCypher(sanitized_form_data)
        }

        try {
            const response = await axios.post("/api/saveSurveyData", payload)
            const result   = await response

            return result;
        } catch (e) {
            console.log(e)

            throw new SurveyNotSaved(e.message)
        }


    }, config.saveThrottleDuration, {leading: true, trailing: true}),

    submitCookie: async (data) => {
        const payload = {
            surveyData: data,
            cypher: readCypher(data)
        }

        try {

            const response = await axios.post("/api/submitCookie", payload)
            const result   = await response

            return result;
        } catch (e) {
            console.log(e)
            throw new SubmitCookieFailed()
        }
    }
}

export default services;