import mongoose, { Document, Schema } from "mongoose";

export interface Transaction extends Document {
  date: Date;
  type: "invoice" | "payment";
  amount: number;
  invoice?: string;
  closingBalance: number;
}

export const TransactionSchema: Schema<Transaction> = new mongoose.Schema({
  date: { type: Date, required: true },
  type: { type: String, enum: ["invoice", "payment"], required: true },
  amount: { type: Number, required: true },
  invoice: { type: String },
  closingBalance: { type: Number, required: true },
});

const TransactionModel =
  (mongoose.models.Transaction as mongoose.Model<Transaction>) ||
  mongoose.model("Transaction", TransactionSchema);

export default TransactionModel;
