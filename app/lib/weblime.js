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
		this.theme = args.theme;
		this.files = $(args.el).data('source-file');
		this.path = this.cleanPath(args.path);
		this.init();
	}

	Weblime.prototype.init = function() {

		var that = this;
		this.loadFile(function(response) {
			$(that.el).text(response);
			window.currentEditor = that.getEditor();
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

	Weblime.prototype.activeEditor = function(editor) {
		if(this.theme){
			editor.setTheme("ace/theme/" + this.theme);
		}
		editor.getSession().setMode("ace/mode/javascript");
		editor.setHighlightActiveLine(true);
		editor.setHighlightGutterLine(true);
		editor.setShowInvisibles(false);
	};

	Weblime.prototype.deactiveEditor = function(editor) {
		editor.setTheme("ace/theme/default");
		editor.getSession().setMode("ace/mode/text");
		editor.setHighlightActiveLine(false);
		editor.setHighlightGutterLine(false);
		editor.setShowInvisibles(false);
	};

	Weblime.prototype.getEditor = function() {

		var weblime = this;
		var editor = ace.edit(this.el);

			editor.setReadOnly(true);
			editor.setFadeFoldWidgets(true);
			editor.setAutoScrollEditorIntoView(true);

			editor.setOptions({
				maxLines: 25
			});

			weblime.deactiveEditor(editor);

			editor.on('focus', function() {
				weblime.activeEditor(editor);
			});

			editor.on('blur', function() {
				weblime.deactiveEditor(editor);
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