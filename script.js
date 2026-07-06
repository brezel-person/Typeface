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



/* ********** "what to crochet" quiz functionality ********** */

/* Answers + results */
let answers = {
    level:"",
    category:""
};

const results = {
    beginner:{
        cute:{
            title:"Cat-Ears Beanie",
            desc:"Crochet an adorable cat-ears beanie! It's a simple yet stylish beginner pattern.",
        },
        spooky:{
            title:"Spiderweb Coasters",
            desc:"Crochet a very spooky spiderweb coaster to put under your drinks!",
        },
        both:{
            title:"Themed Bookmark",
            desc:"Crochet a spooky yet cute bookmark! You can make it candy corn, ghost, or zombie themed!",
        }
    },
    intermediate:{
        cute:{
            title:"Avocado Amigurumi",
            desc:"Crochet an adorable avocado plushie or pillow!"
        },
        spooky:{
            title:"Zombie Amigurumi",
            desc:"Crochet a very spooky zombie!",
        },
        both:{
            title:"Giant Blanket!",
            desc:"Crochet a spooky yet cute blanket. Make it by stitching together granny-squares themed around flowers, ghosts, and spiders!",
        }
    },
    advanced:{
        cute:{
            title:"(Realistic) Potted Plant",
            desc:"Crochet an adorable plant companion for your room! Sooo cutee!!",
        },
        spooky:{
            title:"Giant Spider Amigurumi",
            desc:"Crochet a very spooky spider! Waah",
        },
        both:{
            title:"(Realistic) Black Cat",
            desc:"Crochet a spooky yet cutesy black cat!",
        }
    }
};


/* Button functionality */

$("#beginnerBtn").click(function (){
    answers.level="beginner";

    $("#question1").hide();
    $("#question2").show();
});

$("#intermBtn").click(function (){
    answers.level="intermediate";

    $("#question1").hide();
    $("#question2").show();
});

$("#advBtn").click(function (){
    answers.level="advanced";

    $("#question1").hide();
    $("#question2").show();
});

$("#cuteBtn").click(function (){
    answers.category="cute";

    $("#question2").hide();
    showResult();
});

$("#spookyBtn").click(function (){
    answers.category="spooky";

    $("#question2").hide();
    showResult();
});

$("#bothBtn").click(function (){
    answers.category="both";

    $("#question2").hide();
    showResult();
});

function showResult(){
    let project = results[answers.level][answers.category];

    $("#projectName").text(project.title);
    $("#projectDesc").text(project.desc);

    $("#projResults").show();
}