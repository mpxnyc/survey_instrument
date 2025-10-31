import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import {ArrowUpward} from "@mui/icons-material";

const yesNoResponse = {
    'english': {
        'yes': 'Yes',
        'no': 'No'
    },
    'spanish': {
        'yes': 'Sí',
        'no': 'No'
    },
}

const removePinQuestionBody = {
    english: ["Would you like to remove this place?"],
    spanish: ["¿Quieres eliminar este lugar?"]
}

export const questionnaire = {
    'ordering': [
        'welcome',
        'consentStudy',
        'countFriends',
        'inviteToSurvey',
        'home',
        'placesHookup',
        'thankYou',
        'ineligible'
    ],
    'milestones': {
        assignId: [""],
        retrieveId: [''],
        surveyComplete: 'thankYou',
        surveyIneligible: 'ineligible',
        doneWithSurvey: 'contactMe'
    },
    'buttons': {
        'take_survey': {
            english: "Take the survey!",
            spanish: " ¡Contesta la encuesta!"
        },
        'challenge_friends': {
            english: "Challenge More Friends!",
            spanish: "¡Invita a más amigos!"
        },
        'check_results': {
            english: "Check my results!",
            spanish: "¡Revisa mis resultados!"
        },
        'friends': {
            english: "Friends",
            spanish: "Amigos"
        },
        'hookups': {
            english: 'Hookups',
            spanish: 'Sexo casual'
        },
        cancel: {
            english: 'Cancel',
            spanish: 'Cancela'
        },
        confirm: {
            english: 'Confirm',
            spanish: 'Confirma'
        }
    },
    'welcome': {
        heading: {
            english: "Welcome to MPX NYC!",
            spanish: "¡Bienvenido a MPX NYC!"
        },
        question: {
            english: "It looks like you participated already. Is this your code?",
            spanish: "Parece que ya participaste. ¿Este es tu código?"
        },
        options: {
            english: {'yes': 'Yes', 'no': 'No', },
            spanish: {'yes': 'Sí', 'no': 'No', },
        },
        questionType: "user_name_confirm"
    },
    'consentStudy': {
        heading: {
            english: "Informed Consent MPX NY",
            spanish: "Consentimiento Informado MPX NY"
        },
        subtitle: {
            english: "MPX NY",
            spanish: "MPX NY"
        },
        body: {
            english: [
                "This is a demonstration of the MPX NYC Person-place mapper. No data will  be saved.",

            ],
            spanish: [
                "Esta es una demostración del mapeador persona-lugar MPX NYC. No se guardará ningún dato."
            ]
        },
        questionType: "longtext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'countFriends': {
        question: {
            english: "How many LGBTQ friends do you have who are important to you for any reason? Count only those you have been in touch with over the past 4 weeks.",
            spanish: "¿Cuántos amigos LGBTQ tienes que sean importantes para ti por alguna razón? Cuenta sólo con los que hayas estado en contacto las últimas 4 semanas. "
        },
        options: {
            english: {'none': 'None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Over 10'},
            spanish: {'none': 'Ninguno', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Más de 10'}
        },
        questionType: "radio",
        forcedResponse: true
    },
    'inviteToSurvey': {
        sharePromptHeading: {
            english: "Contribute to the Queer and Trans Map of New York City",
            spanish: "Contribuye al mapa queer y trans de la Ciudad de Nueva York."
        },
        sharePromptBody: {
            english: [
                'To learn how to stop new diseases quickly, we are building a community map of queer and trans people in New York City. This is a giant network connecting friends and hookups.',
                'Contribute to this effort by sharing the survey with up to 10 friends or hookups (sexual partners) you have communicated with in the past 4 weeks using the button below.',
                'Each additional person you successfully link will help us to understand how to spread important information quickly when a new infection like monkeypox (MPOX) starts.',
                'For those who successfully connect friends, we will provide a free anonymized report summarizing study results for your friend circle.',
                'Click here to share this survey with queer and trans friends you have communicated with in the past 4 weeks.'
            ].slice(0,2),
            spanish: [
                'Para aprender cómo detener a las nuevas infecciones rápidamente, estamos construyendo un mapa comunitario de las personas queer y trans de la Ciudad de Nueva York. Este es una red gigante que conecta a amigos y parejas sexuales.',
                'Contribuye a este esfuerzo compartiendo la encuesta con hasta 10 amigos o parejas sexuales con los que te hayas comunicado en las últimas 4 semanas usando el botón de abajo.',
                'Cada persona adicional que conectes exitosamente nos ayudará a entender cómo difundir información rápidamente cuando una nueva infección como viruela símica (MPOX) comienza.',
                'Para aquellos que exitosamente conecten a amigos, les daremos un reporte anónimo gratutio que contendrá un resumen de los resultados de tu círculo de amigos.',
                'Aprieta aquí para compartir esta encuesta con tus amigos queer y trans con los que te hayas comunicado en las últimas 4 semanas.'
            ].slice(0,2),
        },
        shareMessage: {
            english: "Hey there! I participated in a study to help us fight monkeypox in our community. Learning how people hook up in New York City will help our community to stop more people from getting infected, so please take the survey! Here is your personal link (please don’t share it with anyone!)",
            spanish: "Hey there! I participated in a study to help us fight monkeypox in our community. Learning how people hook up in New York City will help our community to stop more people from getting infected, so please take the survey! Here is your personal link (please don’t share it with anyone!)"
        },
        questionType: "sharedialog"
    },
    'home': {
        questionType: "map",
        uniquePlace: true,
        mapQuestionInstruction: "homeInstructions",
        mapQuestionDetail: "homeDetail",
        mapQuestionSafety: "homeSafety",
        mapQuestionOrder: [],
        mapRemovePinQuestion: "homeMapRemovePinQuestion",
        personPlaceRelation: "LIVES_IN",
        forcedResponse: true
    },
    'homeDetail': {
        questionType: "instruction",
        heading: {
            english: "",
            spanish: ""
        },
        body: {
            english: [
                "Use the search bar to search for a neighborhood, place name, or address.",
                "You can drag the map and zoom in and out",
                "Tap on the location of your home and a marker will show the location on the map"
            ],
            spanish: [
                "Usa la barra de navegación para encontrar tu vecindario, el nombre de un lugar o tu dirección.",
                "Puedes arrastrar el mapa y hacer zoom hacia adentro o afuera.",
                "Señala la ubicación de tu casa y aparecerá un marcador en esa ubicación dentro del mapa."
            ],
        }
    },
    'homeSafety': {
        questionType: "instruction",
        heading: {
            english: "",
            spanish: ""
        },
        body: {
            english: [
                "We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
            spanish: [
                "No vamos a guardar la ubicación exacta de los lugares que seleccionaste, o ninguna información que te pueda identificar. ",
                "Sólo vamos a guardar los distritos censales. Los distritos censales son áreas que contienen entre 1000 y 8000 residentes cada una."
            ],
        }
    },
    'homeInstructions': {
        questionType: "instruction",
        heading: {
            english: "Home",
            spanish: "Casa"
        },
        body: {
            english: ["Where do you live?", 'Let us know by tapping on the map.'],
            spanish: ["¿Dónde vives?", "Déjanos saber señalando en el mapa."]
        }
    },
    "homeMapRemovePinQuestion": {
        questionType: "confirm",
        body: removePinQuestionBody
    },
    'placesHookup': {
        questionType: "map",
        uniquePlace: false,
        mapQuestionInstruction: "placesHookupInstructions",
        mapQuestionSafety:'placesHookupSafety',
        mapQuestionDetail: 'placesHookupDetail',
        mapQuestionOrder: ['placeTypeHookup'],
        mapRemovePinQuestion: "placesHookupMapRemovePinQuestion",
        personPlaceRelation: "HOOKUP_IN",
        forcedResponse: true,
        skipLogic: {question: "countSexGS", value: "none", equals: false},
    },
    'placesHookupDetail': {
        questionType: "instruction",
        heading: {
            english: "",
            spanish: ""
        },
        body: {
            english: [
                'Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had sexual contact (not in a group setting) in during the past 4 weeks'
            ],
            spanish: [
                'Utiliza la barra de navegación para buscar un vecindario, nombre de lugar o dirección',
                'Después señala la ubicación del lugar para que un marcador aparezca en el mapa',
                'Te vamos a hacer algunas preguntas sobre el lugar que acabas de agregar.',
                'Repite esto para cada lugar en el que tuviste contacto sexual (no grupal) en las últimas 4 semanas'
            ],
        }
    },
    'placesHookupSafety': {
        questionType: "instruction",
        heading: {
            english: "",
            spanish: ""
        },
        body: {
            english: [
                "We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
            spanish: [
                "No vamos a guardar la ubicación exacta de los lugares que seleccionaste o cualquier información que potencialmente te pueda identificar.",
                "Sólo guardamos los distritos censales. Los distritos censales son áreas que contienen entre 1000 y 8000 residentes cada una."
            ],
        }
    },
    'placesHookupInstructions': {
        questionType: "instruction",
        heading: {
            english: "",
            spanish: ""
        },
        body: {
            english: [
                'Show us where you had sexual contact (not in a group setting) by tapping on the map.'
            ],
            spanish: [
                'Muéstranos dónde tuviste contactos sexuales (no en grupos) tocando y señalando en el mapa.'
            ],
        }
    },
    'placesHookupMapRemovePinQuestion': {
        questionType: "confirm",
        body: removePinQuestionBody
    },
    'placeTypeHookup': {
        question: {
            english: "What kind of place is this?",
            spanish: "¿Qué tipo de lugar es este?"
        },
        options: {
            english: {
                'dance_party': 'Dance party',
                'sex_party': 'Sex Party',
                'darkroom': 'Darkroom',
                'sport_game': 'Sport Game',
                'concert': 'Concert',
                'theatre_show': 'Theatre/ Show',
                'private_residence': 'Private Residence',
                'sex_club': 'Sex Club ',
                'bathhouse': 'Bathhouse',
                'park': 'Park',
                'something_else': 'Something Else'
            },
            spanish: {
                'dance_party': 'Fiesta de baile',
                'sex_party': 'Fiesta de sexo',
                'darkroom': 'Cuarto oscuro',
                'sport_game': 'Juego deportivo',
                'concert': 'Concierto',
                'theatre_show': 'Teatro/ Show',
                'private_residence': 'Residencia privada',
                'sex_club': 'Club para tener sexo',
                'bathhouse': 'Sauna',
                'park': 'Parque',
                'something_else': 'Algo más'

            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        forcedResponse: true
    },
    'ineligible': {
        questionType: "instruction",
        heading: {
            english: "Sorry!",
            spanish: "¡Una disculpa!"
        },
        body: {
            english: ["Sorry! Unfortunately you are not eligible for this survey."],
            spanish: ["Desafortunadamente no eres elegible para esta encuesta."]
        }
    },
    'thankYou': {
        questionType: "instruction",
        heading: {
            english: "Thank you!",
            spanish: "¡Gracias!"
        },
        body: {
            english: ["Thank you! We have not recorded your response."],
            spanish: ["¡Gracias! No hemos registrado su respuesta."]
        }
    },
    'thankYouShare':  {
        sharePromptHeading: {
            english: "Thank you!",
            spanish: "Thank you"
        },
        sharePromptBody: {
            english: [
                'Thank you for participating!',
                'Please share the survey with up to 10 friends or hookups (sexual partners) you have communicated with in the past 4 weeks using the button below.',
                'Click below to share this survey with queer and trans friends you have communicated with in the past 4 weeks.'
            ],
            spanish: [
                '¡Gracias por participar!',
                'Por favor comparte esta encuesta con hasta 10 amigos o parejas sexuales con los que te hayas comunicado en las últimas 4 semanas usando el botón de abajo.',
                'Da click abajo para compartir esta encuesta con amigos queer o trans con los que te hayas comunicado en las últimas 4 semanas.'
            ],
        },
        shareMessage: {
            english: "",
            spanish: ""
        },
        questionType: "sharedialog"
    }
}

