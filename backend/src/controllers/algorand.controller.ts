import { Request, Response } from "express";
import algosdk from "algosdk";
import { getAlgorandClient } from "../services/algorand.service";
import { Transaction } from "../models/transaction.model";


export const sendTxn = async (req: Request, res: Response) => {
  try {
    const { mnemonic, to, amount } = req.body;

    if (!mnemonic || !to || !amount) {
      return res.status(400).json({ msg: "mnemonic, to, amount are required" });
    }

    const client = getAlgorandClient();

    const account = algosdk.mnemonicToSecretKey(mnemonic);
    const params = await client.getTransactionParams().do();

    const amountInMicroAlgo = Math.round(amount * 1e6);

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: account.addr,
      to,
      amount: amountInMicroAlgo,
      suggestedParams: params,
    });

    const signedTxn = txn.signTxn(account.sk);
    const { txId } = await client.sendRawTransaction(signedTxn).do();

    await Transaction.create({
      txId,
      from: account.addr,
      to,
      amount,
      status: "pending",
    });

    res.status(200).json({ msg: "Transaction sent", txId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "error sending txn", err });
  }
};
export const getTxnStatus = async (req: Request, res: Response) => {
  try {
    const { txId } = req.params;
    const client = getAlgorandClient();

    const p = await client.pendingTransactionInformation(txId).do();

    return res.json({
      confirmedRound: p["confirmed-round"],
      poolError: p["pool-error"],
      status: p["confirmed-round"] > 0 ? "confirmed" : "pending"
    });

  } catch (err) {
    res.status(500).json({ msg: "error fetching status", err });
  }
};

export const getAllTxns = async (req: Request, res: Response) => {
  try {
    const txns = await Transaction.find().sort({ createdAt: -1 });
    res.json(txns);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching transactions", err });
  }
};

