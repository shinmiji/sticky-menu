/*! main.js © MJ, 2015 */
;(function(global, $, undefined){
	'use strict';
	var $header = $('header');
	var content1_height = $('.content2').outerHeight();
	var gnb_height = $('.gnb').outerHeight();
	var wrap_marginTop = parseInt($('.wrap').css('margin-top'))
	var scroll_y = content1_height+gnb_height+wrap_marginTop;
	console.log(scroll_y);
	
	$(global).scroll(function(){
		if (window.scrollY === scroll_y) {
			$header.addClass('fixed');
		}
		else {
			$header.removeClass('fixed');
		}
	});
})(window, window.jQuery);