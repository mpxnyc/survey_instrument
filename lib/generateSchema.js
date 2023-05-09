import {questionFormatProperties} from "../lib/questionFormats";
import {questionnaire} from "../const/questionnaire";
import {config} from "../const/config";

const questions = questionnaire.ordering.filter(
    (variableName) => {
        const questionType = questionnaire[variableName].questionType

        if (questionType === "map") {return true} else if (questionFormatProperties[questionType].baseType) {
            return true
        } else {
            return false
        }
    }
)

const mapQuestions = questions.filter(
    (variableName) => {
        const questionType = questionnaire[variableName].questionType;
        const isMapQuestion = questionType === "map";
        return isMapQuestion
    }
)

const makeResponseTypeSimple = (name, type) => {
    return {
        [name]: {
            "oneOf": [
                {
                    type: type,

                },
                {
                    type: "null"
                }
            ]
        }
    }
}

const makeResponseTypeCompound = (variableName) => {

    const responseOptions = Object.keys(questionnaire[variableName].options.english)
    const newVariableNames = responseOptions.map(
        (newOption) => {
            return variableName + newOption
        })

    const result = newVariableNames.reduce(
        (accumulator, newVariableName) => {
            const questionType = questionnaire[variableName].questionType
            const baseType = questionFormatProperties[questionType].baseType
            const newType = makeResponseTypeSimple(newVariableName, baseType)
            return {...accumulator, ...newType}
        }, {}
    )

    return result
}

const makeResponseTypesDataset = (variableNames) => {

    const result = variableNames.reduce(
        (accumulator, variableName) => {
            const simpleType = questionnaire[variableName].questionType === "radio"
            const result = simpleType ? makeResponseTypeSimple(variableName, "string") : makeResponseTypeCompound(variableName)
            return {...accumulator, ...result}
        }, {}
    )

    return result
}

const makePropertiesData = () => {

    const nonMapQuestions = questions
        .filter((variableName) => {return !mapQuestions.includes(variableName)})

    const systemGeneratedVariables = Object.values(config.systemGeneratedVariables)

    const mapQuestionTypes = mapQuestions.reduce(
        (accumulator, variableName) => {
            const types = makeResponseTypesDataset(questionnaire[variableName].mapQuestionOrder)
            const censusTractType = makeResponseTypeSimple("censusTract", "string")

            const finalTypes = {...types, ...censusTractType};

            const result = {
                [variableName]: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: finalTypes
                    }
                }
            }
            return {...accumulator, ...result}
        }, {}
    )

    const nonMapQuestionTypes = makeResponseTypesDataset(nonMapQuestions)

    const systemGeneratedVariableTypes = systemGeneratedVariables.reduce(
        (accumulator, newVariableName) => {
            const result = {...accumulator, ...makeResponseTypeSimple(newVariableName, "string")}
            return result
        }, {}
    )

    const result = {...mapQuestionTypes, ...nonMapQuestionTypes, ...systemGeneratedVariableTypes}
    return result
}

const makePropertiesCypher = () => {


    const result = {

            saveSurvey: {
                type: "string"
            },
            savePersonRelation: {
                type: "string"
            },
        savePlaceRelations: {
                type: "object",
                properties: {}
            },
        clearPlaceRelations: {
                type: "string"
        }
        }

    mapQuestions.map(
        (item) => {
            result.savePlaceRelations.properties[item] = {
                type: "array",
                items: {
                    type: "string"
                }
            }
        }
    )


    return result
}

export const createSchema = () => {
    const result = {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "properties": {},
        "definitions": {},
        "required": {}
    }

    result.properties = {
        cypher: {
            type: "object",
            properties: makePropertiesCypher()
        },
        data: {
            type: "object",
            properties: makePropertiesData()
        }
    }

    return (result)
}
