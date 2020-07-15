const Skrumble = require("./index");
const path = require("path");


const options = {
    account: {
        store: {
            type: "file",
            path: path.join(process.cwd(), "testdata", "accounts")
        }
    }
};

var skrumble = new Skrumble(options);


(function accountExample(skrumble) {
    var passphrase = "123456";
    var address = "";

    skrumble.account.listAccounts().then(accounts => {
        console.log("Account List:", accounts);
        if (accounts.length > 0) {
            return { address: accounts[0] };
        } else {
            return skrumble.account.newAccount(passphrase)
        }
    }).then(account => {
        address = account.address;
        console.log("Address:", account.address);
        return skrumble.account.getKey(account.address, passphrase);
    }).then(keys => {
        console.log("Keys:", keys);
        return skrumble.account.deleteAccount(address, passphrase);
    });
})(skrumble);