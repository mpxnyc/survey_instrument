
import {questionnaire} from "../const/questionnaire";
import {config} from "../const/config";


export function getAvailableQuestions(surveyData, questionCurrent, questionHistory, questionList) {



    const result = questionList
        .filter((item) => {
            // Make sure question exists
            return questionnaire[item]
        })
        .filter((item) => {
            // screen out questions which are disallowed by skip pattern
            const lastQuestionIndex = questionnaire.ordering.findIndex((innerItem) => {return innerItem === surveyData[config.systemGeneratedVariables.variableNameForLastQuestion]})
            const skipLogicIndex    = questionnaire[item].skipLogic && questionnaire.ordering.findIndex((innerItem) => {return innerItem === questionnaire[item].skipLogic.question})

            const allowedSkipPre = questionnaire[item].skipLogic
                && surveyData[questionnaire[item].skipLogic.question] !== ""
                && surveyData[questionnaire[item].skipLogic.question] === questionnaire[item].skipLogic.value

            const allowedBySkipRules    = questionnaire[item].skipLogic && (questionnaire[item].skipLogic.equals ? allowedSkipPre : !allowedSkipPre)

            const allowedByLackOfSkipRules = !questionnaire[item].skipLogic

            const allowedSkipByBlankHistory = questionnaire[item].skipLogic
                && surveyData[questionnaire[item].skipLogic.question] === ""
                && skipLogicIndex < lastQuestionIndex

            return allowedBySkipRules || allowedByLackOfSkipRules || allowedSkipByBlankHistory
        })
        .filter((item) => {
            // Remove Current Question
            return (![questionCurrent].includes(item))
        })
        .filter((item) => {
            // Remove Question History

            return (!questionHistory.includes(item))
        }).filter(
            (item) => {
                // Remove questions in the past

                const questionIndex     = questionnaire.ordering.findIndex((innerItem) => {return innerItem === item} )
                const lastQuestionIndex = questionnaire.ordering.findIndex((innerItem) => {return innerItem === surveyData[config.systemGeneratedVariables.variableNameForLastQuestion]})

                return questionIndex >= lastQuestionIndex
            }
        )

    console.log("available questions", result)

    return result
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

export const createCheckBoxDataObject = (questionNames) => {
    const entries = questionNames.map((item) => [item, false])
    const result = Object.fromEntries(entries)
    return result
}

export const createDataShell = (questionNames) => {
    const resultList = questionNames.map(
        (item) => {
            switch(questionnaire[item].questionType) {
                case 'map':
                    return {[item]: {}};

                case 'checkbox':
                    return {[item]: createCheckBoxDataObject(Object.keys(questionnaire[item].options.english))}

                default:
                    return {[item]: ""}
            }
        } )

    const result = resultList.reduce((accumulator, newItem) => {return {...accumulator, ...newItem}}, {})


    return result

}



export const arrayRange = (start, stop, step) =>
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );