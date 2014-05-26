;(function(global, $, undefined) {
'use strict';

	console.log('app init');

	$('.weblime').each(function() {
		new Weblime({
			el: this,
			path: 'source/',
			callback: function(weblime) {
				console.log(weblime);
			}
		});
	});

}(this, $));