const mongoose = require('mongoose');

const inventerSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String },
    country: { type: String, required: true },
    businessName: { type: String, required: true },
    businessWebsite: { type: String, required: true },
    industry: { type: [String], required: true },
    industryOther: { type: String },
    stage: { type: String, required: true },
    description: { type: String, required: true },
    uniqueValue: { type: String, required: true },
    fundingAmount: { type: String, required: true },
    fundingPurpose: { type: [String], required: true },
    fundingStatus: { type: String, required: true },
    roiTimeline: { type: String, required: true },
    motivation: { type: String, required: true },
    challenges: { type: String, required: true },
    contactPreference: { type: String, required: true },
    additionalInfo: { type: String },
    terms: { type: Boolean, required: true },
}, { timestamps: true }); // This adds createdAt and updatedAt

const Inventer = mongoose.model('Inventer', inventerSchema);
module.exports = Inventer;
