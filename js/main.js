// fullpage 제이쿼리 
$(function () {
    var page = $(".fullpage").fullpage({
      // 1. 네비게이션 보이기
      navigation: true,

      // 2. 네비게이션 위치 지정
      navigationPosition: "right",

      // 3. 각 섹션의 배경색상 지정 (6자의 핵사코드 작성가능)
      sectionsColor: ["#007bff","#fff"],
      // sectionsColor: ["#fff", "yellow", "#efefef"],

      scrollingSpeed: 800,
      
      // 내용이 넘칠 경우 그 섹션만 자동으로 스크롤이 생김
      scrollOverflow: true, 
    });
  });
