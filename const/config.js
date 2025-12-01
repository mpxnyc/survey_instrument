import {mapStyles} from "./mapStyles";


export const config = {
    testing: false,
    saveThrottleDuration: 1000*10,
    colorBackground: "#C5EFFF",
    colorText: "#000000",
    colorButtons: "#41BFFF",
    colorBorder: "#FF99C5",
    cookieDuration : {
        testing: 60*10,
        production: 60*60*24*29*6
    },
    defaultLanguage: "english",
    mapSettings: {
        iconURL: {
          home: '/MPX_peach.svg',
          placesHookup: '/MPX_handshake.svg'
        },
        libraries: ["places"],
        mapSearchBar: {
            searchThrottleDuration: 1000,
            searchRadius: 100 * 1000,
            setZoom: 14
        },
        mapContainerStyle: {
            height: "100vh",
            width: "100vw",
        },
        options: {
            styles: mapStyles,
            disableDefaultUI: true,
            zoomControl: true,
        },
        center: {
            lat: 40.790420,
            lng: -73.923278,
        },
        zoom: 12
    },
    referralSettings: {
        referrerIdName: "p",
        referralType: {
            settingName: "q",
            values: {
                friend: "269d78R5",
                hookup: "20463s2"
            }
        },
        referrerLanguage: {
            settingName: "r",
            values: {
                english: "abs9iw0",
                spanish: "2bo9as80"
            }
        },
        referralChannel: {
            settingName: "c",
            values: {
                partner_toolkit: 'pt',
                google_search: 'gs',
                twitter:	'tw',
                instagram:	'ig',
                grindr:	'gr',
                ferry: 	'fr',
                earned_media: 	'em',
                cameo_promotion:	'cm',
                link_nyc:	'lnyc'
            }
        },
        virusGameIdName: "t"
    },
    systemGeneratedVariables: {
        variableNameForSurveyDataReferralType: "referralType",
        variableNameForSurveyDataReferrerId: "referrerPublicId",
        variableNameForSurveyDataReferrerLanguage: "referrerLanguage",
        variableNameForSurveyDataOwnLanguage: "language",
        variableNameForSurveyDataCookiesUserName: "cookiesUsername",
        variableNameForSurveyDataUserName: "userName",
        variableNameForSurveyDataPublicId: "publicId",
        variableNameForSurveyDataCensusTract: "censusTract",
        variableNameForLastQuestion: "lastQuestion",
        variableNameForSurveyDataVirusReceivedId: "receivedVirus",
        variableNameForSurveyDataVirusCreatedId: "createdVirus",
        variableNameForSurveyDataSessionId: "sessionId",
        variableNameForSurveyDataChannel: "channel"
    },
    sensitiveSystemGeneratedVariables: [
        "variableNameForSurveyDataReferralType",
        "variableNameForSurveyDataReferrerId",
        "variableNameForSurveyDataReferrerLanguage",
        "variableNameForSurveyDataCookiesUserName",
        "variableNameForSurveyDataUserName",
        "variableNameForSurveyDataPublicId",
        "variableNameForSurveyDataCensusTract",
        "variableNameForSurveyDataVirusReceivedId",
        "variableNameForSurveyDataVirusCreatedId"
    ],
    viralGameOptions: {
        mutate: {
            minMutationDistance: 3,
            maxMutationDistance: 7
        },
        create: {
            minLength: 14,
            maxLength: 20
        }
    },
    wallpaper: {
        color: "#FFFFFF",
        icon: {
            name: "peach",
            size: 0,
            reps: 500
        }
    }
}