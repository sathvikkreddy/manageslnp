import mongoose, { Document, Schema } from "mongoose";
import { Company, CompanySchema } from "./CompanySchema";

export interface User extends Document {
  email: string;
  password: string;
  sellsTo: Company[];
}

export const UserSchema: Schema<User> = new Schema({
  email: { required: true, type: String },
  password: { required: true, type: String },
  sellsTo: [CompanySchema],
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
