import {questionnaire} from "../const/questionnaire";
import {config} from "../const/config";

const cleanCompoundQuestion = (variableName, dataSet) => {

    const result = Object.keys(dataSet[variableName]).reduce(

        (accumulator, nextVariable) => {

            const nextEntry = {
                [variableName + nextVariable]: dataSet[variableName][nextVariable]
            }

            const result = {...accumulator, ...nextEntry}
            return result
        }, {}
    )

    return result;
}

const cleanDataSet = (dataSet) => {

    const variableNames = Object.keys(dataSet)

    const simpleQuestions = variableNames.filter(
        (item) => {
            if (Object.values(config.systemGeneratedVariables).includes(item)) return true;

            return questionnaire[item] && questionnaire[item].questionType === "radio";
        }
    )

    const compoundQuestions = variableNames
        .filter(
            (item) => {
                const result = !simpleQuestions.includes(item)
                return result
            })
        .filter(
            (item) => {
                const result = questionnaire[item] && questionnaire[item].questionType !== "map"
                return result
            }
        )

    const simpleQuestionData = simpleQuestions.reduce(
        (accumulator, newItem) => {
            const newEntry = {
                [newItem]: dataSet[newItem]
            };

            const result = {...accumulator, ...newEntry}
            return result
        }, {}
    )

    const compoundQuestionData = compoundQuestions.reduce(
        (accumulator, nextVariableName) => {
            const nextVariableData = cleanCompoundQuestion(nextVariableName, dataSet)
            const result = {...accumulator, ...nextVariableData}
            return result
        }, {}
    )

    const result = {...simpleQuestionData, ...compoundQuestionData}
    return result
}

const cleanMapData = (variableName, dataSet) => {
    const mapDataSets = Object.values(dataSet[variableName]) // array
    const cleanMapDataSets = mapDataSets.map(
        (mapDataSet) => {
            const result = cleanDataSet(mapDataSet)
            return result
        }
    )

    return cleanMapDataSets
} // array

export const cleanSurveyData = (surveyData) => {
    const mapQuestions = Object.keys(surveyData).filter(
        (item) => {
            const result = questionnaire[item] && questionnaire[item].questionType === "map"
            return result;
        }
    )

    const mapData = mapQuestions.reduce(
        (accumulator, nextItem) => {
            const newEntry =
                {
                    [nextItem]: cleanMapData(nextItem, surveyData)
                }

                const result = {...accumulator, ...newEntry}

            return result;
        }, {}
    )

    const otherData = cleanDataSet(surveyData)

    const result = {...mapData, ...otherData}

    return result
}