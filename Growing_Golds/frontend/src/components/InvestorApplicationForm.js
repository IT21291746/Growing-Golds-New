import React, { useState } from 'react';
import axios from 'axios';  // Import axios
import '../styles/forms.css';

const InvestorApplicationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        country: '',
        investmentFocus: [],
        investmentFocusOther: '',
        investmentStage: [],
        investmentSize: '',
        investmentHorizon: '',
        professionalBackground: '',
        investingExperience: '',
        expertiseIndustries: '',
        memberships: '',
        investmentMotivation: '',
        contactPreference: [],
        investmentCriteria: '',
        additionalInfo: '',
        terms: false,
    });

    const [submissionMessage, setSubmissionMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            if (name === 'terms') {
                setFormData({ ...formData, [name]: checked });
            } else if (formData[name].includes(value)) {
                setFormData({ ...formData, [name]: formData[name].filter((item) => item !== value) });
            } else {
                setFormData({ ...formData, [name]: [...formData[name], value] });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            alert("1")
            const response = await axios.post('http://localhost:8070/invester/', formData);
            setSubmissionMessage('Application submitted successfully!');
            alert("done")
            setError('');
            console.log(response.data);
        } catch (err) {
            setError('Error submitting application. Please try again.');
            setSubmissionMessage('');
            console.error(err);
        }
    };

    return (
        <div className='main-div-form'>
        <div className='luxury-container'>
            <form onSubmit={handleSubmit} className="luxury-form">
                <h1>Investor Application Form</h1>
                <p>Welcome to Growing Golds. Please fill out the form below to help us match you with relevant opportunities.</p>

                <div className="luxury-fieldset">
                    <h2>Personal Information</h2>
                    <div className="luxury-group">
                        <label>Full Name</label>
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>LinkedIn Profile</label>
                        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>Country of Residence</label>
                        <select name="country" value={formData.country} onChange={handleChange} required>
                            <option value="" disabled>Select your country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                        </select>
                    </div>
                </div>

                <div className="luxury-fieldset">
                    <h2>Investment Preferences</h2>
                    <div className="luxury-group">
                        <label>Investment Focus Areas (Select all that apply)</label><br />
                        {['Technology', 'Healthcare', 'Finance', 'Real Estate', 'Consumer Goods', 'Energy', 'Education'].map((focus) => (
                            <div className="luxury-checkbox" key={focus}>
                                <input type="checkbox" name="investmentFocus" value={focus} onChange={handleChange} />
                                <label>{focus}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Other</label>
                        <input type="text" name="investmentFocusOther" value={formData.investmentFocusOther} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>Investment Stage Preferences (Select all that apply)</label><br />
                        {['Seed Stage', 'Early Stage', 'Growth Stage', 'Late Stage'].map((stage) => (
                            <div className="luxury-checkbox" key={stage}>
                                <input type="checkbox" name="investmentStage" value={stage} onChange={handleChange} />
                                <label>{stage}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Average Investment Size</label><br />
                        {['Under $50,000', '$50,000 - $200,000', '$200,000 - $500,000', '$500,000 - $1,000,000', 'Over $1,000,000'].map((size) => (
                            <div className="luxury-radio" key={size}>
                                <input type="radio" name="investmentSize" value={size} checked={formData.investmentSize === size} onChange={handleChange} required />
                                <label>{size}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Preferred Investment Horizon</label><br />
                        {['Short Term (1-3 years)', 'Medium Term (3-7 years)', 'Long Term (7+ years)'].map((horizon) => (
                            <div className="luxury-radio" key={horizon}>
                                <input type="radio" name="investmentHorizon" value={horizon} checked={formData.investmentHorizon === horizon} onChange={handleChange} required />
                                <label>{horizon}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="luxury-fieldset">
                    <h2>Background and Experience</h2>
                    <div className="luxury-group">
                        <label>Professional Background</label>
                        <textarea name="professionalBackground" value={formData.professionalBackground} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Relevant Experience in Investing</label>
                        <textarea name="investingExperience" value={formData.investingExperience} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>Industries of Expertise</label>
                        <textarea name="expertiseIndustries" value={formData.expertiseIndustries} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>Memberships and Affiliations</label>
                        <textarea name="memberships" value={formData.memberships} onChange={handleChange} />
                    </div>
                </div>

                <div className="luxury-fieldset">
                    <h2>Additional Information</h2>
                    <div className="luxury-group">
                        <label>What are your primary motivations for investing?</label>
                        <textarea name="investmentMotivation" value={formData.investmentMotivation} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>How do you prefer to be contacted? (Select all that apply)</label><br />
                        {['Email', 'Phone', 'LinkedIn'].map((contact) => (
                            <div className="luxury-checkbox" key={contact}>
                                <input type="checkbox" name="contactPreference" value={contact} onChange={handleChange} />
                                <label>{contact}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Are there any specific criteria or conditions you look for in an investment opportunity?</label>
                        <textarea name="investmentCriteria" value={formData.investmentCriteria} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>Any other information you’d like to share with us?</label>
                        <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
                    </div>
                </div>

                <div className="luxury-fieldset">
                    <h2>Terms and Conditions</h2>
                    <div className="luxury-group">
                        <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
                        <label>I agree to the terms and conditions</label>
                    </div>
                </div>

                <button type="submit" className="luxury-submit-btn">Submit</button>
                {submissionMessage && <p className="success-message">{submissionMessage}</p>}
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
        </div>
    );
};

export default InvestorApplicationForm;
