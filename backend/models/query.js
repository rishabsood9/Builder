import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
});
// Add this model
const Query = mongoose.model("Query", querySchema);
export default Query;
