/*!
 * weblime.js
 *
 * Copyright 2014, Béla Varga
 * Released under the MIT License
 * http://choosealicense.com/licenses/mit/
 *
 * Github:  http://github.com/netzzwerg/weblime.js/
 * Version: 0.1.0
 */

var Weblime = (function(global, undefined) {
	'use strict';

	function Weblime(args) {
		// enforces new
		if (!(this instanceof Weblime)) {
			return new Weblime(args);
		}
		// constructor body

		this.el = args.el;
		this.files = $(args.el).data('source-file');
		this.path = this.cleanPath(args.path);
		this.init();
	}

	Weblime.prototype.init = function() {
		console.log('weblime init');
		console.log(this);
		console.log(ace);
		this.loadFile();
		var editor = this.getEditor();
		console.log(editor);
	};

	Weblime.prototype.cleanPath = function(path) {
		return path.replace(/\/$/, '');
	};

	Weblime.prototype.loadFile = function() {
		var file = this.path + '/' + this.files;
		return file;
	};

	Weblime.prototype.getEditor = function() {

		var editor = ace.edit(this.el);
			editor.setTheme("ace/theme/clouds");
			editor.getSession().setMode("ace/mode/javascript");
			editor.setReadOnly(true);

		return editor;
	};

	return Weblime;

}(this));