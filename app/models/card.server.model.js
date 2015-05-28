'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Card Schema
 */
var CardSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please enter User Story Title',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    cardType: {
        type: String,
        require: 'Please select User Story Type',
        default: ''
    },
    description: {
        type: String,
        required: 'Please enter user Story description',
        default: ''
    },
    color: {
        type: String,
        default: ''
    },
    column: {
        type: String
    },
    comments: {
        type: String
    },
    estimate: {
        type: String
    },
    delete: {
        type: Boolean
    },
    state: {
        type: String
    },
    documentPath: {
        type: String
    },
    lastUpdatedBy: {
        type: String
    }
});

mongoose.model('Card', CardSchema);
