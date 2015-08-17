# sticky 메뉴
- 일정 높이만큼 스크롤 할 경우 화면 상단에 메뉴 고정

## css
,,,
header.fixed {
	position: fixed;
	top: 0px;
	left: center;
}
,,,
<header> 태그에 'fixed' 라는 class 이름이 존재할 경우 position 을 fixed로 설정하고, top과 left를 이용하여 위치 설정.


## js
,,,
$(global).scroll(function(){
		if (window.scrollY === scroll_y) {
			$header.addClass('fixed');
		}
		else {
			$header.removeClass('fixed');
		}
});
,,,
원하는 scroll 높이를 변수 scroll_y에 담고, 그 값이 window의 scrollY값과 같아질 경우 header태그에 'fixed' class 추가.
