const firebaseConfig = {
    apiKey: "AIzaSyAkxep9jM-FpeZmEzaHlJuhiiQNEHb_HOk",
    authDomain: "semiproject6.firebaseapp.com",
    databaseURL: "https://semiproject6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "semiproject6",
    storageBucket: "semiproject6.appspot.com",
    messagingSenderId: "300720308935",
    appId: "1:300720308935:web:09cbe5d14559220c0cb4e2"
};
let CDate = new Date();
let today = new Date();
let selectCk = 0;

let buildcalendar = function () { // 달력 만드는 함수
    let htmlDates = '';
    let prevLast = new Date(CDate.getFullYear(), CDate.getMonth(), 0); //지난 달의 마지막 날 
    let thisFirst = new Date(CDate.getFullYear(), CDate.getMonth(), 1); //이번 달의 첫쨰 날
    let thisLast = new Date(CDate.getFullYear(), CDate.getMonth() + 1, 0); //이번 달의 마지막 날
    document.querySelector(".year").innerHTML = CDate.getFullYear() + "년"; // year에 년도 출력
    document.querySelector(".month").innerHTML = (CDate.getMonth() + 1) + "월"; //month에 월 출력

    const dates = [];
    if (thisFirst.getDay() != 0) {
        for (let i = 0; i < thisFirst.getDay(); i++) {
            dates.unshift(prevLast.getDate() - i); // 지난 달 날짜 채우기
        }
    }
    for (let i = 1; i <= thisLast.getDate(); i++) {
        dates.push(i); // 이번 달 날짜 채우기 
    }
    for (let i = 1; i <= 13 - thisLast.getDay(); i++) {
        dates.push(i); // 다음 달 날짜 채우기 (나머지 다 채운 다음 출력할 때 42개만 출력함)
    }

    for (let i = 0; i < 42; i++) { // 달력 채우는 포문...인듯? 아마도?
        if (i < thisFirst.getDay()) {
            htmlDates += '<div class="date last">' + dates[i] + '</div>';
        } else if (today.getDate() == dates[i] && today.getMonth() == CDate.getMonth() && today
            .getFullYear() == CDate.getFullYear()) {
            htmlDates += '<div id="date_' + dates[i] + '" class="date today" onclick="fn_selectDate(' +
                dates[i] + ');">' + dates[i] + '</div>';
        } else if (i >= thisFirst.getDay() + thisLast.getDate()) {
            htmlDates += '<div class="date next">' + dates[i] + '</div>';
        } else {
            htmlDates += '<div id="date_' + dates[i] + '" class="date" onclick="fn_selectDate(' + dates[i] +
                ');">' + dates[i] + '</div>';
        }
        // console.log(htmlDates);
    }
    document.querySelector(".dates").innerHTML = htmlDates; // div 안에 날짜 넣기
}

function prevCal() {
    CDate.setMonth(CDate.getMonth() - 1);
    buildcalendar();
}

function nextCal() {
    CDate.setMonth(CDate.getMonth() + 1);
    buildcalendar();
}

function fn_selectDate(date) { // 특정 날짜를 클릭하면...
    // console.log("함수 바로 다음 " + date); // 이 데이트는 딱 일만 가져옴

    let year = CDate.getFullYear();
    let month = CDate.getMonth() + 1;
    let date_txt = "";

    if (CDate.getMonth() + 1 < 10) {
        // console.log("if month 작동"); // 이건 작동 안 함...
        month = "0" + (CDate.getMonth() + 1);
    }
    if (date < 10) {
        // console.log("if date 작동");
        date_txt = "0" + date;
    } else {
        date_txt = date;
    }
    // console.log("date " + date);
    // console.log("date_txt" + date_txt);

    console.log(year + "-" + month + "-" + date_txt);

    if (selectCk == 0) {
        $(".date").css("background-color", "");
        $(".date").css("color", "");
        $("#date_" + date).css("background-color", "red");
        $("#date_" + date).css("color", "white");

    }

    // if (selectCk == 0) {
    // console.log(selectCk);

    $("#period_1").text(year + "-" + month + "-" + date_txt);
    // $("#period_1").val(year + "-" + month + "-" + date_txt);
    // $("#period_2").val("");
    // selectCk = date;
    // } else {
    // console.log(selectCk);
    // $("#date_" + date).css("background-color", "red");
    // $("#date_" + date).css("color", "white");
    // for (let i = selectCk + 1; i < date; i++) {
    //   $("#date_" + i).css("background-color", "#FFDDDD"); // 시작부터 끝 사이 장미색으로 채우는 거
    // }

    // $("#period_2").val(year + "-" + month + "-" + date_txt);
    // selectCk = 0;
    // }

} // end of fn_selectDate

buildcalendar();


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


document.getElementById('dates').addEventListener('click', () => {
    const refresh = ``;
    $("#inthis").html(refresh);
    // odrby.orderBy("class_time").limit(1);
    db.collection("class").orderBy("class_time").get().then((snapshot) => {
        snapshot.forEach((item) => {
            // console.log((year + "-" + month + "-" + date));
            // console.log(($('#period_1').val()));
            // if (item.data().class_date === "2022-07-27") {
            if (item.data().class_date === ($('#period_1').text())) {
                // console.log("item data class_date " + item.data().class_date);
                // console.log("period_1 val " + $('#period_1').text());
                // <div class="${item.id}" onclick="window.open('./class_upd.html?id=${item.id}')" style="border solid 1px black;">
                const template = `
      
      <div class="${item.id}" onclick="window.open('./class_upd.html?id=${item.id}')" style="border solid 1px black;">
        <span>${item.data().class_name}</span>
        <span>${item.data().class_time}</span>
        <span>${item.data().class_center}</span>
        <span>${item.data().class_teacher}</span>
        <span>${item.data().class_date}</span>
      </div>
    `;
                $("#inthis").append(template);
                // $("#class_name").text(item.data().class_name);
                // $('#class_time').text(item.data().class_time);
                // $('#class_center').text(item.data().class_center);
                // $('#class_teacher').text(item.data().class_teacher);
            }

        })
    })

})