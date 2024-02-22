window.onload = () => {
    const parent = document.querySelector('.parent');
    const child = document.querySelector('.child');
  
    // 스크롤 이벤트를 감지하는 이벤트 리스너를 만들어줍니다.
    window.addEventListener('scroll', function () {
      console.log('스크롤 이벤트 감지!!');
  
      // 뷰포트 시작점과의 거리
      const distanceFromHtml = child.getBoundingClientRect().top + window.pageYOffset;
  
      // HTML 시작점으로부터의 거리
      const distanceFromViewport = child.getBoundingClientRect().top;
  
      // 부모 요소와의 거리
      const distanceBetweenParentAndChild =
        child.getBoundingClientRect().top - parent.getBoundingClientRect().top;
  
      console.log('뷰포트 시작점으로부터의 거리', distanceFromViewport);
      console.log('HTML 시작점으로부터의 거리', distanceFromHtml);
      console.log('부모 요소와의 거리', distanceBetweenParentAndChild);
    });
  };
  