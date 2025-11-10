import algosdk from "algosdk";

const account = algosdk.generateAccount();
const mnemonic = algosdk.secretKeyToMnemonic(account.sk);

console.log("ACCOUNT ADDRESS:", account.addr);
console.log("MNEMONIC:", mnemonic);
