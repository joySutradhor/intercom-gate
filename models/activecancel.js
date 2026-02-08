import mongoose from "mongoose";

const activeCancelSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: false,
  },
  

  simNumber: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: false,
  },


});

export const activeCancel =
  mongoose.models.activeCancel || mongoose.model("activeCancel", activeCancelSchema);
