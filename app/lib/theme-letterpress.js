
define('ace/theme/letterpress', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {


exports.isDark = false;
exports.cssClass = "ace-letterpress";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});