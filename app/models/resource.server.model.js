'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Resource Schema
 */
var ResourceSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Resource name',
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
    resourceType: {
        type: String
    },
    project: {
        type: Schema.ObjectId,
        ref: 'Project'
    },
    lastUpdatedBy: {
        type: String
    },
    lastUpdatedDate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Resource', ResourceSchema);
