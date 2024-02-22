// API KEY
const API_KEY = "74667a6642796f6f34376a56547176";

fetch(
    "http://openapi.seoul.go.kr:8088/74667a6642796f6f34376a56547176/json/bikeList"
)
.then((response)=> response.json())
.then((data)=> {
    console.log(data);
    let rows = data["rentBikeStatus"]["row"];

    rows.forEach((row) => {
        let stationName = row["stationName"];
        console.log(stationName);

        let stationLatitude = row["stationLatitude"];
        console.log(stationLatitude);

        let stationLongitude = row["stationLongitude"];
        console.log(stationLongitude);
    });


//     rows.forEach((row) => {
//         let stationName = row["stationName"];
//         console.log(stationName);
//     });

//     rows.forEach((row) => {
//         let stationLatitude = row["stationLatitude"];
//         console.log(stationLatitude);
//     });

//     rows.forEach((row) => {
//         let stationLongitude = row["stationLongitude"];
//         console.log(stationLongitude);
//     });
})
.catch((error)=> console.log(error));

//지도 표시 영역
let mapContainer = document.getElementById("map");

//지도 옵션
let mapOption = {
    // 지도 중심 좌표
    center : new kakao.maps.LatLng(37.48094187609067, 126.95209610126223),

    //지도 확대 레벨
    level:2
};

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
let markerPosition  = new kakao.maps.LatLng(37.48094187609067, 126.95209610126223); 

// 마커를 생성합니다
let marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

let iwContent = '<div style="padding:5px;">gym here! <br><a href="https://map.kakao.com/link/map/gym!,37.48094187609067, 126.95209610126223" style="color:#0D6EFD" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/gym!,37.48094187609067, 126.95209610126223" style="color:#0D6EFD" target="_blank" >길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.48094187609067, 126.95209610126223); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
let infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 