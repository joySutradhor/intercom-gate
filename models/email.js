import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: false,
  },
  fullName: {
    type: String,
    required: true,
  },

  contactNumber: {
    type: String,
    required: true,
  },

  companyNameApplicable: {
    type: String,
    required: false,
  },
  addressLine1: {
    type: String,
    required: false,
  },
  simType: {
    type: String,
    required: true,
  },
  townCity: {
    type: String,
    required: true,
  },
  county: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  contractAgree: {
    type: Boolean,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

export const usersEmail =
  mongoose.models.usersEmail || mongoose.model("usersEmail", emailSchema);
