(function() {
'use strict';

	console.log('app init');

	requirejs.config({
		baseUrl: 'lib',
		paths: {
			app: '../app'
		}
	});

	require(['jquery','weblime'],function($,Weblime) {
		console.log('loaded');
		$('.weblime').each(function() {
			new Weblime({
				el: this,
				path: 'source/',
				callback: function(weblime) {
					console.log(weblime);
				}
			});
		});
	});

}());