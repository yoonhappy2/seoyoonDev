// ==== fullpage 제이쿼리 =============================
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
      // 사용하려면 scrolloverflow.min.js << 파일 첨부 
      scrollOverflow: true, 
    });
    $(window).on('scroll', function() {
        var scrollHeight = $(this).scrollTop();
        console.log('스크롤 높이:', scrollHeight);
        // 여기에 다른 동작을 추가할 수 있습니다.
    });
  });



  // ==== 스와이퍼 스크립트 =============================
  const web_wrap = new Swiper('#web_wrap',{
    // autoplay:{delay:10000}, 
    // 자동재생
    disableOnInteraction:false,// 버튼 클릭 후 자동재생유지}, 
    loop:true, // 한 방향으로 반복 ( 기본값은 false )
    direction:'horizontal', // 수직방향( 기본값은 horizontal )
    navigation: {
            // 슬라이드 버튼 작동하게 하는 속성:값
            // ( 개별인식가능한 부모명 꼭 작성하기! ) ★★
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',} 
    });


 // ==== 이미지 모달 팝업 =============================
 // 이미지 클릭 시 모달 창 열기
 function openModal(src) {
     var modal = document.getElementById("myModal");
     var modalImg = document.getElementById("modalImg");
     modal.style.display = "block";
     modalImg.src = src;
    }
    
    // 모달 창 닫기
    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
    
    // 모달 창 외의 영역 클릭 시 모달 창 닫기
    window.onclick = function (event) {
        var modal = document.getElementById("myModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };