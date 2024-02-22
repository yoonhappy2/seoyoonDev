// let toggle1 = document.getElementsByClassName("togleSection");
// let btn1

// function init() {
//     btn1 = document.getElementsByClassName("tn-dark");
//     // btn1.addEventListener("onclick",onclick);
//     btn1.addEventListener("mouseover", over); 
//     btn1.addEventListener("mouseout", out);
// }
// function over() {
//     btn1.style.backgroundColor="orange";
// }


// function onclick() {
//     toggle1.style.display="none";
// }

// function getShow(){
// 	document.getElementsByClassName("togleSection").style.display = "";
	
// }

// function getHide(){
// 	document.getElementsByClassName("togleSection").style.display = "none";
	
// }

const search = document.querySelector("#search");
const togleSection = document.querySelector(".togleSection");
const calendar = document.querySelector(".calendar");

search.addEventListener("click", () => {
    togleSection.classList.toggle("toggle");
    calendar.classList.toggle("toggle");
});
