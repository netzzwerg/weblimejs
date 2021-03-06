
define('ace/theme/default', ['require', 'exports', 'module' , 'ace/lib/dom'], function(require, exports, module) {


exports.isDark = false;
exports.cssClass = "ace-default";

exports.cssText = ".ace-default .ace_gutter {\
color: #ddd;\
}\
.ace-default .ace_print-margin {\
}\
.ace-default .ace_fold {\
background-color: #6B72E6;\
}\
.ace-default {\
background-color: #FFFFFF;\
color: black;\
}\
.ace-default .ace_cursor {\
color: black;\
}\
.ace-default .ace_invisible {\
color: rgb(191, 191, 191);\
}\
.ace-default .ace_storage,\
.ace-default .ace_keyword {\
color: blue;\
}\
.ace-default .ace_constant {\
color: rgb(197, 6, 11);\
}\
.ace-default .ace_constant.ace_buildin {\
color: rgb(88, 72, 246);\
}\
.ace-default .ace_constant.ace_language {\
color: rgb(88, 92, 246);\
}\
.ace-default .ace_constant.ace_library {\
color: rgb(6, 150, 14);\
}\
.ace-default .ace_invalid {\
background-color: rgba(255, 0, 0, 0.1);\
color: red;\
}\
.ace-default .ace_support.ace_function {\
color: rgb(60, 76, 114);\
}\
.ace-default .ace_support.ace_constant {\
color: rgb(6, 150, 14);\
}\
.ace-default .ace_support.ace_type,\
.ace-default .ace_support.ace_class {\
color: rgb(109, 121, 222);\
}\
.ace-default .ace_keyword.ace_operator {\
color: rgb(104, 118, 135);\
}\
.ace-default .ace_string {\
color: rgb(3, 106, 7);\
}\
.ace-default .ace_comment {\
color: rgb(76, 136, 107);\
}\
.ace-default .ace_comment.ace_doc {\
color: rgb(0, 102, 255);\
}\
.ace-default .ace_comment.ace_doc.ace_tag {\
color: rgb(128, 159, 191);\
}\
.ace-default .ace_constant.ace_numeric {\
color: rgb(0, 0, 205);\
}\
.ace-default .ace_variable {\
color: rgb(49, 132, 149);\
}\
.ace-default .ace_xml-pe {\
color: rgb(104, 104, 91);\
}\
.ace-default .ace_entity.ace_name.ace_function {\
color: #0000A2;\
}\
.ace-default .ace_heading {\
color: rgb(12, 7, 255);\
}\
.ace-default .ace_list {\
color:rgb(185, 6, 144);\
}\
.ace-default .ace_meta.ace_tag {\
color:rgb(0, 22, 142);\
}\
.ace-default .ace_string.ace_regex {\
color: rgb(255, 0, 0)\
}\
.ace-default .ace_marker-layer .ace_selection {\
background: rgb(181, 213, 255);\
}\
.ace-default.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px white;\
border-radius: 2px;\
}\
.ace-default .ace_marker-layer .ace_step {\
background: rgb(252, 255, 0);\
}\
.ace-default .ace_marker-layer .ace_stack {\
background: rgb(164, 229, 101);\
}\
.ace-default .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgb(192, 192, 192);\
}\
.ace-default .ace_marker-layer .ace_active-line {\
background: rgba(0, 0, 0, 0.07);\
}\
.ace-default .ace_gutter-active-line {\
background-color : #dcdcdc;\
}\
.ace-default .ace_marker-layer .ace_selected-word {\
background: rgb(250, 250, 255);\
border: 1px solid rgb(200, 200, 250);\
}\
.ace-default .ace_indent-guide {\
background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==\") right repeat-y;\
}\
";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});