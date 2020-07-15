const Account = require("./pageages/account")

class Skrumble {
    constructor(options){
        this.account = new Account(options.account)
    }
}

module.exports = Skrumble;