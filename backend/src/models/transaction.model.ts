import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  txId: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, required: true },
  note: { type: String },
  confirmedRound: { type: Number },
}, { timestamps: true });

export const Transaction = mongoose.model("Transaction", transactionSchema);
