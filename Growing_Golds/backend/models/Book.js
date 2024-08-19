const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    ISBN: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    genres: [{
        type: String,
        required: true
    }],
    price: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    publicationDate: {
        type: Date,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    }

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
