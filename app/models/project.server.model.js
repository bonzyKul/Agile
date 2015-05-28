'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Project Schema
 */
var ProjectSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Project name',
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
    release: {
        type: String
    },
    old_release: {
        type: String
    },
    phase: {
        type: String
    },
    lastPhase: {
        type: String
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String
    },
    Comments: {
        type:String
    },
    estimates: {
        type: String
    },
    delete: {
        type: Boolean
    },
    completion: {
        type: String
    },
    projectType: {
        type: String
    },
    lastUpdatedBy: {
        type: String
    }
});

mongoose.model('Project', ProjectSchema);
