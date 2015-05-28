'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Task Schema
 */
var TaskSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Task name',
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
    lastUpdatedBy: {
        type: String
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    resource: {
        type: Schema.ObjectId,
        ref: 'Resource'
    },
    userstory: {
        type: Schema.ObjectId,
        ref: 'Card'
    }
});

mongoose.model('Task', TaskSchema);
