
import {questionnaire} from "../const/questionnaire";


export function getAvailableQuestions(surveyData, questionCurrent, questionHistory, questionList) {


    const result = questionList
        .filter((item) => {return questionnaire[item]})
        .filter((item) => {
        const noSkip = !questionnaire[item].skipLogic
            if (noSkip) return true

        const allowedSkipPre = questionnaire[item].skipLogic && surveyData[questionnaire[item].skipLogic.question] === questionnaire[item].skipLogic.value
        const allowedSkip = questionnaire[item].skipLogic && (questionnaire[item].skipLogic.equals ? allowedSkipPre : !allowedSkipPre)

        const result = allowedSkip


        return result
    }).filter((item) => {
        return (![questionCurrent].includes(item))
    })
        .filter((item) => {
            return (!questionHistory.includes(item))
        })



    return result
}

const flattenVariable = (data, variable) => {

    const surveyResponseObject = data[variable];


    if (!surveyResponseObject) return data;
    delete data[variable];

    const oldVariableNames = Object.keys(surveyResponseObject);


    oldVariableNames && oldVariableNames.map(
        (item) => {
            data[variable + item] = surveyResponseObject[item]
        }
    )


return data


}

const flattenDataOutside = (data, compoundQuestions) => {
    let result = data;
    if (!compoundQuestions) compoundQuestions = []

        for (let i = 0; i < compoundQuestions.length; i++) {
            result = flattenVariable(result, compoundQuestions[i])
        }

        delete result["lat"]
        delete result["lng"]
        delete result["id"]

    return result
}

export const flattenData = (data) => {
    const mapQuestions = questionnaire.ordering.filter((item) => (questionnaire[item].questionType === "map"));
    const checkBoxQuestions = questionnaire.ordering.filter((item) => (questionnaire[item].questionType === "checkbox"));


    for (let i = 0; i < mapQuestions.length; i++) {


        const compoundQuestionsInner = questionnaire[mapQuestions[i]].mapQuestionOrder.filter((item) => (questionnaire[item].questionType === "checkbox"))

             const result = data[mapQuestions[i]] && Object.keys(data[mapQuestions[i]]).map(
                (item) => {
                    let inner = flattenDataOutside(data[mapQuestions[i]][item], compoundQuestionsInner)

                    return inner
                }
            )

            if (result) data[mapQuestions[i]] = Object.values(result );


    }

    const result =  flattenDataOutside(data, checkBoxQuestions)

    return result;
}


export const checkQuestionnaireInput = () => {
    const ordering = questionnaire.ordering
    const allQuestions = Object.keys(questionnaire)

    const unknownQuestions = ordering.filter(
        (item) => {
            return !allQuestions.includes(item)
        }
    )

    return unknownQuestions
}


export const levenshteinDistance = (s, t) => {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= s.length; j++) {
            arr[i][j] =
                i === 0
                    ? j
                    : Math.min(
                        arr[i - 1][j] + 1,
                        arr[i][j - 1] + 1,
                        arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                    );
        }
    }
    return arr[t.length][s.length];
};

export const createDataObject = (questionNames) => {
    const entries = questionNames.map((item) => [item, ""])
    const result = Object.fromEntries(entries)
    return result
}

export const createDataShell = () => {
    const resultList = questionnaire.ordering.map(
        (item) => {
            switch(questionnaire[item].questionType) {
                case 'map':
                    return {[item]: []};

                case 'checkbox':
                    return {[item]: createDataObject(Object.keys(questionnaire[item].options.english))}

                default:
                    return {[item]: ""}
            }
        } )

    const result = resultList.reduce((accumulator, newItem) => {return {...accumulator, ...newItem}}, {})

    console.log("datashetll", result)
    return result

}

//
// const sanitize = (input) => input.replace(/\s+/g, '-').toLowerCase();
//
//
//
//
//
//
//
//
// export const createDataShell = () => {
//
//     const emptyDataset = {
//         age: "",
//         anotherQuestion: "",
//         bestApp: surveyQuestionsInput["bestApp"].answers["english"].map((element, index) => {return {id: index, name: element, chosen: false}}),
//         channel: "",
//         countFriends: "",
//         countPhysical: "",
//         countSex: "",
//         covidTestPositive: "",
//         gender: "",
//         groupSex: "",
//         hivPrep: "",
//         hivStatus: "",
//         hivSuppressed: "",
//         homeCensusTract: [],
//         monkeypoxCare: "",
//         monkeypoxTest: "",
//         monkeypoxVaccine: "",
//         monkeypoxDiagnosis: "",
//         places: [],
//         publicID: "",
//         raceAsian: false,
//         raceBlack: false,
//         raceLatinx: false,
//         raceOther: false,
//         racePacific: false,
//         raceWhite: false,
//         referrerEnglish: false,
//         referrerID: "",
//         referralType: "",
//         returnParticipant: "",
//         sex: "",
//         showID: "",
//         sexOrientation: "",
//         symptomSorePenis: false,
//         symptomBackAche: false,
//         symptomBodyRash: false,
//         symptomChills: false,
//         symptomExhaustion: false,
//         symptomFacialRash: false,
//         symptomFever: false,
//         symptomHeadache: false,
//         symptomMouth: false,
//         symptomMuscleAche: false,
//         symptomOther: false,
//         symptomRectalDiscomfort: false,
//         symptomSoreThroat: false,
//         symptomSoresAnus: false,
//         symptomSwollenGlands: false,
//         travelTime: "",
//         userName: "",
//         vaccinationDate: ""
//     }
//
//     return emptyDataset
// };
//
//
//
//
//
// export const sanitizeFormData = (form_data, english, surveyStage) => {
//     const sanitized_form_data = {
//         age:                        form_data.age,
//         anotherQuestion:            form_data.anotherQuestion,
//         bestApp:                    form_data.bestApp.filter(item => item.userSelected).map(item => {return item.name}),
//         channel:                    form_data.channel ? form_data.channel : "other",
//         countFriends:       parseInt(form_data.countFriends === "" ? "0" : form_data.countFriends),
//         countPhysical:      parseInt(form_data.countPhysical === "" ? "0" : form_data.countPhysical),
//         countSex:           parseInt(form_data.countSex === "" ? "0" : form_data.countSex),
//         covidTestPositive:          form_data.covidTestPositive,
//         english:                    english,
//         gender:                     form_data.gender,
//         groupSex:                   form_data.groupSex,
//         hivPrep:                    form_data.hivPrep,
//         hivStatus:                  form_data.hivStatus,
//         hivSuppressed:              form_data.hivSuppressed,
//         homeCensusTract:            form_data.homeCensusTract[0] ? form_data.homeCensusTract[0].censusTract : "",
//         lastQuestion:               questionName(surveyStage),
//         monkeypoxCare:              form_data.monkeypoxCare,
//         monkeypoxTest:              form_data.monkeypoxTest,
//         monkeypoxVaccine:           form_data.monkeypoxVaccine,
//         monkeypoxDiagnosis:         form_data.monkeypoxDiagnosis,
//         places:                     form_data.places.map(item => {return {censusTract: item.censusTract, placeType: item.placeType, placeSex: item.placeSex, placeFreqAttend: parseInt(item.placeFreqAttend), placeFreqHaveSex: item.placeFreqHaveSex === "" ? 0 : parseInt(item.placeFreqHaveSex)}}),
//         publicID:                   form_data.publicID,
//         raceAsian:                  form_data.raceAsian,
//         raceBlack:                  form_data.raceBlack,
//         raceLatinx:                 form_data.raceLatinx,
//         raceOther:                  form_data.raceOther,
//         racePacific:                form_data.racePacific,
//         raceWhite:                  form_data.raceWhite,
//         referrerEnglish:            form_data.referrerEnglish,
//         referrerID:                 form_data.referrerID,
//         referralType:               parseInt(form_data.referralType),
//         returnParticipant:          form_data.returnParticipant,
//         sex:                        form_data.sex,
//         sexOrientation:             form_data.sexOrientation,
//         symptomSorePenis:           form_data.symptomSorePenis,
//         symptomBackAche:            form_data.symptomBackAche,
//         symptomBodyRash:            form_data.symptomBodyRash,
//         symptomChills:              form_data.symptomChills,
//         symptomExhaustion:          form_data.symptomExhaustion,
//         symptomFacialRash:          form_data.symptomFacialRash,
//         symptomFever:               form_data.symptomFever,
//         symptomHeadache:            form_data.symptomHeadache,
//         symptomMouth:               form_data.symptomMouth,
//         symptomMuscleAche:          form_data.symptomMuscleAche,
//         symptomOther:               form_data.symptomOther,
//         symptomRectalDiscomfort:    form_data.symptomRectalDiscomfort,
//         symptomSoreThroat:          form_data.symptomSoreThroat,
//         symptomSoresAnus:           form_data.symptomSoresAnus,
//         symptomSwollenGlands:       form_data.symptomSwollenGlands,
//         travelTime:                 parseInt(form_data.travelTime) ? parseInt(form_data.travelTime) : 0,
//         type:                       form_data.type,
//         userName:                   form_data.userName,
//         vaccinationDate:            form_data.vaccinationDate === "" ? new Date("1000-01-01T23:50:21.817Z") : form_data.vaccinationDate.toLocaleDateString()
//     }
//
//     return sanitized_form_data;
//
// };
//
//
// export const sanitizeReferralData = (form_data) => {
//     const sanitized_referral_data = {
//         "publicID" : form_data.publicID,
//         "referrerID" : form_data.referrerID,
//         "referralType" : parseInt(form_data.referralType)
//     }
//
//     return sanitized_referral_data;
// }
//
//
