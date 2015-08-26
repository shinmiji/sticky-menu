/*! main.js © MJ, 2015 */
;(function(global, $, undefined){
	'use strict';

	/**
	 *------------------------------------------------------------------------------------------
	 * 사용자가 .content2 영역에 도달할 경우 메뉴 영역이 화면 상단에 고정되게 하기.
	 *------------------------------------------------------------------------------------------
	 */

	// index.html 파일의 header 요소 노드를 찾아와 $header 태그에 캐시.
	// $('header')의 결과는 자바스크립트 인스턴스 객체인데 그것을 암묵적으로 명시하기 위하여 변수 이름 앞에 '$'문자를 붙여줌.
	var $header = $('header');
	// class 이름이 'content2'인 요소노드의 content, padding, border 의 높이의 값을 알기 위하여 outerHeight() 인스턴스 함수 사용.
	var content1_height = $('.content2').outerHeight();
	// class 이름이 'gnb'인 요소노드의 content, padding, border 의 높이의 값을 알기 위하여 outerHeight() 인스턴스 함수 사용.
	var gnb_height = $('.gnb').outerHeight();
	// class 이름이 'wrap' 인 요소노드의 margin-top 값을 가져와 'px'단위를 제거하기 위해 parsInt() 사용.
	var wrap_marginTop = parseInt($('.wrap').css('margin-top'));
	// 원하는 스크롤 높이를 동적으로 만들어주기 위하여 가져온 값들을 모두 더해줌.
	var scroll_y = content1_height+gnb_height+wrap_marginTop;
	// console.log(scroll_y);
	
	// window에서 스크롤이 감지될 경우 함수 실행
	$(global).scroll(function(){
		// window의 스크롤 된 높이가 scroll_y (상단에서 정의)값과 같을 경우
		if (window.scrollY > scroll_y) {
			// header 부분에 'fixed' 라는 class 이름을 부여하여 화면 상단에 메뉴가 고정되어 따라다니도록 구현.
			$header.addClass('fixed');
		}
		// window의 스크롤 된 높이가 scroll_y (상단에서 정의)값과 같을 경우
		else {
			// header 부분에 fixed' 라는 class 이름을 삭제하여 화면 상단에 메뉴가 고정되지 않도록 구현.
			$header.removeClass('fixed');
		}
	});
})(window, window.jQuery);