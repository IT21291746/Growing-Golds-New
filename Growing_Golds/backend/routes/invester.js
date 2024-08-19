const express = require('express');
const router = express.Router();
const Invester = require('../models/Invester'); // Correct model import

// Create a new investor application
router.post('/', async (req, res) => {
    try {
        const newApplication = new Invester(req.body); // Use Invester model correctly
        await newApplication.save();
        res.status(201).json({ message: 'Application submitted successfully', data: newApplication });
    } catch (err) {
        res.status(400).json({ message: 'Error submitting application', error: err.message });
    }
});

// Get all investor applications
router.get('/', async (req, res) => {
    try {
        const applications = await Invester.find(); // Correct the model reference
        res.status(200).json(applications);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching applications', error: err.message });
    }
});

// Get a specific investor application by ID
router.get('/:id', async (req, res) => {
    try {
        const application = await Invester.findById(req.params.id); // Correct the model reference
        if (!application) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json(application);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching application', error: err.message });
    }
});

// Update a specific investor application by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedApplication = await Invester.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Correct model reference
        if (!updatedApplication) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json({ message: 'Application updated successfully', data: updatedApplication });
    } catch (err) {
        res.status(400).json({ message: 'Error updating application', error: err.message });
    }
});

// Delete a specific investor application by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedApplication = await Invester.findByIdAndDelete(req.params.id); // Correct model reference
        if (!deletedApplication) return res.status(404).json({ message: 'Application not found' });
        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting application', error: err.message });
    }
});

module.exports = router;
