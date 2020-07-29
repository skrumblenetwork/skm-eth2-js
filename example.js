const Skrumble = require("./index");
const path = require("path");


const options = {
    web3: {
        type: "http",
        path: "http://127.0.0.1:7545"
    },
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

    skrumble.account.balanceOf("0x.........")
         .then(balance => {
             console.log(balance);
             return debrief.account.listAccounts();
         })
         .then(accounts => {
             console.log("Account List:", accounts);
             if (accounts.length > 0) {
                 return { address: accounts[0] };
             } else {
                 return debrief.account.newAccount(passphrase)
             }
         }).then(account => {
             address = account.address;
             console.log("Address:", account.address);
             return debrief.account.getKey(account.address, passphrase);
         }).then(keys => {
             console.log("Keys:", keys);
         });
})(skrumble);
