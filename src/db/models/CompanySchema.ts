import mongoose, { Document, Schema } from "mongoose";
import { Transaction, TransactionSchema } from "./TransactionSchema";

export interface Company extends Document {
  name: string;
  gstin: string;
  transactions: Transaction[];
  balance: number;
}

export const CompanySchema: Schema<Company> = new Schema({
  name: { type: String, required: true },
  gstin: { type: String, required: true, unique: true },
  transactions: [TransactionSchema],
  balance: { type: Number, default: 0 },
});

const CompanyModel =
  (mongoose.models.Company as mongoose.Model<Company>) ||
  mongoose.model<Company>("Company", CompanySchema);

export default CompanyModel;
