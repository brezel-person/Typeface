const btn1 = document.getElementById("quiz1_btn");
const btn2 = document.getElementById("quiz2_btn");
const btn3 = document.getElementById("quiz3_btn");
const btn4 = document.getElementById("quiz4_btn");
const scarybtn = document.getElementById("scary_btn");
const homebtn = document.getElementById("home_btn");
let quizNum;


/* Home Page & back to home page functionality */
if(homebtn){
    homebtn.addEventListener("click", function(){
        window.location.href="main.html";
    });
}

if(btn1){
    btn1.addEventListener("click", function(){
        window.location.href= "quiz.html";
    });
    btn2.addEventListener("click", function(){
        window.location.href= "info.html";
    });
    btn3.addEventListener("click", function(){
        window.location.href= "learncrochet.html";
    });
    btn4.addEventListener("click", function(){
        window.location.href= "seasonal.html";
    });
    scarybtn.addEventListener("click", function(){
        window.location.href= "scaryquiz.html";
    });
}


/* "should i crochet" functions & code */
$(document).ready(function(){
    var handsOnHobbyPopUp = new bootstrap.Modal($('#handsOnHobbyPopUp')[0]);

    $('#hands-on-hobby-yes').click(() => handsOnHobbyPopUp.show());
    $('#creative-yes').click(() => handsOnHobbyPopUp.show());
    $('#activity-yes').click(() => handsOnHobbyPopUp.show());
    $('#patient-yes').click(() => handsOnHobbyPopUp.show());
});

$(document).ready(function(){
    var maybePopUp = new bootstrap.Modal($('#maybePopUp')[0]);
    $('#creative-maybe').click(() => maybePopUp.show());
    $('#patient-maybe').click(() => maybePopUp.show());
});

$(document).ready(function(){
    var nopePopUp = new bootstrap.Modal($('#nopePopUp')[0]);

    $('#hands-on-hobby-no').click(() => nopePopUp.show());
    $('#creative-no').click(() => nopePopUp.show());
    $('#activity-no').click(() => nopePopUp.show());
    $('#patient-no').click(() => nopePopUp.show());
});

$(document).ready(function(){
    var crochetQuizPopUp = new bootstrap.Modal($('#crochetQuizPopUp')[0]);
    
    $('#beware-btn').click(() => crochetQuizPopUp.show());
});

/* "what to crochet" quiz functionality */