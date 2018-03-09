'use strict';

var path = require('path'),
	MergeTrees = require('broccoli-merge-trees'),
	Funnel = require('broccoli-funnel'),
	UnwatchedDir = require('broccoli-source').UnwatchedDir;

module.exports = {
	name: 'ember-validate',

	isDevelopingAddon: function () {
		return true;
	},

	included: function (app) {
		this._super.included(app);

		app.import('vendor/validate.js');
		app.import('vendor/shims/validate.js');
	},

	treeForVendor: function (tree) {
		var dir = new UnwatchedDir(path.dirname(require.resolve('validate.js/validate.js'))),
			validatejsTree = new Funnel(dir, {
				files: ['validate.js'],
			});

		return new MergeTrees([tree, validatejsTree]);
	}
};
