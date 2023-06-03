class IDUnassigned extends Error {
    constructor() {
        super()
        this.name = 'IDUnassigned';
        this.message = 'Oops! We could not assign you a unique code at this time. Please try again later!';
        this.header = 'Uh Oh';
    }
}

class NoCensusTract extends Error {
    constructor() {
        super()
        this.name = 'NoCensusTract';
        this.message = 'We could not fetch the Census Tract for your location. Please try again later!';
        this.header = 'Uh Oh';
    }
}

class SurveyNotSaved extends Error {
    constructor() {
        super()
        this.name = 'SurveyNotSaved';
        this.message = 'We could not save your survey reponses. Please try again later!';
        this.header = 'Uh Oh';
    }
}

class CantGetID extends Error {
    constructor() {
        super()
        this.name = 'CantGetID';
        this.message = 'We could not retrieve your secret code. Double check that it is correct?';
        this.header = 'Uh Oh!';
    }
}

class CantRetrieveData extends Error {
    constructor() {
        super()
        this.name = 'CantGetID';
        this.message = 'We could not retrieve your data. Refresh the webpage and try again.';
        this.header = 'Uh Oh!';
    }
}

class CantAssignReferral extends Error {
    constructor() {
        super()
        this.name = 'CantAssignReferral';
        this.message = 'We could not make the connection between you and the person who referred you. Please double check that you clicked the correct link and refresh the page.';
        this.header = 'Uh Oh!';
    }
}

class NoReferrerID extends Error {
    constructor() {
        super()
        this.name = 'NoReferrerID';
        this.message = 'We could not find the secret code for the person who referred you. Double check that you clicked the correct link?';
        this.header = 'Uh Oh!';
    }
}


class CantSaveEmail extends Error {
    constructor() {
        super()
        this.name = 'CantSaveEmail';
        this.message = 'We could not save your Email address. Refresh the webpage and try again.';
        this.header = 'Uh Oh!';
    }
}
class NoResponse extends Error {
    constructor() {
        super()
        this.name = 'NoResponse';
        this.message = 'Please answer the question!';
        this.header = 'Oops';
    }
}

class SubmitCookieFailed extends Error {
    constructor() {
        super()
        this.name = 'SubmitCookieFailed';
        this.message = 'We could not retrieve your details! Refresh the webpage and try again.';
        this.header = 'Oops';
    }
}



module.exports ={
    NoResponse,
    CantRetrieveData,
    IDUnassigned,
    NoCensusTract,
    SurveyNotSaved,
    CantGetID,
    CantAssignReferral,
    NoReferrerID,
    CantSaveEmail,
    SubmitCookieFailed
}