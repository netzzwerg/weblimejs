(function() {
  'use strict';

  requirejs.config({
    baseUrl: 'lib',
    paths: {
      'jquery': '../bower_components/jquery/jquery.min',
      'ace': '../bower_components/ace/lib/ace',
      'ace/theme/default': 'theme-default',
      'ace/theme/letterpress': 'theme-letterpress',
    }
  });

  require(['jquery', 'weblime'], function($, Weblime) {

    new Weblime({
      el: $('.weblime')[0],
      theme: 'textmate',
      path: 'source/',
      callback: function(weblime) {
        console.log(weblime);
      }
    });

    new Weblime({
      el: $('.weblime')[1],
      theme: 'letterpress',
      path: 'source/',
      callback: function(weblime) {
        console.log(weblime);
      }
    });

    new Weblime({
      el: $('.weblime')[2],
      theme: 'monokai',
      path: 'source/',
      callback: function(weblime) {
        console.log(weblime);
      }
    });

  });

}());