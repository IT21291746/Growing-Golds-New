const mongoose = require('mongoose');

const InvesterSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    linkedin: { type: String },
    country: { type: String, required: true },
    investmentFocus: { type: [String], required: true },
    investmentFocusOther: { type: String },
    investmentStage: { type: [String], required: true },
    investmentSize: { type: String, required: true },
    investmentHorizon: { type: String, required: true },
    professionalBackground: { type: String, required: true },
    investingExperience: { type: String },
    expertiseIndustries: { type: String },
    memberships: { type: String },
    investmentMotivation: { type: String },
    contactPreference: { type: [String], required: true },
    investmentCriteria: { type: String },
    additionalInfo: { type: String },
    terms: { type: Boolean, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Invester', InvesterSchema);
