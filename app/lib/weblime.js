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

(function() {
	'use strict';

	function Weblime(args) {

		if (!(this instanceof Weblime)) {
			return new Weblime(args);
		}

		this.el = args.el;
		this.files = $(args.el).data('source-file');
		this.path = this.cleanPath(args.path);
		this.init();
	}

	Weblime.prototype.init = function() {

		var that = this;
		this.loadFile(function(response) {
			$(that.el).text(response);
			that.getEditor();
		});

	};

	Weblime.prototype.cleanPath = function(path) {
		return path.replace(/\/$/, '');
	};

	Weblime.prototype.loadFile = function(cb) {

		$.ajax({
			url: [this.path, this.files].join('/'),
			success: function(response) {
				cb(response);
			},
			cache: false
		});

	};

	Weblime.prototype.getEditor = function() {

		var editor = ace.edit(this.el);
			//editor.setTheme("ace/theme/clouds");
			//editor.getSession().setMode("ace/mode/javascript");
			editor.setReadOnly(true);
			editor.setHighlightActiveLine(false);
			editor.setHighlightGutterLine(false);
			editor.setShowInvisibles(false);

			editor.on('focus', function() {
				editor.setHighlightActiveLine(true);
				editor.setHighlightGutterLine(true);
			});

		return editor;
	};

	if (typeof define === 'function' && define.amd) {
		define('weblime', ['ace'], function() {
			return Weblime;
		});
	} else if (window.ace !== undefined){
		window.weblime = Weblime;
	}

}());