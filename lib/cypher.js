import {questionnaire} from "../const/questionnaire";
import {config} from "../const/config";



export const writeCypher = (cleanData) => {

    const saveSurvey = (cleanData) => {

        const individualAttributeVariables = Object.keys(cleanData).filter(
            (item) => {
                const notArray = !Array.isArray(cleanData[item])

                const notSensitive = !config.sensitiveSystemGeneratedVariables.map(
                    (sysVariableName) => {
                        const forbiddenName = config.systemGeneratedVariables[sysVariableName]
                        return forbiddenName
                    }
                ).includes(item)

                const notContactEmail = item !== "contactEmail"

                return notArray && notSensitive && notContactEmail
            }
        )


        const head = `MERGE (p:Person { userId :  $userId}) SET `

        const body = individualAttributeVariables.reduce(
            (accumulator, nextItem) => {
                const result = accumulator + ` p.${nextItem} = $${nextItem}, `
                return result
            }, ""
        )


        return head + body.slice(0,-2)
    }

    const savePlaceRelations = (cleanData) => {


        const mapQuestions = Object.keys(cleanData).filter(
            (item) => {
                const questionType = questionnaire[item] && questionnaire[item].questionType
                const result = questionType && questionType === "map"
                return result
            }
        )

        const placeRelationsCypher = {}


        mapQuestions.map(
            (variableName) => {
                const relationType = questionnaire[variableName].personPlaceRelation

                placeRelationsCypher[variableName] = cleanData[variableName].map(
                    (place) => {
                        const individualAttributeVariables = Object.keys(place).filter((item) => {return (item !== "censusTract")})

                        const head = `MATCH (p:Person {userId:$userId}) MATCH (c:CensusTract {identifier : $censusTract }) CREATE (p)-[r:${relationType}]->(c) SET `

                        const body = individualAttributeVariables.reduce(
                            (accumulator, nextItem) => {
                                const result = accumulator + ` r.${nextItem} = $${nextItem}, `
                                return result
                            }, ""
                        )

                        const bodyFinal = body + `r.timeStamp = $timeStamp, r.sessionId = $sessionId`

                        return head + bodyFinal

                    })
            }
        )

        const result = placeRelationsCypher


        return result;
    }

    const clearPlaceRelations = (cleanData) => {
        const result = `MATCH (:Person {userId:$userId})-[r]->(:CensusTract) WHERE r.sessionId = $sessionId DELETE r`
        return result
    }

    const savePersonRelation = (cleanData) => {
        // amend to include virus ID and virus points
        return `MATCH (a:Person {userId:$userId  }) MATCH (b:Person {userId : $referrerId }) MERGE (a)<-[r:REFERRED]-(b) SET r.createdAt=$timeStamp, r.referralType=$referralType, r.referrerLanguage=$referrerLanguage`
    }

    const saveVirusRelation = () => {
        // create recieved edge
        // timestamp
    }

    const createVirus = () => {
        // create virus node
        // create originated edge
        // timestamp on edge
        // timestamp on node
        // returns virusId
    }

    const mutateVirus = () => {
        // create a virus node
        // create originated edge
        // create mutate edge
        // timestamp on all edges
        // timestamp on node
        // returns virusId
    }

    const result = {
        saveSurvey: saveSurvey(cleanData),
        savePlaceRelations: savePlaceRelations(cleanData),
        savePersonRelation: savePersonRelation(cleanData),
        clearPlaceRelations: clearPlaceRelations(cleanData)
    }

    return result;
}

export const readCypher = (cleanData) => {

    return {
        lastQuestionCypher: `MATCH (p:Person { userId :  $userId}) RETURN ` +
        `p.${config.systemGeneratedVariables.variableNameForLastQuestion} as ${config.systemGeneratedVariables.variableNameForLastQuestion}, ` +
            `p.${config.systemGeneratedVariables.variableNameForSurveyDataSessionId} as ${config.systemGeneratedVariables.variableNameForSurveyDataSessionId} `
    }
}

export const virusCypher = (virus) => {
    const create = (virus) => {
        const head = `MERGE (v:Virus { virusId :  $virusId})`
        const body = 'SET v.text = $virusText, v.timeStamp = $timeStamp '

        return head + body
    }

    const join = (virus) => {
        const head = `MATCH (v:Virus { virusId :  $virusId}), (p: Person {userId: $userId}) `
        const body = 'MERGE (p)-[:ORIGNATED]->(v)'

        return head + body
    }


    const mutate = (virus) => {
        const head = `MATCH (v:Virus { virusId :  $virusIdParent}) MATCH (q:Virus { virusId :  $virusIdChild}) MERGE (q) <-[o:MUTATED_TO]-(v) `
        const body = 'SET o.timeStamp = $timeStamp '

        return head + body
    }

    const link = (virus) => {
        const head = `MATCH (p:Person { userId :  $personId}) MATCH (q:Person { userId :  $referrerId}) MERGE (q)-[o:TRANSMITTED_TO]->(p) `
        const body = 'SET o.timeStamp = $timeStamp, o.virusId = $virusId '

        return head + body
    }

    const fetch = (virus) => {
        const query = `MATCH (v:Virus { virusId :  $virusId}) RETURN v.text as virusText, v.timeStamp as virusOriginTime `


        return query
    }

    return (
        {
            create: create(virus),
            mutate: mutate(virus),
            fetch: fetch(virus),
            join: join(virus),
            link: link(virus)
        }
    )
}

const createAndMergeCensusTractQuery = `MERGE (c:CensusTract { identifier : $censusTract }) RETURN c`;

