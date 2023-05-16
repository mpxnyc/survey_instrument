
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
        'fever' : 'SP Fever',
        'headache': 'SP Headache',
        'muscle_ache': 'SP Muscle Ache',
        'back_ache': 'SP Back Ache',
        'swollen_glands': 'SSP wollen glands',
        'chilld': 'SP Chills',
        'exhaustion': 'SP Exhaustion',
        'sore_throat': 'SP Sore Throat',
        'facial_rash': 'SP Facial rash',
        'body_rash': 'SP Body rash',
        'sores_buttocks': 'SP Sores in the buttocks or anus',
        'sores_penis': 'SP Sores on the penis',
        'sores_mouth': 'SP Sores in or around the mouth',
        'sores_rectal': 'SP Rectal discomfort',
        'other': 'SP Other',
    }
}

export const questionnaire = {
    'ordering': [
        'prior',
        'age',
        'consentStudy',
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
        'mpxRiskStrategies',
        'mpxRiskStrategiesOtherText',
        'mpxRiskChangesPre2022',
        'mpxRiskChangesPreVax1',
        'mpxRiskChangePostVax1',
        'mpxRiskChangePostVax2',
        'mpxRiskOtherText',
        'serviceDelivery',
        'contactMe',
        'contactEmail',
        'thankYou',
        'ineligible'
    ],
    'milestones': {
        assignId: ["consentStudy"],
        retrieveId: ['giveUserName'],
        surveyComplete: 'thankYou',
        surveyIneligible: 'ineligible'
    },
    'buttons': {
        'take_survey': {
            english: "Take the survey!",
            spanish: "SP Take the survey!"
        },
        'challenge_friends': {
            english: "Challenge More Friends!",
            spanish: "SP Challenge More Friends!"
        },
        'check_results': {
            english: "Check my results!",
            spanish: "SP Check my results!"
        },
        'friends': {
            english: "Friends",
            spanish: "SP Friends"
        },
        'hookups': {
            english: 'Hookups',
            spanish: 'SP Hookups'
        },
        cancel: {
            english: 'Cancel',
            spanish: 'SP Cancel'
        },
        confirm: {
            english: 'Confirm',
            spanish: 'Sp Confirm'
        }
    },
    'age': {
        question: {
            english: "First we have to check: How old are you?",
            spanish: "SP: First we have to check: How old are you?"
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
    'consentGame': {
        heading: {
            english: "The Fine Print",
            spanish: "sp The Fine Print"
        },
        subtitle: {
            english: "Funky Box Game",
            spanish: "sp Funky Box Game"
        },
        body: {
            english: ["These data will be collected for the study. We don't collect anything about you other than what you share."],
            spanish: ["sp These data will be collected for the study. We don't collect anything about you other than what you share.!"]
        },
        options: {
            english: [],
            spanish: []
        },
        questionType: "longtext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'consentStudy': {
        heading: {
            english: "Informed Consent MPX NYC",
            spanish: "sp Informed Consent MPX NYC"
        },
        subtitle: {
            english: "MPX NYC",
            spanish: "sp MPX NYC"
        },
        body: {
            english: ["If you click the next button you've consented!"],
            spanish: ["sp If you click the next button you've consented!"]
        },
        options: {
            english: [],
            spanish: []
        },
        questionType: "longtext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'contactEmail': {
        question: {
            english: "What is your email address?",
            spanish: "SP What is your email address?"
        },
        options: {
            english: {"_": "email"},
            spanish: {"_": "email"}
        },
        questionType: "plaintext",
        skipLogic: {question: "contactMe", value: "yes", equals: false}
    },
    'contactMe': {
        question: {
            english: "Would you like to be contacted by the study team for additional questions about MPX? Your contact details will not be linked to your survey responses.",
            spanish: "SP Would you like to be contacted by the study team for additional questions about MPX? Your contact details will not be linked to your survey responses."
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'countFriends': {
        question: {
            english: "How many LGBTQ friends do you have who are important to you for any reason? Count only those you have been in touch with over the past 4 weeks.",
            spanish: "SP How many LGBTQ friends do you have who are important to you for any reason? Count only those you have been in touch with over the past 4 weeks."
        },
        options: {
            english: {'none': 'None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Over 10'},
            spanish: {'none': 'SP None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'SP Over 10'}
        },
        questionType: "radio"
    },
    'countSexGS': {
        question: {
            english: "Other than the people in the places you mentioned in the previous questions, how many people have you had sexual contact with over the past 4 weeks, excluding primary partners?",
            spanish: "SP Other than the people in the places you mentioned in the previous questions, how many people have you had sexual contact with over the past 4 weeks, excluding primary partners?"
        },
        options: {
            english: {'none': 'None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Over 10'},
            spanish: {'none': 'SP None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'SP Over 10'}
        },
        questionType: "radio",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'countSexNGS': {
        question: {
            english: "How many people have you had sexual contact with over the past 4 weeks, excluding primary partners?",
            spanish: "SP How many people have you had sexual contact with over the past 4 weeks, excluding primary partners?"
        },
        options: {
            english: {'none': 'None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'Over 10'},
            spanish: {'none': 'SP None', '_1_2': '1-2', '_3_5': '3-5', '_6_10': '6-10', '10_plus': 'SP Over 10'}
        },
        questionType: "radio",
        skipLogic: {question: "groupSex", value: "no", equals: true}
    },
    'covidTestPositive': {
        question: {
            english: "In the past 4 weeks, did you test positive for COVID-19?",
            spanish: "SP In the past 4 weeks, did you test positive for COVID-19?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'exclusiveUser': {
        question: {
            english: "For the next two months, will you be the only person who uses the device you are taking the survey on?",
            spanish: "SP For the next two months, will you be the only person who uses the device you are taking the survey on?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'gender': {
        question: {
            english: "What is your gender identity?",
            spanish: "SP What is your gender identity?"
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
                'man': 'SP Man',
                'woman': 'SP Woman',
                'trans_man': 'SP Trans man',
                'trans_woman': 'SP Trans woman',
                'non_binary': 'Sp Non-binary',
                'other': 'SP Other'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'getUserName': {
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
    'giveUserName': {
        question: {
            english: "Please enter your code ",
            spanish: "SP Please enter your code "
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
            spanish: "SP Over the past 4 weeks, have you had sex with two or more people at the same time or had close physical contact with multiple people at the same time? (like at a party, sport game, concert, show)"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false}
    },
    'hivLastTest': {
        question: {
            english: "When was your last HIV test?",
            spanish: "SP When was your last HIV test?"
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
                'past_month': 'SP In the past month',
                '_1_3_months_ago': 'SP 1-3 months ago',
                '_4_6_months_ago': 'SP 4-6 months ago',
                '_6_12_months_ago': 'SP 6-12 months ago',
                '_over_year_ago': 'SP Over a year ago',
            }
        },
        questionType: "radio",
        skipLogic: {question: "hivStatus", value: "positive", equals: false}
    },
    'hivPrep': {
        question: {
            english: "Are you on PrEP?",
            spanish: "SP Are you on PrEP?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "hivStatus", value: "positive", equals: false}
    },
    'hivStatus': {
        question: {
            english: "What is your HIV status? ",
            spanish: "SP What is your HIV status? "
        },
        options: {
            english: {
                'positive': 'Living with HIV',
                'negative': 'Not living with HIV',
                'unsure': 'Unsure'
            },
            spanish: {
                'positive': 'SP Living with HIV',
                'negative': 'SP Not living with HIV',
                'unsure': 'SP Unsure'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'hivSuppressed': {
        question: {
            english: "Have you been told that your viral load is suppressed or undetectable?",
            spanish: "SP Have you been told that your viral load is suppressed or undetectable?"
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'unsure': 'Unsure'
            },
            spanish: {
                'yes': 'SP Yes',
                'no': 'Sp No',
                'unsure': 'SP Unsure'
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
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                "Use the search bar to search for a neighborhood, place name, or address.",
                "You can drag the map and zoom in and out",
                "Tap on the location of your home and a marker will show the location on the map"
            ],
            spanish: [
                "SP Use the search bar to search for a neighborhood",
                "You can drag the map and zoom in and out",
                "Tap on the location of your home and a marker will show the location on the map"
            ],
        }
    },
    'homeSafety': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                "We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
            spanish: [
                "SP We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
        }
    },
    'homeInstructions': {
        questionType: "instruction",
        heading: {
            english: "Home",
            spanish: "SP Home"
        },
        body: {
            english: ["Where do you live?", 'Let us know by tapping on the map.'],
            spanish: ["SP Where do you live?", 'Let us know by tapping on the map.']
        }
    },
    'inviteToSurvey': {
        sharePromptHeading: {
            english: "Contribute to the Queer and Trans Map of New York City",
            spanish: "SP Contribute to the Queer and Trans Map of New York City"
        },
        sharePromptBody: {
            english: [
                'To learn how to stop new diseases quickly, we are building a community map of queer and trans people in New York City. This is a giant network connecting friends and hookups.',
                'Contribute to this effort by sharing the survey with up to 10 friends you have communicated with in the past 4 weeks using the button below.',
                'Each additional person you successfully link with helped us to understand how to spread important information quickly when a new infection like MPOX starts.',
                'For those who successfully connect friends, we will provide a free anonymized report summarizing study results for your friend circle.',
                'Click here to share this survey with queer and trans friends you have communicated with in the past 4 weeks.'
            ],
            spanish: [
                'SP To learn how to stop new diseases quickly, we are building a community map of queer and trans people in New York City. This is a giant network connecting friends and hookups.',
                'Contribute to this effort by sharing the survey with up to 10 friends you have communicated with in the past 4 weeks using the button below.',
                'Each additional person you successfully link with helped us to understand how to spread important information quickly when a new infection like MPOX starts.',
                'For those who successfully connect friends, we will provide a free anonymized report summarizing study results for your friend circle.',
                'Click here to share this survey with queer and trans friends you have communicated with in the past 4 weeks.'
            ],
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
            spanish: "SP Sorry!"
        },
        body: {
            english: ["Sorry! Unfortunately you are not eligible for this survey."],
            spanish: ["SP Unfortunately you are not eligible for this survey."]
        }
    },
    "mapRemovePinQuestion": {
        questionType: "confirm",
        heading: {
            english: "Would uyou like to confirm this?",
            spanish: "Would uyou like to confirm this?(Spanish)"
        },
        body: {
            english: ["Would you like to confirm this? Body"],
            spanish: ["Would you like to confirm this? Body (Spanish)"]
        }
    },
    'mpxAnotherQuestion': {
        question: {
            english: "Is there anything else you think is important for us to understand about MPOX?",
            spanish: "Is there anything else you think is important for us to understand about MPOX?"
        },
        options: {
            english: {'comment': 'Comment'},
            spanish: {'comment': 'Comment'}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxCare': {
        question: {
            english: "Did you receive care by a medical provider for your symptoms?",
            spanish: "SP Did you receive care by a medical provider for your symptoms?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxDiagnosis': {
        question: {
            english: "Were you diagnosed with monkeypox by a medical provider? ",
            spanish: "SP Were you diagnosed with monkeypox by a medical provider? "
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxRiskChangePostVax1': {
        question: {
            english: "How did you change your level of sexual risk after getting the first mpx vaccine dose?",
            spanish: "SP How did you change your level of sexual risk after getting the first mpx vaccine dose?"
        },
        options: {
            english: {
                'increased_risk': 'Increased Risk',
                'no_change': 'No Change',
                'lowered_risk': 'Lowered Risk'
            },
            spanish: {
                'increased_risk': 'SP Increased Risk',
                'no_change': 'SP No Change',
                'lowered_risk': 'SP Lowered Risk'
            }
        },
        questionType: "radio",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'mpxRiskChangePostVax2': {
        question: {
            english: "How did you change your level of sexual risk after getting the second mpx vaccine dose?",
            spanish: "SP How did you change your level of sexual risk after getting the second mpx vaccine dose?"
        },
        options: {
            english: {
                'increased_risk': 'Increased Risk',
                'no_change': 'No Change',
                'lowered_risk': 'Lowered Risk'
            },
            spanish: {
                'increased_risk': 'SP Increased Risk',
                'no_change': 'SP No Change',
                'lowered_risk': 'SP Lowered Risk'
            }
        },
        questionType: "radio",
        skipLogic: {question: "mpxVax2", value: "yes", equals: true}
    },
    'mpxRiskChangesPre2022': {
        question: {
            english: "In 2023, how does your sexual behavior compare to your behavior before the summer of 2022? ",
            spanish: "SP In 2023, how does your sexual behavior compare to your behavior before the summer of 2022? "
        },
        options: {
            english: {
                'same': 'Same as Pre-Summer 2022',
                'changed_because_mpox': 'Changed to avoid MPOX infection',
                'changed_other_reasons': 'Changed for other reasons'
            },
            spanish: {
                'same': 'SP Same as Pre-Summer 2022',
                'changed_because_mpox': 'SP Changed to avoid MPOX infection',
                'changed_other_reasons': 'SP Changed for other reasons'
            }
        },
        questionType: "radio"
    },
    'mpxRiskChangesPreVax1': {
        question: {
            english: "How did you change your level of sexual risk after becoming aware of MPOX and before getting the first MPOX vaccine dose?",
            spanish: "SP How did you change your level of sexual risk after becoming aware of MPOX and before getting the first MPOX vaccine dose?"
        },
        options: {
            english: {
                'increased_risk': 'Increased Risk',
                'no_change': 'No Change',
                'lowered_risk': 'Lowered Risk'
            },
            spanish: {
                'increased_risk': 'SP Increased Risk',
                'no_change': 'SP No Change',
                'lowered_risk': 'SP Lowered Risk'
            }
        },
        questionType: "plaintext",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'mpxRiskOtherText': {
        question: {
            english: "Is there anything else you want to tell us about managing the risk of MPOX or other sexually transmitted infections?",
            spanish: "SP Is there anything else you want to tell us about managing the risk of MPOX or other sexually transmitted infections?"
        },
        options: {
            english: {'comment': 'Comment'},
            spanish: {'comment': 'Comment'}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxRiskReduce': {
        question: {
            english: "In 2022, did you change your sexual behavior to reduce the risk of getting MPOX?",
            spanish: "SP In 2022, did you change your sexual behavior to reduce the risk of getting MPOX?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false}
    },
    'mpxRiskStrategies': {
        question: {
            english: "What strategies did you use?",
            spanish: "SP What strategies did you use?"
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
                'no_sex': 'SP No Sex',
                'primary_partner_only': 'SP Sex Only with Primary Partner',
                'fewer_partners': 'SP Reduced Number of Sexual Partners',
                'fewer_sex_events': 'SP Reduced frequency of Sexual Contact',
                'avoided_gs': 'SP Avoided Group Sex',
                'other': 'SP Other'
            }
        },
        questionType: "checkbox",
        skipLogic: {question: "mpxRiskReduce", value: "yes", equals: true}
    },
    'mpxRiskStrategiesOtherText': {
        question: {
            english: "Please describe other strategies you used",
            spanish: "SP Please describe other strategies you used"
        },
        options: {
            english: {'description': 'Description'},
            spanish: {'description': 'Description'}
        },
        questionType: "plaintext",
        skipLogic: {question: "mpxRiskStrategies", value: "other", equals: true}
    },
    'mpxSymptoms': {
        question: {
            english: "In the past 4 weeks, have you experienced symptoms that are not related to a confirmed COVID-19 infection?",
            spanish: "SP In the past 4 weeks, have you experienced symptoms that are not related to a confirmed COVID-19 infection?"
        },
        options: symptomsList,
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxTest': {
        question: {
            english: "In the past 4 weeks, did you receive testing for monkeypox?",
            spanish: "SP In the past 4 weeks, did you receive testing for monkeypox?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxVax1': {
        question: {
            english: "Have you received at least 1 dose of the monkeypox vaccine? ",
            spanish: "SP Have you received at least 1 dose of the monkeypox vaccine? "
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'unsure': 'Unsure'
            },
            spanish: {
                'yes': 'SP Yes',
                'no': 'Sp No',
                'unsure': 'SP Unsure'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'mpxVax1Date': {
        question: {
            english: "When were you first vaccinated against monkeypox? (If you don't remember, give us your best guess)",
            spanish: "SP When were you first vaccinated against monkeypox? (If you don't remember, give us your best guess)"
        },
        options: {
            english: {'date': 'Date'},
            spanish: {'date': 'Date'}
        },
        questionType: "date",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'mpxVax2': {
        question: {
            english: "Have you received a second dose of the monkeypox vaccine? ",
            spanish: "SP Have you received a second dose of the monkeypox vaccine? "
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'unsure': 'Unsure'
            },
            spanish: {
                'yes': 'SP Yes',
                'no': 'SP No',
                'unsure': 'SP Unsure'
            }
        },
        questionType: "radio",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'mpxVax2Date': {
        question: {
            english: "When did you get your second dose of MPOX vaccine? (If you don't remember, give us your best guess)",
            spanish: "SP When did you get your second dose of MPOX vaccine? (If you don't remember, give us your best guess)"
        },
        options: {
            english: {'date': 'Date'},
            spanish: {'date': 'Date'}
        },
        questionType: "date",
        skipLogic: {question: "mpxVax2", value: "yes", equals: true}
    },
    'nudesGameExplain': {
        questionType: "longtext",
        heading: {
            english: "Funky Box",
            spanish: "SP Funky Box"
        },
        subtitle: {
            english: "A Game by MPX NYC",
            spanish: "A Game by MPX NYC"
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
                    "SP Hi There!",
                    "You have probably reached this site because a friend sent you a link about a game.",
                    "The game is called Funky Box, and it was designed to help us learn more about that other pox that's been going around.",
                    "All you have to do, for the science, is answer 1 question, and then guess how your friend would answer that same question.",
                    "You get a prompt to challenge a friend, and you can use that to share with people you have hooked up with and queer and trans friends.",
                    "Your friend will only see your answer once they provide their answer."
                ],
        }

    },
    'nudesSendMe': {
        question: {
            english: "Under what circumstance would you send nudes of yourself to someone?",
            spanish: "SP Under what circumstance would you send nudes of yourself to someone?"
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
                'any': 'SP At any time for any reason!',
                'ask': 'SP If they ask',
                'nda': 'SP If we have an NDA',
                'horny': 'SP If I am horny',
                'hot': 'SP If they are extremely hot',
                'seal': 'SP If it will seal the deal with a potential hookup',
                'partner': 'SP Only if we are partners with each other',
                'regulars': 'SP Only if we are regulars',
                'love': 'SP Only if we love each other'
            }
        },
        questionType: 'checkbox'
    },
    'nudesSendFriend': {
        question: {
            english: "Under what circumstance would your friend send nudes to somebody else?",
            spanish: "SP under what circumstance would your friend send nudes to somebody else?"
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
                'any': 'Sp At any time for any reason!',
                'ask': 'Sp If they ask',
                'nda': 'Sp If they have an NDA',
                'horny': 'Sp If my friend is horny',
                'hot': 'Sp If my friends thinks the person is extremely hot',
                'seal': 'Sp If it will seal the deal between my friend and a potential hookup',
                'partner': 'Sp If they are partners with each other',
                'regulars': 'Sp If they are regulars',
                'love': 'Sp If they love each other'
            },
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'nudeShareSurvey':     {
        sharePromptHeading: {
            english: "Now the fun part",
            spanish: "Now the fun part"
                },
        sharePromptBody: {
            english: "Ok, so now that your guess is in, you have to share the survey with your friend or hookup and make sure they answer the questions. You won't see each other's answers until you both respond. Remember: It's for science.",
            spanish: "SP Ok, so now that your guess is in, you have to share the survey with your friend or hookup and make sure they answer the questions. You won't see each other's answers until you both respond. Remember: It's for science."
                },
        shareMessage: {
            english: "Hey - for science, I need to know under what circumstance you would share nudes. Take this survey quick:",
            spanish: "Hey - for science, I need to know under what circumstance you would share nudes. Take this survey quick:"
                },
        questionType: "sharedialog"
            },
    'nudesThankYou': {
        questionType: "funkypoxdone",
        heading: {
            english: "While you're here...",
            spanish: "SP While you're here..."
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
                    "SP Thank you for playing funkybox with us!",
                    "Come back to this page and we will show your friends' answers. Because this is an anonymous survey, you will have to remember which friend is which! We will just give them cute names.",
                    "In the meantime, please take the MPX NYC Survey. It was made by us for us. The information we collect here has already been used to make positive change in LGBT health.",
                ],
        }

    },
    'placeCount': {
        question: {
            english: "How many people were hooking up at this place?",
            spanish: "SP How many people were  hooking up at this place?"
        },
        options: {
            english: {'none': 'None', '_2_5': '2-5', '_6_10': '6-10', '_11_20': '11-20', '_21_50': '21-50', '_51_100': '51-100', '_100plus': 'Over 100'},
            spanish: {'none': 'None', '_2_5': 'Sp 2-5', '_6_10': 'Sp 6-10', '_11_20': 'Sp 11-20', '_21_50': 'SP 21-50', '_51_100': 'SP 51-100', '_100plus': 'SP Over 100'}

        },
        questionType: "radio"
    },
    'placeDrugs': {
        question: {
            english: "Which drugs did you use at the place, in the past 4 weeks? If none, leave the textboxes blank.",
            spanish: "SP Which drugs did you use at the place, in the past 4 weeks? If none, leave the textboxes blank."
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
            spanish: "SP Over the past 4 weeks, did you use any drugs at or before going to this place?"
        },
        options: {
            english: {
                'yes': 'Yes',
                'no': 'No',
                'dont_remember': 'I don’t remember'
            },
            spanish: {
                'yes': 'SP Yes',
                'no': 'SP No',
                'dont_remember': 'SP I don’t remember'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placeFreq': {
        question: {
            english: "Over the past 4 weeks, how many times have you visited this place? ",
            spanish: "SP Over the past 4 weeks, how many times have you visited this place? "
        },
        options: {
            english: {'_1': 'Once', '_2_4': '2-4', '_5_10': '5-10', '_10plus': 'Over 10'},
            spanish: {'_1': 'SP Once', '_2_4': 'SP 2-4', '_5_10': 'SP 5-10', '_10plus': 'SP Over 10'},
        },
        questionType: "radio"
    },
    'placeSex': {
        question: {
            english: "Over the past 4 weeks, how many times have you had sexual contact at this place? ",
            spanish: "SP Over the past 4 weeks, how many times have you had sexual contact at this place? "
        },
        options: {
            english: {'none': 'None', '_1': '1', '_2_4': '2-4', '_5_10': '5-10', '_10plus': 'Over 10'},
            spanish: {'none': 'Sp None', '_1': 'SP 1', '_2_4': 'SP 2-4', '_5_10': 'SP 5-10', '_10plus': 'SP Over 10'},
        },
        questionType: "radio"
    },
    'placesGS': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesGSInstructions",
        mapQuestionOrder: ["placeTypeGS", "placeFreq", "placeSex", "placeCount"],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesGSDetail': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                'Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had group sex or physical contact in during the past 4 weeks'
            ],
            spanish: [
                'SP Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had group sex or physical contact in during the past 4 weeks'
            ],
        }
    },
    'placesGSSafety': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                "We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
            spanish: [
                "SP We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
        }
    },
    'placesGSInstructions': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                'Show us where you had group sex or physical contact by tapping on the map.',
                'We will ask a few questions about each place.'
            ],
            spanish: [
                'SP Show us where you had group sex or physical contact by tapping on the map.',
                'We will ask a few questions about each place.'
            ],
        }
    },
    'placesHookup': {
        questionType: "map",
        mapQuestionInstruction: "placesHookupInstructions",
        mapQuestionSafety:'placesHookupSafety',
        mapQuestionDetail: 'placesHookupDetail',
        mapQuestionOrder: ['placeTypeHookup'],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "HOOKUP_IN"
    },
    'placesHookupDetail': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                'Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had sexual contact (not in a group setting) in during the past 4 weeks'
            ],
            spanish: [
                'SP Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had sexual contact (not in a group) in during the past 4 weeks'
            ],
        }
    },
    'placesHookupSafety': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                "We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
            spanish: [
                "SP We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
        }
    },
    'placesHookupInstructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Hooking Up"
        },
        body: {
            english: [
                'Show us where you had sexual contact (not in a group setting) by tapping on the map.'
            ],
            spanish: [
                'SP Show us where you had sexual contact (not in a group setting) by tapping on the map.'
            ],
        }
    },
    'placeTypeGS': {
        question: {
            english: "What kind of place is this?",
            spanish: "SP What kind of place is this?"
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
                'dance_party': 'SP Dance party',
                'sex_party': 'SP Sex Party',
                'darkroom': 'SP Darkroom',
                'sport_game': 'SP Sport Game',
                'concert': 'SP Concert',
                'theatre_show': 'SP Theatre/Show',
                'private_residence': 'SP Private Residence',
                'sex_club': 'SP Sex Club ',
                'bathhouse': 'SP Bathhouse',
                'park': 'SP Park',
                'something_else': 'SP Something Else'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placeTypeHookup': {
        question: {
            english: "What kind of place is this?",
            spanish: "SP What kind of place is this?"
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
                'dance_party': 'SP Dance party',
                'sex_party': 'SP Sex Party',
                'darkroom': 'SP Darkroom',
                'sport_game': 'SP Sport Game',
                'concert': 'SP Concert',
                'theatre_show': 'SP Theatre/Show',
                'private_residence': 'SP Private Residence',
                'sex_club': 'SP Sex Club ',
                'bathhouse': 'SP Bathhouse',
                'park': 'SP Park',
                'something_else': 'SP Something Else'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placesWork': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesWorkInstructions",
        mapQuestionOrder: [],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesWorkInstructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Hooking Up"
        },
        body: {
            english: [
                'Show us where you work by tapping on the map.'
            ],
            spanish: [
                'SP Show us where you work by tapping on the map.'
            ],
        }
    },
    'placesVax1': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesVax1Instructions",
        mapQuestionOrder: ['mpxVax1Date'],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "mpxVax1", value: "yes", equals: true}
    },
    'placesVax1Instructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Hooking Up"
        },
        body: {
            english: [
                'Show us where you got your first MPOX vaccine by tapping on the map.'
            ],
            spanish: [
                'SP Show us where you got your first MPOX vaccine by tapping on the map.'
            ],
        }
    },
    'placesVax2': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesVax2Instructions",
        mapQuestionOrder: ['mpxVax2Date'],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "mpxVax2", value: "yes", equals: true}
    },
    'placesVax2Instructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Hooking Up"
        },
        body: {
            english: [
                'Show us where you got your second MPOX vaccine by tapping on the map.'
            ],
            spanish: [
                'SP Show us where you got your second MPOX vaccine by tapping on the map.'
            ],
        }
    },
    'placesUsualCare': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesUsualCareInstructions",
        mapQuestionOrder: [],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesUsualCareInstructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Hooking Up"
        },
        body: {
            english: [
                'Show us where you usually get your healthcare.'
            ],
            spanish: [
                'SP Show us where you usually get your healthcare.'
            ],
        }
    },
    'placesOptimalCare': {
        questionType: "map",
        mapQuestionDetail: "placesGSDetail",
        mapQuestionSafety: "placesGSSafety",
        mapQuestionInstruction: "placesOptimalCareInstructions",
        mapQuestionOrder: [],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesOptimalCareInstructions': {
        questionType: "instruction",
        heading: {
            english: "Hooking Up",
            spanish: "Hooking Up"
        },
        body: {
            english: [
                'Show us where you want to receive your healthcare.'
            ],
            spanish: [
                'SP Show us where you want to receive your healthcare.'
            ],
        }
    },
    'placesMostTime': {
        questionType: "map",
        mapQuestionDetail: "placesMostTimeDetail",
        mapQuestionSafety: "placesMostTimeSafety",
        mapQuestionInstruction: "placesMostTimeInstructions",
        mapQuestionOrder: ['placesMostTimeType', 'placesMostTimeTiming'],
        mapRemovePinQuestion: "mapRemovePinQuestion",
        personPlaceRelation: "GROUP_SEX_IN",
        skipLogic: {question: "groupSex", value: "yes", equals: true}
    },
    'placesMostTimeDetail': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                'Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had sexual contact (not in a group setting) in during the past 4 weeks'
            ],
            spanish: [
                'SP Use the search bar to search for a neighborhood, place name, or address',
                'Then tap on the location of the place and a marker will appear on the map',
                'We will ask a few questions about the place you just added',
                'Repeat this for each place you had sexual contact (not in a group) in during the past 4 weeks'
            ],
        }
    },
    'placesMostTimeSafety': {
        questionType: "instruction",
        heading: {
            english: "Group Sex",
            spanish: "SP Group Sex"
        },
        body: {
            english: [
                "We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
            ],
            spanish: [
                "SP We will not save the exact location of the places you select, or any information that could possibly identify you.",
                "We only save the census tract. Census tracts are areas which each contain 1000 to 8000 residents each. "
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
                'SP Show us the places where you spent most of your time over the past 4 weeks.'
            ],
        }
    },
    'placesMostTimeType': {
        question: {
            english: "How do you spend time in this place?",
            spanish: "SP How do you spend time in this place?"
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
                'home_nbd': 'SP Hanging out at Home',
                'social_nbd': 'SP Socializing',
                'work_nbd': 'SP Working',
                'hookup': 'SP Hooking Up',
                'other': 'SP Something Else'
            },
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'placesMostTimeTiming': {
        question: {
            english: "When do you usually spend time at this place?",
            spanish: "SP When do you usually spend time at this place?"
        },
        options: {
            english: {
                'week_day': 'Weekdays',
                'week_night': 'Weeknights',
                'weekend_day': 'Weekend days',
                'weekend_night': 'Weekend nights'
            },
            spanish: {
                'week_day': 'Sp Weekdays',
                'week_night': 'Sp Weeknights',
                'weekend_day': 'Sp Weekend days',
                'weekend_night': 'Sp Weekend nights'
            },
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'prior': {
        question: {
            english: "Have you taken the MPX NYC survey this year (2023)?",
            spanish: "SP Have you taken the MPX NYC survey this year (2023)?"
        },
        options: yesNoResponse,
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'race': {
        question: {
            english: "What’s your race and/or ethnicity",
            spanish: "SP What’s your race and/or ethnicity"
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
                'white': 'SP White',
                'black': 'SP Black',
                'latinx': 'SP Latino/a/x',
                'asian': 'SP Asian',
                'pacific_islander': 'SP Pacific Islander',
                'other': 'SP other'
            }
        },
        questionType: "checkbox",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'serviceDelivery': {
        question: {
            english: "What would be the ideal way to get you the sexual health services you want?",
            spanish: "SP What would be the ideal way to get you the sexual health services you want?"
        },
        options: {
            english: {'comment': 'Comment'},
            spanish: {'comment': 'Comment'}
        },
        questionType: "plaintext",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'sex': {
        question: {
            english: "What is your sex assigned at birth?",
            spanish: "SP What is your sex assigned at birth?"
        },
        options: {
            english: {
                'male': 'Male',
                'female': 'Female',
                'other': 'Other'
            },
            spanish: {
                'male': 'Male',
                'female': 'Female',
                'other': 'Other'
            }
        },
        questionType: "radio",
        skipLogic: {question: "", value: "", equals: false},
        displayLogic: {question: "", value: "", equals: false}
    },
    'sexualOrientation': {
        question: {
            english: "What is your sexual orientation?",
            spanish: "SP What is your sexual orientation?"
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
                'gay': 'SP Gay',
                'bisexual': 'SP Bisexual',
                'straight': 'SP Straight',
                'queer': 'SP Queer',
                'something_else': 'SP Something else'
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
            spanish: "SP Thank you!"
        },
        body: {
            english: ["Thank you! We recorded your response."],
            spanish: ["SP Thank you! We recorded your response."]
        }
    }
}