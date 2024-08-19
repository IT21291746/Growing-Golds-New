import React, { useState } from 'react';
import '../styles/forms.css';

const Investor = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        country: '',
        businessName: '',
        businessWebsite: '',
        industry: [],
        industryOther: '',
        stage: '',
        description: '',
        uniqueValue: '',
        fundingAmount: '',
        fundingPurpose: [],
        fundingStatus: '',
        roiTimeline: '',
        motivation: '',
        challenges: '',
        contactPreference: '',
        additionalInfo: '',
        terms: false,
    });

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
            const response = await fetch('http://localhost:8070/inventer/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div className='main-div-form'>
        <div className='luxury-container'>
            <form onSubmit={handleSubmit} className="luxury-form">
                <h1>Investment Seeker Application Form</h1>
                <p>Welcome to the Harvester. We connect innovative business ideas with visionary investors. Please fill out the form below to apply for investment opportunities.</p>

                <div className="luxury-fieldset">
                    <h2>Personal Information</h2>
                    <div className="luxury-group">
                        <label>Full Name</label>
                        <input placeholder='Your Full Name' type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Email Address</label>
                        <input placeholder='Your Email Address' type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Phone Number</label>
                        <input placeholder='Your Phone Number' type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>LinkedIn Profile</label>
                        <input placeholder='Your LinkedIn Profile' type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
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
                    <h2>Business Information</h2>
                    <div className="luxury-group">
                        <label>Business Name</label>
                        <input placeholder='Your Business Name' type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Business Website</label>
                        <input placeholder='Your Business Website' type="url" name="businessWebsite" value={formData.businessWebsite} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Business Industry</label><br />
                        {['Technology', 'Healthcare', 'Finance', 'Real Estate', 'Consumer Goods', 'Energy', 'Education'].map((industry) => (
                            <div className="luxury-checkbox" key={industry}>
                                <input type="checkbox" name="industry" value={industry} onChange={handleChange} />
                                <label>{industry}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Other</label>
                        <input placeholder='Other Business Industry' type="text" name="industryOther" value={formData.industryOther} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>Business Stage</label><br />
                        {['Idea/Concept', 'Startup (Product Development)', 'Early Stage (Initial Revenue)', 'Growth Stage (Scaling Operations)', 'Established (Profitable)'].map((stage) => (
                            <div className="luxury-radio" key={stage}>
                                <input type="radio" name="stage" value={stage} checked={formData.stage === stage} onChange={handleChange} required />
                                <label>{stage}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Description of Business</label>
                        <textarea placeholder='Description of Your Business' name="description" value={formData.description} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Unique Value Proposition</label>
                        <textarea placeholder='Unique Value Proposition' name="uniqueValue" value={formData.uniqueValue} onChange={handleChange} required />
                    </div>
                </div>

                <div className="luxury-fieldset">
                    <h2>Funding Information</h2>
                    <div className="luxury-group">
                        <label>Amount of Funding Sought</label><br />
                        {['Under $50,000', '$50,000 - $200,000', '$200,000 - $500,000', '$500,000 - $1,000,000', 'Over $1,000,000'].map((amount) => (
                            <div className="luxury-radio" key={amount}>
                                <input type="radio" name="fundingAmount" value={amount} checked={formData.fundingAmount === amount} onChange={handleChange} required />
                                <label>{amount}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Intended Use of Funds</label><br />
                        {['Product Development', 'Marketing and Sales', 'Hiring and Team Building', 'Research and Development', 'Operations'].map((purpose) => (
                            <div className="luxury-checkbox" key={purpose}>
                                <input type="checkbox" name="fundingPurpose" value={purpose} onChange={handleChange} />
                                <label>{purpose}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Other</label>
                        <input placeholder='Other Intended Use of Funds' type="text" name="fundingPurposeOther" value={formData.fundingPurposeOther} onChange={handleChange} />
                    </div>

                    <div className="luxury-group">
                        <label>Current Funding Status</label>
                        <textarea placeholder='Current Funding Status' name="fundingStatus" value={formData.fundingStatus} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Expected Timeline for ROI</label><br />
                        {['Short Term (1-3 years)', 'Medium Term (3-7 years)', 'Long Term (7+ years)'].map((roi) => (
                            <div className="luxury-radio" key={roi}>
                                <input type="radio" name="roiTimeline" value={roi} checked={formData.roiTimeline === roi} onChange={handleChange} required />
                                <label>{roi}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="luxury-fieldset">
                    <h2>Additional Information</h2>
                    <div className="luxury-group">
                        <label>Primary Motivations for Seeking Investment</label>
                        <textarea placeholder='Your Primary Motivations for Seeking Investment' name="motivation" value={formData.motivation} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Biggest Challenges Your Business Currently Faces</label>
                        <textarea placeholder='Biggest Challenges Your Business Currently Faces' name="challenges" value={formData.challenges} onChange={handleChange} required />
                    </div>

                    <div className="luxury-group">
                        <label>Preferred Contact Method</label><br />
                        {['Email', 'Phone', 'LinkedIn'].map((contact) => (
                            <div className="luxury-radio" key={contact}>
                                <input type="radio" name="contactPreference" value={contact} checked={formData.contactPreference === contact} onChange={handleChange} required />
                                <label>{contact}</label>
                            </div>
                        ))}
                    </div>

                    <div className="luxury-group">
                        <label>Any other information you’d like to share with us</label>
                        <textarea placeholder='Additional Information' name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
                    </div>
                </div>

                <div className="luxury-fieldset">
                    <h2>Terms and Conditions</h2>
                    <div className="luxury-group d-inline-flex align-items-center">
                        <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
                        <label>I agree to the terms and conditions of the Harvester</label>
                    </div>
                </div>

                <button type="submit" className="luxury-submit-btn">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Investor;
