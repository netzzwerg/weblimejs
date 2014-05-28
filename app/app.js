(function() {
  'use strict';

  requirejs.config({
    baseUrl: 'lib',
    paths: {
      app: '../app'
    }
  });

  require(['jquery', 'weblime'], function($, Weblime) {

    new Weblime({
      el: $('.weblime')[0],
      theme: 'textmate', // default theme is textmate
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