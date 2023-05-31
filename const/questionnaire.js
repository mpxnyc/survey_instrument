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

const drugWordList =
    {
        english: [{label: '', id: ''}],
        spanish: [{label: '', id: ''}],
    }

const symptomsList = {
    english: {
        'fever' : 'Fever',
        'headache': 'Headache',
        'muscle_ache': 'Muscle Ache',
        'back_ache': 'Back Ache',
        'swollen_glands': 'Swollen glands',
        'chills': 'Chills',
        'exhaustion': 'Exhaustion',
        'sore_throat': 'Sore Throat',
        'facial_rash': 'Facial rash',
        'body_rash': 'Body rash',
        'sores_buttocks': 'Sores in the buttocks or anus',
        'sores_penis': 'Sores on the penis',
        'sores_mouth': 'Sores in or around the mouth',
        'sores_rectal': 'Rectal discomfort',
        'other': 'Other',
    },
    spanish: {
        'fever' : 'fiebre',
        'headache': 'dolor de cabeza',
        'muscle_ache': 'dolor muscular',
        'back_ache': 'dolor de espalda',
        'swollen_glands': 'glándulas inflamadas',
        'chills': 'escalofríos',
        'exhaustion': 'agotamiento',
        'sore_throat': 'dolor de garganta',
        'facial_rash': 'sarpullido facial',
        'body_rash': 'sarpullido corporal',
        'sores_buttocks': 'úlceras en las nalgas o en el ano',
        'sores_penis': 'úlceras en el pene',
        'sores_mouth': 'úlceras adentro o alrededor de la boca',
        'sores_rectal': 'úlceras rectales',
        'other': 'otro',
    }
}

export const questionnaire = {
    'ordering': [
        'welcome',
        'prior',
        'giveUserName',
        'cantFindUserName',
        'age',
        'consentStudy',
        'assignedUserName',
        'home',
        'race',
        'groupSex',
        'placesGS',
        'sex',
        'gender',
        'countSexGS',
        'countSexNGS',
        'placesHookup',
        'sexualOrientation',
        'countFriends',
        'inviteToSurvey',
        'mpxVax1',
        "placesVax1",
        'mpxVax2',
        'placesVax2',
        'mpxSymptoms',
        'covidTestPositive',
        'mpxTest',
        'mpxDiagnosis',
        'mpxCare',
        'mpxAnotherQuestion',
        'placesMostTime',
        'hivStatus',
        'hivLastTest',
        'hivSuppressed',
        'hivPrep',
        'placesUsualCare',
        'placesOptimalCare',
        'mpxRiskReduce',
        'mpxRiskChangeNoVax',
        'mpxRiskChangePreVax1',
        'mpxRiskChangePreVax2',
        'mpxRiskChangePostVax2',
        'mpxRiskChange2023',
        'mpxRiskStrategiesOtherText',
        'mpxRiskOtherText',
        'serviceDelivery',
        'contactMe',
        'contactEmail',
        'thankYouShare',
        'thankYou',
        'ineligible'
    ],
    'milestones': {
        assignId: ["consentStudy"],
        retrieveId: ['giveUserName'],
        surveyComplete: 'thankYou',
        surveyIneligible: 'ineligible'
    },
    'assignedUserName': {
        question: {
            english: "We will provide you with a unique code. This code will help us identify you as a survey participant. If you receive a message to take this survey after today, you might be asked to enter it.",
            spanish: "SP We will provide you with a unique code. This code will help us identify you as a survey participant. If you receive a message to take this survey after today, you might be asked to enter it."
        },
        options: {
            english: {},
            spanish: {}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
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
    'age': {
        question: {
            english: "How old are you?",
            spanish: "¿Qué edad tienes?"
        },
        options: {
            english: {
                '_under_18': '<18',
                '_18_24': '18-24',
                '_25_34': '25-34',
                '_35_44': '35-44',
                '_45_54': '45-54',
                '_55_64': '55-64',
                '_over_65': '65+'
            },
            spanish: {
                '_under_18': '<18',
                '_18_24': '18-24',
                '_25_34': '25-34',
                '_35_44': '35-44',
                '_45_54': '45-54',
                '_55_64': '55-64',
                '_over_65': '65+'
            },
        },
        questionType: "radio",
        ineligibleCondition: '_under_18'
    },
    'cantFindUserName': {
        question: {
            english: "We can't find the code you entered.",
            spanish: "SP We can't find the code you entered."
        },
        options: {
            english: {'retry': 'Retry entering secret code', 'forgot': 'I forgot my secret code'},
            spanish: {'retry': 'SP Retry entering secret code', 'forgot': 'Sp I forgot my secret code'},
        },
        questionType: "radio",
        skipLogic: {question: "prior", value: "no", equals: false},
    },
    'consentStudy': {
        heading: {
            english: "Informed Consent MPX NYC",
            spanish: "Consentimiento Informado MPX NYC"
        },
        subtitle: {
            english: "MPX NYC",
            spanish: "MPX NYC"
        },
        body: {
            english: [
                "You are being asked to take part in a survey called MPX NYC. This survey is part of the Rapid Epidemiologic Study of Prevalence, Networks, and Demographics of MPOX Infection  (RESPND-MI).",
                "This research is conducted to learn about MPOX and HIV among gay, bisexual, other men who have sex with men, and transgender people in New York City. Specifically, the RESPND-MI study team is interested in learning about the social and sexual networks that connect individuals in the New York City. You are being asked to participate in this research because you are over the age of 18 and have either been referred to the survey by someone you know or by an advertisement.",
                "Your participation in this study is voluntary and you may withdraw your participation at any time for any reason. ",
                "If you take part in this study, you will be asked to answer several questions about your health and sexual behavior and asked to invite friends and past sexual partners to take the survey. The survey will take fewer than five minutes to answer. To facilitate participation, the survey instrument will save a browser cookie containing an anonymous identifier that will be automatically generated. This cookie cannot be used to track your activity on other websites, will contain no personal information, and will expire 6 months after it is saved.",
                "The possible risks of participating in this study include breach of confidentiality while filling in your response. We recommend taking the survey in a private setting.",
                "We cannot promise any benefits to you or others from your taking part in this research. However, possible benefits include knowledge about how best to combat the outbreak of MPOX. To maximize the potential benefit of your participation in this study, data collected through the study will be made available to researchers upon request so that they can use the data for future research studies.",
                "By clicking on the “->” button, you consent to participate in the study. You can decline to participate in any part of this study for any reason, and you can end your participation at any time.",
                "If you have any questions about this study, you can contact Keletso Makofane at 347-688-4203.",
                "Thank you again for your time and participation."
            ],
            spanish: [
                "Te estamos preguntado si quieres contestar una encuesta llamada MPX NYC. Esta encuesta es parte del Estudio Epidemiológico Rápido sobre la Prevalencia, Redes y Demografía de la Infección por Viruela Símica (RESPND-MI).",
                "Esta investigación se está haciendo para aprender sobre la infección de viruela símica (MPOX) y VIH entre hombres gays, bisexuales y otros hombres que tienen sexo con hombres, y personas transgénero en la Ciudad de Nueva York. Específicamente, el equipo del studio RESPND-MI está interesado en aprender sobre las redes sociales y sexuales que conectan a individuos en la Ciudad de Nueva York. Te estamos pidiendo participar en esta investigación porque tienes 18 años o más, y te ha referido a la encuesta alguien que conoces o por un anuncio.",
                "Tu participación en este studio es voluntaria y puedes dejar de participar en cualquier momento por cualquier razón." ,
                "Si tomas parte de este studio, te vamos a hacer varias preguntas sobre tu salud y comportamientos sexuales y vamos a pedir que invites a amigos y parejas sexuales pasadas a que también formen parte de la encuesta. La encuesta te va a tomar menos de cinco minutos. Para facilitar tu participación, la encuesta guardará un cookie del navegador que contiene una identificación anónima que se generará automáticamente. Esta cookie no puede ser usada para rastrear tu actividad en otras páginas web, no contendrá información personal y va a expirar 6 meses después de que haya sido guardada." ,
                "Los posibles riesgos de participar en este studio incluyen una violación de la confidencialidad mientras escribes tus respuestas. Te recomendamos contestar la encuesta en un lugar privado.",
                "No te podemos prometer ningún beneficio a ti o a otros por formar parte de esta investigación. Sin embargo, posibles beneficios incluyen conocimiento sobre cómo combatir el brote de viruela símica. Para maximizar el beneficio potencial de tu participación en este studio, la información recolectada estará disponible para que investigadores la soliciten en futuros estudios de investigación.",
                "Al apretar el botón de \"->\", estarás dando tu consentimiento para participar en este studio. Puedes declinar participar en cualquier parte del estudio por cualquier razón y finalizar tu participación en cualquier momento.",
                "Si tienes preguntas sobre este estudio, puedes contactar a Keletso Makofane en el 347-688-4203.",
                "Gracias de nuevo por tu tiempo y participación."
            ]
        },
        questionType: "longtext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'contactEmail': {
        question: {
            english: "What is your email?",
            spanish: "¿Cuál es tu email?"
        },
        options: {
            english: {"_": "email"},
            spanish: {"_": "email"}
        },
        questionType: "plaintext",
        skipLogic: {question: "contactMe", value: "yes", equals: true}
    },
    'contactMe': {
        question: {
            english: "Would you like to be contacted by the study team for additional questions about MPX? Your contact details will not be linked to your survey responses.",
            spanish: "¿Te gustaría ser contactado por el equipo de investigación para preguntas adicionales sobre viruela símica (MPOX)? Tu información de contacto no podrá ser vinculada con tus respuestas a la encuesta."
        },
        options: yesNoResponse,
        questionType: "radio",
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
            spanish: {'none': 'None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Over 10'}
        },
        questionType: "radio"
    },
    'countSexGS': {
        question: {
            english: "Other than the people in the places you mentioned in the previous questions, how many people have you had sexual contact with over the past 4 weeks, excluding primary partners?",
            spanish: "Además de las personas que mencionaste en las preguntas pasadas, ¿con cuántas personas tuviste contactos sexuales en las últimas 4 semanas, excluyendo a parejas principales? "
        },
        options: {
            english: {'none': 'None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Over 10'},
            spanish: {'none': 'Ninguna', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_o más': 'Más de 10'}
        },
        questionType: "radio",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'countSexNGS': {
        question: {
            english: "How many people have you had sexual contact with over the past 4 weeks, excluding primary partners?",
            spanish: "¿Con cuántas personas has tenido contactos sexuales en las últimas 4 semanas, excluyendo a parejas primarias?"
        },
        options: {
            english: {'none': 'None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Over 10'},
            spanish: {'none': 'Ninguna', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_o más': 'Más de 10'}
        },
        questionType: "radio",
        skipLogic: {question: "groupSex", value: "no", equals: true}
    },
    'covidTestPositive': {
        question: {
            english: "In the past 4 weeks, did you test positive for COVID-19?",
            spanish: "En las últimas 4 semanas, ¿tuviste una prueba positiva de COVID-19?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'exclusiveUser': {
        question: {
            english: "For the next two months, will you be the only person who uses the device you are taking the survey on?",
            spanish: "En los próximos dos meses, ¿serás la única persona que utilizará el dispositivo electrónico desde el cual estás respondiendo a esta encuesta? "
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'gender': {
        question: {
            english: "What is your gender identity?",
            spanish: "¿Cuál es tu identidad de género?"
        },
        options: {
            english: {
                'man': 'Man',
                'woman': 'Woman',
                'trans_man': 'Trans man',
                'trans_woman': 'Trans woman',
                'non_binary': 'Non-binary',
                'other': 'Other'
            },
            spanish: {
                'man': 'Hombre',
                'woman': 'Mujer',
                'trans_man': 'Hombre trans',
                'trans_woman': 'Mujer trans',
                'non_binary': 'Persona no binaria',
                'other': 'Otro'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'giveUserName': {
        question: {
            english: "Please enter your code ",
            spanish: "Por favor escribe tu código"
        },
        options: {
            english: {},
            spanish: {}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'groupSex': {
        question: {
            english: "Over the past 4 weeks, have you had sex with two or more people at the same time or had close physical contact with multiple people at the same time? (like at a party, sport game, concert, show)",
            spanish: "En las últimas 4 semanas, ¿has tenido sexo con dos o más personas al mismo tiempo o has tenido contacto físico con múltiples personas al mismo tiempo? (como en una fiesta, evento deportivo, concierto o espectáculo)"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false}
    },
    'hivLastTest': {
        question: {
            english: "When was your last HIV test?",
            spanish: "¿Cuándo fue tu última prueba de VIH? "
        },
        options: {
            english: {
                'past_month': 'In the past month',
                '_1_3_months_ago': '1-3 months ago',
                '_4_6_months_ago': '4-6 months ago',
                '_6_12_months_ago': '6-12 months ago',
                '_over_year_ago': 'Over a year ago',
            },
            spanish: {
                'past_month': 'En el mes pasado',
                '_1_3_months_ago': '1-3 meses atrás',
                '_4_6_months_ago': '4-6 meses atrás',
                '_6_12_months_ago': '6-12 meses atrás',
                '_over_year_ago': 'Más de un año atrás',
            }
        },
        questionType: "radio",
        skipLogic: {question: "hivStatus", value: "positive", equals: false}
    },
    'hivPrep': {
        question: {
            english: "Are you on PrEP?",
            spanish: "¿Estás tomando PrEP?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "hivStatus", value: "positive", equals: false}
    },
    'hivStatus': {
        question: {
            english: "What is your HIV status? ",
            spanish: "¿Cuál es tu estatus de VIH? "
        },
        options: {
            english: {
                'positive': 'Living with HIV',
                'negative': 'Not living with HIV',
                'unsure': 'Unsure'
            },
            spanish: {
                'positive': 'Estoy viviendo con VIH',
                'negative': 'No estoy viviendo con VIH',
                'unsure': 'No sé'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'hivSuppressed': {
        question: {
            english: "Have you been told that your viral load is suppressed or undetectable?",
            spanish: "¿Te han dicho si tu carga viral es detectable o indetectable?"
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'unsure': 'Unsure'
            },
            spanish: {
                'yes': 'Sí',
                'no': ' No',
                'unsure': 'No sé'
            }
        },
        questionType: "radio",
        skipLogic: {question: "hivStatus", value: "positive", equals: true}
    },
    'home': {
        questionType: "map",
        mapQuestionInstruction: "homeInstructions",
        mapQuestionDetail: "homeDetail",
        mapQuestionSafety: "homeSafety",
        mapQuestionOrder: [],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "LIVES_IN"
    },
    'homeDetail': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Sexo grupal"
        },
        body: {
            english: [
                "Use the search bar to search for a neighborhood, place name, or address.",
                "You can drag the map and zoom in and out",
                "Tap on the location of your home and a marker will show the location on the map"
            ],
            spanish: [
                "Usa la barra de navegación para encontrar tu vecindario, el nombre de un lugar o tu dirección.",
                "Puedes arrastrar el mapa y hacerle zoom hacia adentro o afuera",
                "Señala la ubicación de tu casa y aparecerá un marcador en esa ubicación dentro del mapa."
            ],
        }
    },
    'homeSafety': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Sexo grupal"
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
    'inviteToSurvey': {
        sharePromptHeading: {
            english: "Contribute to the Queer and Trans Map of New York City",
            spanish: "Contribuye al mapa queer y trans de la Ciudad de Nueva York."
        },
        sharePromptBody: {
            english: [
                'To learn how to stop new diseases quickly, we are building a community map of queer and trans people in New York City. This is a giant network connecting friends and hookups.',
                'Contribute to this effort by sharing the survey with up to 10 friends or hookups (sexual partners) you have communicated with in the past 4 weeks using the button below.',
                'Each additional person you successfully link will help us to understand how to spread important information quickly when a new infection like MPOX starts.',
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
            english: "",
            spanish: ""
        },
        questionType: "sharedialog"
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
    "mapRemovePinQuestion": {
        questionType: "confirm",
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'mpxAnotherQuestion': {
        question: {
            english: "Is there anything else you think is important for us to understand about MPOX?",
            spanish: "¿Hay algo que crees que sea importante que nosotros entendamos sobre la viruela símica (MPOX)?"
        },
        options: {
            english: {'comment': 'Comment'},
            spanish: {'comentario': 'Comentario'}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxCare': {
        question: {
            english: "Did you receive care by a medical provider for your symptoms?",
            spanish: "¿Recibiste cuidado médico de un profesional de la salud en torno a tus símtomas? "
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxDiagnosis': {
        question: {
            english: "Were you diagnosed with MPOX by a medical provider? ",
            spanish: "¿Fuiste diagnosticado con viruela símica por un profesional de la salud?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxRiskChangeNoVax': {
        question: {
            english: "How did your sex life change when you first learned about MPOX?",
            spanish: "¿Cómo cambió tu vida sexual después de que supiste que tenías viruela símica (MPOX)? "
        },
        options: {
            english: {
                rows: {
                    'oral_give': 'Giving Oral Sex',
                    'oral_receive': 'Getting Oral Sex',
                    'topping': 'Topping',
                    'bottoming': 'Bottoming',
                    'using_condoms': 'Using Condoms',
                    'any': 'Overall amount of Sex'

                },
                columns: {
                    'decreased': 'Less',
                    'no_change': 'Same',
                    'increased': 'More'
                }
            },
            spanish: {
                rows: {
                    'oral_give': ' Dando sexo oral',
                    'oral_receive': ' Recibiendo sexo oral',
                    'topping': ' Siendo activo',
                    'bottoming': ' Siendo pasivo',
                    'using_condoms': ' Usando condones',
                    'any': ' La cantidad de sexo en general '
                },
                columns: {
                    'decreased': 'Menos',
                    'no_change': 'Igual',
                    'increased': 'Más'
                }
            },
        },
        questionType: "radiogrid"
    },
    'mpxRiskChange2023': {
        question: {
            english: "How is your current sex life different than it was in 2022?",
            spanish: "¿Cómo es tu vida sexual diferente a como era en 2022?"
        },
        options: {
            english: {
                rows: {
                    'oral_give': 'Giving Oral Sex',
                    'oral_receive': 'Getting Oral Sex',
                    'topping': 'Topping',
                    'bottoming': 'Bottoming',
                    'using_condoms': 'Using Condoms',
                    'any': 'Overall amount of Sex'

                },
                columns: {
                    'decreased': 'Less',
                    'no_change': 'Same',
                    'increased': 'More'
                }
            },
            spanish: {
                rows: {
                    'oral_give': ' Dando sexo oral',
                    'oral_receive': ' Recibiendo sexo oral',
                    'topping': ' Siendo activo',
                    'bottoming': ' Siendo pasivo',
                    'using_condoms': ' Usando condones',
                    'any': ' La cantidad de sexo en general'
                },
                columns: {
                    'decreased': 'Menos',
                    'no_change': 'Igual',
                    'increased': 'Más'
                }
            },
        },
        questionType: "radiogrid"
    },
    'mpxRiskChangePreVax1': {
        question: {
            english: "How did your sex life change after you learned about MPOX but before you got the first dose of MPOX vaccine?",
            spanish: "¿Cómo cambió tu vida sexual después de que aprendiste sobre viruela símica (MPOX) pero antes de que tuvieras tu primera dosis de la vacuna de viruela símica (MPOX)?"
        },
        options: {
            english: {
                rows: {
                    'oral_give': 'Giving Oral Sex',
                    'oral_receive': 'Getting Oral Sex',
                    'topping': 'Topping',
                    'bottoming': 'Bottoming',
                    'using_condoms': 'Using Condoms',
                    'any': 'Overall amount of Sex'

                },
                columns: {
                    'decreased': 'Less',
                    'no_change': 'Same',
                    'increased': 'More'
                }
            },
            spanish: {
                rows: {
                    'oral_give': ' Dando sexo oral',
                    'oral_receive': ' Recibiendo sexo oral',
                    'topping': ' Siendo activo',
                    'bottoming': ' Siendo pasivo',
                    'using_condoms': ' Usando condones',
                    'any': ' La cantidad de sexo en general'
                },
                columns: {
                    'decreased': 'Menos',
                    'no_change': 'Igual',
                    'increased': 'Más'
                }
            },
        },
        questionType: "radiogrid",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'mpxRiskChangePreVax2': {
        question: {
            english: "How did your sex life change after your first dose and before the second dose of MPOX vaccine?",
            spanish: "¿Cómo cambió tu vida sexual después de la primera dosis y antes de la segunda dosis de la vacuna de viruela símica (MPOX)? "
        },
        options: {
            english: {
                rows: {
                    'oral_give': 'Giving Oral Sex',
                    'oral_receive': 'Getting Oral Sex',
                    'topping': 'Topping',
                    'bottoming': 'Bottoming',
                    'using_condoms': 'Using Condoms',
                    'any': 'Overall amount of Sex'

                },
                columns: {
                    'decreased': 'Less',
                    'no_change': 'Same',
                    'increased': 'More'
                }
            },
            spanish: {
                rows: {
                    'oral_give': ' Dando sexo oral',
                    'oral_receive': ' Recibiendo sexo oral',
                    'topping': ' Siendo activo',
                    'bottoming': ' Siendo pasivo',
                    'using_condoms': ' Usando condones',
                    'any': ' La cantidad de sexo en general '
                },
                columns: {
                    'decreased': 'Menos',
                    'no_change': 'Igual',
                    'increased': 'Más'
                }
            },
        },
        questionType: "radiogrid",
        skipLogic: {question: "mpxVax2", value: "yes", equals: true}
    },
    'mpxRiskChangePostVax2': {
        question: {
            english: "In 2022, how did you change how you have sex after getting both doses of the MPOX vaccine?",
            spanish: "En el 2022, ¿cómo cambiaste la manera en la que tenías sexo despuês de recibir las dos dosis de la vacuna de viruela símica (MPOX)?"
        },
        options: {
            english: {
                rows: {
                    'oral_give': 'Giving Oral Sex',
                    'oral_receive': 'Getting Oral Sex',
                    'topping': 'Topping',
                    'bottoming': 'Bottoming',
                    'using_condoms': 'Using Condoms',
                    'any': 'Overall amount of Sex'

                },
                columns: {
                    'decreased': 'Less',
                    'no_change': 'Same',
                    'increased': 'More'
                }
            },
            spanish: {
                rows: {
                    'oral_give': ' Dando sexo oral',
                    'oral_receive': ' Recibiendo sexo oral',
                    'topping': ' Siendo activo',
                    'bottoming': ' Siendo pasivo',
                    'using_condoms': ' Usando condones',
                    'any': ' La cantidad de sexo en general '

                },
                columns: {
                    'decreased': 'Menos',
                    'no_change': 'Igual',
                    'increased': 'Más'
                }
            },
        },
        questionType: "radiogrid",
        skipLogic: {question: "mpxVax2", value: "yes", equals: true}
    },
    'mpxRiskOtherText': {
        question: {
            english: "Is there anything else you want to tell us about managing the risk of MPOX or other sexually transmitted infections?",
            spanish: "¿Hay algo más que nos quieras decir sobre cómo manejar el riesgo de viruela símica (MPOX)o de otras infecciones de transmisión sexual?"
        },
        options: {
            english: {'comment': 'Comment'},
            spanish: {'comment': 'Comentario'}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxRiskReduce': {
        question: {
            english: "In 2022, did you change your sexual behavior to reduce the chances of getting MPOX?",
            spanish: "En el 2022, ¿cambiaste tu comportamiento para reducir la probabilidad de que te diera viruela símica (MPOX)? "
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false}
    },
    'mpxRiskStrategies': {
        question: {
            english: "What strategies did you use?",
            spanish: "¿Qué estrategias utilizaste?"
        },
        options: {
            english: {
                'no_sex': 'No Sex',
                'primary_partner_only': 'Sex Only with Primary Partner',
                'fewer_partners': 'Reduced Number of Sexual Partners',
                'fewer_sex_events': 'Reduced frequency of Sexual Contact',
                'avoided_gs': 'Avoided Group Sex',
                'other': 'Other'
            },
            spanish: {
                'no_sex': 'No tener sexo',
                'primary_partner_only': 'Tener sexo solamente con una pareja principal',
                'fewer_partners': 'Reducir el número de parejas sexuales',
                'fewer_sex_events': 'Reducir la frecuencia del contacto sexual',
                'avoided_gs': 'No tuve sexo grupal',
                'other': 'Otro'
            }
        },
        questionType: "checkbox",
        skipLogic: {question: "mpxRiskReduce", value: "yes", equals: true}
    },
    'mpxRiskStrategiesOtherText': {
        question: {
            english: "Please describe other strategies you used",
            spanish: "Por favor describe otras estrategias que hayas usado"
        },
        options: {
            english: {'description': 'Description'},
            spanish: {'description': 'Descripción'}
        },
        questionType: "plaintext",
        skipLogic: {question: "mpxRiskStrategies", value: "other", equals: true}
    },
    'mpxSymptoms': {
        question: {
            english: "In the past 4 weeks, have you experienced symptoms that are not related to a confirmed COVID-19 infection?",
            spanish: "En las últimas 4 semanas, ¿has tenido síntomas que no estén relacionados con una infección confirmada de COVID-19?"
        },
        options: symptomsList,
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxTest': {
        question: {
            english: "In the past 4 weeks, did you receive testing for MPOX?",
            spanish: "¿En las últimas 4 semanas te hiciste una prueba de viruela símica (MPOX)?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxVax1': {
        question: {
            english: "Have you received at least 1 dose of the MPOX vaccine? ",
            spanish: "¿Has recibido al menos 1 dosis de la vacuna de viruela símica (MPOX)? "
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'unsure': 'Unsure'
            },
            spanish: {
                'yes': 'Sí',
                'no': ' No',
                'unsure': 'No sé'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxVax1Date': {
        question: {
            english: "When were you first vaccinated against MPOX? (If you don't remember, give us your best guess)",
            spanish: "¿Cuándo fue que te vacunaste por primera vez en contra de la viruela símica (MPOX)? (Si no te acuerdas, danos tu mejor estimación) "
        },
        options: {
            english: {'date': 'Date'},
            spanish: {'date': 'Fecha'}
        },
        questionType: "date",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'mpxVax2': {
        question: {
            english: "Have you received a second dose of the MPOX vaccine? ",
            spanish: "¿Has recibido una segunda dosis de la vacuna de viruela símica (MPOX)? "
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'unsure': 'Unsure'
            },
            spanish: {
                'yes': 'Sí',
                'no': 'No',
                'unsure': 'No sé'
            }
        },
        questionType: "radio",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'mpxVax2Date': {
        question: {
            english: "When did you get your second dose of MPOX vaccine? (If you don't remember, give us your best guess)",
            spanish: "¿Cuándo recibiste la segunda dosis de la vacuna de viruela símica (MPOX)? (Si no te acuerdas, realiza tu mejor estimación)"
        },
        options: {
            english: {'date': 'Date'},
            spanish: {'date': 'Fecha'}
        },
        questionType: "date",
        skipLogic: {question: "mpxVax2", value: "yes", equals: true}
    },
    'nudesGameExplain': {
        questionType: "longtext",
        heading: {
            english: "Funky Box",
            spanish: "La Caja Funky"
        },
        subtitle: {
            english: "A Game by MPX NYC",
            spanish: "Un Juego por MPX NYC"
        },
        body: {
            english:
                [
                    "Hi There!",
                    "You have probably reached this site because a friend sent you a link about a game.",
                    "The game is called Funky Box, and it was designed to help us learn more about that other pox that's been going around.",
                    "All you have to do, for the science, is answer 1 question, and then guess how your friend would answer that same question.",
                    "You get a prompt to challenge a friend, and you can use that to share with people you have hooked up with and queer and trans friends.",
                    "Your friend will only see your answer once they provide their answer."
                ],
            spanish:
                [
                    "¡Hola!",
                    "Probablemente has encontrado este sitio porque un amigo te mando un link para un juego. ",
                    "Este juego se llama la Caja Funky, y está diseñado para ayudarnos a entender cómo es que la viruela símica se ha esparcido.",
                    "Todo lo que tienes que hacer, por la ciencia, es contestar 1 pregunta, y luego adivinar cómo es que tu amigo contestaría a la misma pregunta.",
                    "Después se te da un mensaje para que invites a un amigo, que puedes usar para compartir con gente con la que has tenido sexo y con amigos queer y trans.",
                    "Tu amigo sólo verá tu respuesta cuando ellos hayan dado su respuesta."
                ],
        }

    },
    'nudesSendMe': {
        question: {
            english: "Under what circumstance would you send nudes of yourself to someone?",
            spanish: "¿En qué circunstancias mandarías fotos de desnudos tuyas a otra persona?"
        },
        options: {
            english: {
                'any': 'At any time for any reason!',
                'ask': 'If they ask',
                'nda': 'If we have an NDA',
                'horny': 'If I am horny',
                'hot': 'If they are extremely hot',
                'seal': 'If it will seal the deal with a potential hookup',
                'partner': 'Only if we are partners with each other',
                'regulars': 'Only if we are regulars',
                'love': 'Only if we love each other'
            },
            spanish: {
                'any': '¡En cualquier momento por cualquier razón!',
                'ask': 'Si alguien pregunta',
                'nda': 'Si temenos un acuerdo de confidencialidad',
                'horny': 'Si estoy caliente',
                'hot': 'Si la otra persona es muy sexy',
                'seal': 'Si eso ayuda a cerrar un acuerdo para tener sexo casual',
                'partner': 'Sólo con una persona que sea mi pareja',
                'regulars': 'Sólo con personas con la que tengo sexo de manera regular',
                'love': 'Sólo si nos amamos'
            }
        },
        questionType: 'checkbox'
    },
    'nudesSendFriend': {
        question: {
            english: "Under what circumstance would your friend send nudes to somebody else?",
            spanish: "¿En qué circunstancias tu amigo mandaría fotos de desnudos suyas a otras personas?"
        },
        options: {
            english: {
                'any': 'At any time for any reason!',
                'ask': 'If they ask',
                'nda': 'If they have an NDA',
                'horny': 'If my friend is horny',
                'hot': 'If my friends thinks the person is extremely hot',
                'seal': 'If it will seal the deal between my friend and a potential hookup',
                'partner': 'If they are partners with each other',
                'regulars': 'If they are regulars',
                'love': 'If they love each other'
            },
            spanish: {
                'any': ' ¡En cualquier momento por cualquier razón!',
                'ask': ' Si le preguntan',
                'nda': ' Si tienen un acuerdo de confidencialidad',
                'horny': ' Si mi amigo está caliente',
                'hot': ' Si mi amigo piensa que la otra persona es muy sexy',
                'seal': ' Si eso ayuda a cerrar un acuerdo para que mi amigo tenga sexo con otra persona',
                'partner': ' Sólo con una persona que sea su pareja',
                'regulars': ' Sólo con personas con las que tiene sexo de manera regular',
                'love': ' Sólo con una persona que ama'
            },
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'nudeShareSurvey':     {
        sharePromptHeading: {
            english: "Now the fun part",
            spanish: "Ahora la parte divertida"
        },
        sharePromptBody: {
            english: "Ok, so now that your guess is in, you have to share the survey with your friend or hookup and make sure they answer the questions. You won't see each other's answers until you both respond. Remember: It's for science.",
            spanish: "Ok, ahora que pusiste lo que piensas que tu amigo pondría, tienes que compartir la encuesta con tu amigo o pareja sexual y asegurarte que contesten las preguntas. No verán las respuestas de cada uno hasta que no contesten los dos. Recuerda: Esto es por la ciencia."
        },
        shareMessage: {
            english: "Hey - for science, I need to know under what circumstance you would share nudes. Take this survey quick:",
            spanish: "Hey – por la ciencia, necesito saber bajo que circunstancias compartirías fotos de desnudos. Toma esta encuesta rápidamente:"
        },
        questionType: "sharedialog"
    },
    'nudesThankYou': {
        questionType: "funkypoxdone",
        heading: {
            english: "While you're here...",
            spanish: "Mientras estás aquí..."
        },
        body: {
            english:
                [
                    "Thank you for playing funkybox with us!",
                    "Come back to this page and we will show your friends' answers. Because this is an anonymous survey, you will have to remember which friend is which! We will just give them cute names.",
                    "In the meantime, please take the MPX NYC Survey. It was made by us for us. The information we collect here has already been used to make positive change in LGBT health.",
                ],
            spanish:
                [
                    "¡Gracias por jugar la Caja Funky con nosotros!",
                    "Regresa a esta página y te vamos a mostrar las respuestas de tus amigos. Dado que esta es una encuesta anónima, ¡tendrás que recordar qué amigo es! Sólo les pondremos nombres tiernos.",
                    "Mientras tanto, por favor contesta la encuesta MPX NYC. Esta encuesta fue hecha por nosotros. La información que recolectamos aquí ya ha sido usada para mejorar la salud LGBT. ",
                ],
        }

    },
    'placeCount': {
        question: {
            english: "How many people were hooking up at this place?",
            spanish: "¿Cuántas personas estaban teniendo sexo en este lugar?"
        },
        options: {
            english: {'none': 'None', '_2_5': '2-5', '_6_10': '6-10', '_11_20': '11-20', '_21_50': '21-50', '_51_100': '51-100', '_100plus': 'Over 100'},
            spanish: {'none': 'Ninguna', '_2_5': ' 2-5', '_6_10': ' 6-10', '_11_20': ' 11-20', '_21_50': '21-50', '_51_100': '51-100', '_100plus': 'Más de 100'}

        },
        questionType: "radio"
    },
    'placeDrugs': {
        question: {
            english: "Which drugs did you use at the place, in the past 4 weeks? If none, leave the textboxes blank.",
            spanish: "¿Qué drogas has usando en este lugar, en las últimas 4 semanas? Si no usaste ningua, deja los cuadros de texto en blanco."
        },
        options: {
            english: {
                'drug1': "",
                'drug2': "",
                'drug3': "",
                'drug4': "",
                'drug5': ""
            },
            spanish: {
                'drug1': "",
                'drug2': "",
                'drug3': "",
                'drug4': "",
                'drug5': ""
            }
        },
        wordList: drugWordList,
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placeDrugUse': {
        question: {
            english: "Over the past 4 weeks, did you use any drugs at or before going to this place?",
            spanish: "En las últimas 4 semanas, ¿utilizaste drogas en este lugar o antes de ir a este lugar?"
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'dont_remember': 'I don’t remember'
            },
            spanish: {
                'yes': 'Sí',
                'no': 'No',
                'dont_remember': 'No recuerdo'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placeFreq': {
        question: {
            english: "Over the past 4 weeks, how many times have you visited this place? ",
            spanish: "En las últimas 4 semanas, ¿cuántas veces has visitado este lugar?"
        },
        options: {
            english: {'_1': 'Once', '_2_4': '2-4', '_5_10': '5-10', '_10plus': 'Over 10'},
            spanish: {'_1': 'Una vez', '_2_4': '2-4', '_5_10': '5-10', '_10plus': 'Más de 10'},
        },
        questionType: "radio"
    },
    'placeSex': {
        question: {
            english: "Over the past 4 weeks, how many times have you had sexual contact at this place? ",
            spanish: "En las últimas 4 semanas, ¿cuántas veces has tenido contactos sexuales en este lugar? "
        },
        options: {
            english: {'none': 'None', '_1': '1', '_2_4': '2-4', '_5_10': '5-10', '_10plus': 'Over 10'},
            spanish: {'none': ' Ninguna', '_1': '1', '_2_4': '2-4', '_5_10': '5-10', '_10plus': 'Más de 10'},
        },
        questionType: "radio"
    },
    'placesGS': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesGSInstructions",
        mapQuestionOrder: ["placeTypeGS", "placeFreq", "placeSex", "placeCount"],
        mapRemovePinQuestion: "placesGSMapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesGSDetail': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Sexo grupal"
        },
        body: {
            english: [
                'Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had group sex or physical contact in during the past 4 weeks'
            ],
            spanish: [
                'Utiliza la barra de navegación para encontrar un vecindario, nombre de lugar o dirección.',
                'Después señala la ubicación del lugar para que un marcador aparezca en el mapa.',
                'Te vamos a hacer algunas preguntas sobre el lugar que agregaste.',
                'Repite esto para cada lugar en el que hayas tenido sexo grupal o contacto físico en las últimas 4 semanas.'
            ],
        }
    },
    'placesGSSafety': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Sexo grupal"
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
    'placesGSInstructions': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Group Sex"
        },
        body: {
            english: [
                'Show us where you had group sex or physical contact by tapping on the map.',
                'We will ask a few questions about each place.'
            ],
            spanish: [
                'Muéstranos dónde tuviste sexo grupal o contacto físico señalando en el mapa.',
                'Te vamos a hacer algunas preguntas sobre cada lugar.'
            ],
        }
    },
    'placesGSMapRemovePinQuestion': {
        questionType: "confirm",
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'placesHookup': {
        questionType: "map",
        mapQuestionInstruction: "placesHookupInstructions",
        mapQuestionSafety:'placesHookupSafety',
        mapQuestionDetail: 'placesHookupDetail',
        mapQuestionOrder: ['placeTypeHookup'],
        mapRemovePinQuestion: "placesHookupMapRemovePinQuestion",
        personPlaceRelation: "HOOKUP_IN"
    },
    'placesHookupDetail': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Group Sex"
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
            english: "Group Sex",
            spanish: "Sexo grupal"
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
            english: "Hooking Up",
            spanish: "Teniendo sexo casual"
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
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'placeTypeGS': {
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
                'theatre_show': 'Theatre/Show',
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
                'theatre_show': 'Teatro/Show',
                'private_residence': 'Residencia privada',
                'sex_club': 'Club para tener sexo',
                'bathhouse': 'Sauna',
                'park': 'Parque',
                'something_else': 'Algo más'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
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
                'theatre_show': 'Theatre/Show',
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
                'theatre_show': 'Teatro/Show',
                'private_residence': 'Residencia privada',
                'sex_club': 'Club para tener sexo',
                'bathhouse': 'Sauna',
                'park': 'Parque',
                'something_else': 'Algo más'

            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placesVax1': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesVax1Instructions",
        mapQuestionOrder: ['mpxVax1Date'],
        mapRemovePinQuestion: "placesVax1MapRemovePinQuestion",
        personPlaceRelation: "VAX1_IN",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'placesVax1Instructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Teniendo sexo casual"
        },
        body: {
            english: [
                'Show us where you got your first MPOX vaccine by tapping on the map.'
            ],
            spanish: [
                'Muéstranos dónde tuviste tu primera vacuna de viruela símica(MPOX) tocando y señalando en el mapa.'
            ],
        }
    },
    'placesVax1MapRemovePinQuestion': {
        questionType: "confirm",
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'placesVax2': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesVax2Instructions",
        mapQuestionOrder: ['mpxVax2Date'],
        mapRemovePinQuestion: "placesVax2MapRemovePinQuestion",
        personPlaceRelation: "VAX2_IN",
        skipLogic: {question: "mpxVax2", value: "yes", equals: true}
    },
    'placesVax2Instructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Teniendo sexo casual"
        },
        body: {
            english: [
                'Show us where you got your second MPOX vaccine by tapping on the map.'
            ],
            spanish: [
                'Muéstranos dónde tuviste tu segunda vacuna de viruela símica(MPOX) tocando y señalando en el mapa.'
            ],
        }
    },
    'placesVax2MapRemovePinQuestion': {
        questionType: "confirm",
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'placesUsualCare': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesUsualCareInstructions",
        mapQuestionOrder: [],
        mapRemovePinQuestion: "placesUsualCareMapRemovePinQuestion",
        personPlaceRelation: "USUAL_CARE_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesUsualCareInstructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Teniendo sexo casual"
        },
        body: {
            english: [
                'Show us where you usually get your healthcare.'
            ],
            spanish: [
                'Muéstranos dónde recibes servicios de salud usualmente.'
            ],
        }
    },
    'placesUsualCareMapRemovePinQuestion': {
        questionType: "confirm",
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'placesOptimalCare': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesOptimalCareInstructions",
        mapQuestionOrder: [],
        mapRemovePinQuestion: "placesOptimalCareMapRemovePinQuestion",
        personPlaceRelation: "OPTIMAL_CARE_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesOptimalCareInstructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Teniendo sexo casual"
        },
        body: {
            english: [
                'Show us where you want to receive your healthcare.'
            ],
            spanish: [
                'Muéstranos dónde te gustaría recibir servicios de salud.'
            ],
        }
    },
    'placesOptimalCareMapRemovePinQuestion': {
        questionType: "confirm",
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'placesMostTime': {
        questionType: "map",
        mapQuestionDetail: "placesMostTimeDetail",
        mapQuestionSafety: "placesMostTimeSafety",
        mapQuestionInstruction: "placesMostTimeInstructions",
        mapQuestionOrder: ['placesMostTimeType', 'placesMostTimeTiming'],
        mapRemovePinQuestion: "placesMostTimeMapRemovePinQuestion",
        personPlaceRelation: "SPEND_MOST_TIME_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesMostTimeDetail': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Sexo grupal"
        },
        body: {
            english: [
                'Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had sexual contact (not in a group setting) in during the past 4 weeks'
            ],
            spanish: [
                'Utiliza la barra de navegación para buscar un vecindario, nombre de lugar o dirección.',
                'Después señala la ubicación del lugar y un marcador aparecerá en el mapa.',
                'Vamos a hacerte algunas preguntas sobre el lugar que señalaste',
                'Repite esto por cada lugar donde tuviste contactos sexuales (no grupales) durante las 4 semanas pasadas'
            ],
        }
    },
    'placesMostTimeSafety': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "Sexo grupal"
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
    'placesMostTimeInstructions': {
        questionType: "instruction",
        heading: {
            english: "Most Time",
            spanish: "Most Time"
        },
        body: {
            english: [
                'Show us the places where you spent most of your time over the past 4 weeks.'
            ],
            spanish: [
                'Muéstranos los lugares donde pasaste la mayor parte del tiempo durante las 4 semanas pasadas.'
            ],
        }
    },
    'placesMostTimeType': {
        question: {
            english: "How do you spend time in this place?",
            spanish: "¿Cómo pasas el tiempo en este lugar?"
        },
        options: {
            english: {
                'home_nbd': 'Hanging out at Home',
                'social_nbd': 'Socializing',
                'work_nbd': 'Working',
                'hookup': 'Hooking Up',
                'other': 'Something Else'
            },
            spanish: {
                'home_nbd': 'Estando en casa',
                'social_nbd': 'Socializando',
                'work_nbd': 'Trabajando',
                'hookup': 'Teniendo sexo',
                'other': 'Alguna otra cosa'
            },
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placesMostTimeTiming': {
        question: {
            english: "When do you usually spend time at this place?",
            spanish: "¿Cuándo sueles pasar tiempo en este lugar?"
        },
        options: {
            english: {
                'week_day': 'Weekdays',
                'week_night': 'Weeknights',
                'weekend_day': 'Weekend days',
                'weekend_night': 'Weekend nights'
            },
            spanish: {
                'week_day': ' Días entre semana',
                'week_night': ' Noches entre semana',
                'weekend_day': ' Días de los fines de semana',
                'weekend_night': ' Noches de los fines de semana'
            },
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placesMostTimeMapRemovePinQuestion': {
        questionType: "confirm",
        body: {
            english: ["Would you like to remove this place?"],
            spanish: ["SP Would you like to remove this place?"]
        }
    },
    'prior': {
        question: {
            english: "Have you taken the MPX NYC survey this year (2023)?",
            spanish: "¿Habías tomado la encuesta MPX NYC este año (2023)?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'race': {
        question: {
            english: "What’s your race and/or ethnicity",
            spanish: "¿Cuál es tu raza y/o etnicidad?"
        },
        options: {
            english: {
                'white': 'White',
                'black': 'Black',
                'latinx': 'Latino/a/x',
                'asian': 'Asian',
                'pacific_islander': 'Pacific Islander',
                'other': 'other'
            },
            spanish: {
                'white': 'Blanca',
                'black': 'Negra',
                'latinx': 'Latino/a/x',
                'asian': 'Asiática',
                'pacific_islander': 'Isleño del Pacífico',
                'other': 'otra'
            }
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'serviceDelivery': {
        question: {
            english: "What would be the ideal way to get you the sexual health services you want?",
            spanish: "¿Cuál sería la manera ideal para recibir los servicios de salud sexual que necesitas? "
        },
        options: {
            english: {'comment': 'Comment'},
            spanish: {'comment': 'Comentario'}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'sex': {
        question: {
            english: "What is your sex assigned at birth?",
            spanish: "¿Cuál es tu sexo asignado en el nacimiento?"
        },
        options: {
            english: {
                'male': 'Male',
                'female': 'Female',
                'other': 'Other'
            },
            spanish: {
                'male': 'Hombre',
                'female': 'Mujer',
                'other': 'Otro'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'sexualOrientation': {
        question: {
            english: "What is your sexual orientation?",
            spanish: "¿Cuál es tu orientación sexual?"
        },
        options: {
            english: {
                'gay': 'Gay',
                'bisexual': 'Bisexual',
                'straight': 'Straight',
                'queer': 'Queer',
                'something_else': 'Something else'
            },
            spanish: {
                'gay': 'Gay',
                'bisexual': 'Bisexual',
                'straight': 'Heterosexual',
                'queer': 'Queer',
                'something_else': 'Algo má'
            }
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'thankYou': {
        questionType: "instruction",
        heading: {
            english: "Thank you!",
            spanish: "¡Gracias!"
        },
        body: {
            english: ["Thank you! We recorded your response."],
            spanish: ["¡Gracias! Hemos guardado tu respuesta."]
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
    },
    'welcome': {
        heading: {
            english: "Welcome to MPX NY!",
            spanish: "SP Welcome to MPX NY!"
        },
        question: {
            english: "It looks like you participated already. Is this your secret code?",
            spanish: "SP It looks like you participated already. Is this your secret code?"
        },
        options: {
            english: {'yes': 'Yes', 'no': 'No', },
            spanish: {'yes': 'Sí', 'no': 'No', },
        },
        questionType: "radio_with_username_display"
    },
}

