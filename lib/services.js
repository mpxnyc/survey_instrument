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
import {flattenData} from "./utilityFunctions";
import {config} from "../const/config";
import {cleanSurveyData} from "./cleanSurveyData";
import {readCypher, virusCypher, writeCypher} from "./cypher";
import _ from "lodash";
import {CantPlayViral, CantRetrieveData, IDUnassigned, NoCensusTract, SurveyNotSaved} from "./errors";



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
            console.log("assign id response", response)
            const result   = await response.json()

            return result;
        } catch (e) {
            console.log("id unassianged")
           // console.log(e)
            throw new IDUnassigned(e.message)
        }


    },

    saveSurvey: _.throttle(async (data) => {

        console.log("Sending data to backend")
        const sanitized_form_data = cleanSurveyData(data);

        console.log("services sanitized_form_data", sanitized_form_data)

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

            throw new SurveyNotSaved(e.message)
        }
    },

    saveEmail: async (email, serverURL, APIKey) => {
        // const endpointEmail = `${serverURL}/user/contact`
        // const payload = {email: email};
        //
        // const config = {
        //     headers: {
        //         Authorization: APIKey
        //     }
        // }
        //
        // try {
        //     const respEmail = await axios.post(endpointEmail, payload, config);
        //
        // } catch (e) {
        //     console.log(e);
        //     throw new CantSaveEmail(e.message);
        //     return;
        // }
        // return;
    },

    getLastQuestion: async (data) => {

        const sanitized_form_data = cleanSurveyData(data);

        const payload = {
            surveyData: sanitized_form_data,
            cypher: readCypher(sanitized_form_data)
        }


        try {
            const response = await axios.post("/api/fetchLastQuestion", payload)
            const result   = await response
            return result.data.lastQuestion;

        } catch (e) {
            console.log(e)

            throw new CantRetrieveData(e.message)
        }


    },

    getPublicId: async (data) => {

        const payload = data
        try {

            const response = await axios.post("/api/fetchPublicId", payload)



            const result   = await response.data.publicId

            return result;
        } catch (e) {
            console.log(e)
            throw new CantRetrieveData(e.message)
        }
    },

    createVirus: async (data) => {

        console.log("Creating Virus")

        const {virusText, publicId} = data;

        const virus = {
            virusText: virusText,
            publicId: publicId
        }

        const payload = {
            virus: virus,
            cypher: virusCypher(virus)
        }

        try {
            const response = await axios.post("/api/createVirus", payload)

            const result   = await response

            return result;
        } catch (e) {
            console.log(e)

             throw new CantPlayViral(e.message)
        }
    },

    mutateVirus: async (data) => {
        console.log("Mutating Virus")


        const payload = {
            mutation: data,
            cypher: virusCypher(data)
        }

        try {
            const response = await axios.post("/api/mutateVirus", payload)

            const result   = await response

            return result;
        } catch (e) {
            console.log(e)

             throw new CantPlayViral(e.message)
        }
    },

    fetchVirus: async (data) => {

        const payload = {
            virus: data,
            cypher: virusCypher(data)
        }

        try {
            const response = await axios.post("/api/fetchVirus", payload)

            const result   = await response.data

            return result;
        } catch (e) {
            console.log(e)
             throw new CantPlayViral(e.message)
        }
    }
}

export default services;