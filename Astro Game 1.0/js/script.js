var ship = $("#ship");
var can1 = $("#can1");

$("#inizia").click(function() {
    $("#home").css("display", "none");
})

document.onkeyup = function(e) {
    switch (e.which) {
        case 37:
            if (ship.css("left") > "250px") {
                $("#ship").animate({ left: "-=80px" }, 100)
            }
            break;

        case 39:
            if (ship.css("left") < "891px") {
                $("#ship").animate({ left: "+=80px" }, 100)
            }
            break;

        case 38:
            controllo();
            break;

        default:
            return;
    }
    e.preventDefault();
};

function razzo1() {
    $("#colpo1").animate({ left: $("#can1").css("left"), top: "140px" }, 5);
    $("#colpo1").animate({ opacity: 1 });
    $("#colpo1").animate({ top: "590px" }, {
        complete: function() {
            if ($("#colpo1").css("left") === $("#ship").css("left") && $("#colpo1").css("top") === $("#ship").css("top")) {
                $("#ship").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#ship').css("opacity", 0); }
                setInterval(a, 1000);
                clearInterval(intership);
                clearInterval(inter1);
                clearInterval(inter2);
                clearInterval(inter3);
                clearInterval(inter4);
                clearInterval(inter5);

                function b() { $("#perso").css("display", "block"); }
                setInterval(b, 1000);
            }
        }
    }, 700);
    $("#colpo1").animate({ opacity: 0 });
}

function razzo2() {
    $("#colpo2").animate({ left: $("#can2").css("left"), top: "140px" }, 5);
    $("#colpo2").animate({ opacity: 1 });
    $("#colpo2").animate({ top: "590px" }, {
        complete: function() {
            if ($("#colpo2").css("left") === $("#ship").css("left") && $("#colpo2").css("top") === $("#ship").css("top")) {
                $("#ship").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#ship').css("opacity", 0); }
                setInterval(a, 1000);
                clearInterval(intership);
                clearInterval(inter1);
                clearInterval(inter2);
                clearInterval(inter3);
                clearInterval(inter4);
                clearInterval(inter5);

                function b() { $("#perso").css("display", "block"); }
                setInterval(b, 1000);
            }
        }
    }, 700);
    $("#colpo2").animate({ opacity: 0 });
}

function razzo3() {
    $("#colpo3").animate({ left: $("#can3").css("left"), top: "140px" }, 5);
    $("#colpo3").animate({ opacity: 1 });
    $("#colpo3").animate({ top: "590px" }, {
            complete: function() {
                if ($("#colpo3").css("left") === $("#ship").css("left") && $("#colpo3").css("top") === $("#ship").css("top")) {
                    $("#ship").css("backgroundImage", "url('../img/explosion.svg')");

                    function a() { $('#ship').css("opacity", 0); }
                    setInterval(a, 1000);
                    clearInterval(intership);
                    clearInterval(inter1);
                    clearInterval(inter2);
                    clearInterval(inter3);
                    clearInterval(inter4);
                    clearInterval(inter5);

                    function b() { $("#perso").css("display", "block"); }
                    setInterval(b, 1000);
                }
            }
        },
        700);
    $("#colpo3").animate({ opacity: 0 });
}

function razzo4() {
    $("#colpo4").animate({ left: $("#can4").css("left"), top: "140px" }, 5);
    $("#colpo4").animate({ opacity: 1 });
    $("#colpo4").animate({ top: "590px" }, {
        complete: function() {
            if ($("#colpo4").css("left") === $("#ship").css("left") && $("#colpo4").css("top") === $("#ship").css("top")) {
                $("#ship").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#ship').css("opacity", 0); }
                setInterval(a, 1000);
                clearInterval(intership);
                clearInterval(inter1);
                clearInterval(inter2);
                clearInterval(inter3);
                clearInterval(inter4);
                clearInterval(inter5);

                function b() { $("#perso").css("display", "block"); }
                setInterval(b, 1000);
            }
        }
    }, 700);
    $("#colpo4").animate({ opacity: 0 });
}

function razzo5() {
    $("#colpo5").animate({ left: $("#can5").css("left"), top: "140px" }, 5);
    $("#colpo5").animate({ opacity: 1 });
    $("#colpo5").animate({ top: "590px" }, {
        complete: function() {
            if ($("#colpo5").css("left") === $("#ship").css("left") && $("#colpo5").css("top") === $("#ship").css("top")) {
                $("#ship").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#ship').css("opacity", 0); }
                setInterval(a, 1000);
                clearInterval(intership);
                clearInterval(inter1);
                clearInterval(inter2);
                clearInterval(inter3);
                clearInterval(inter4);
                clearInterval(inter5);

                function b() { $("#perso").css("display", "block"); }
                setInterval(b, 1000);
            }
        }
    }, 700);
    $("#colpo5").animate({ opacity: 0 }, );
}

var intership;
var inter2;

function functorun() {
    $(".cannone").animate({ left: "+=80px" }, 1000).animate({ left: "+=0px" }, 1000).animate({ left: "-=80px" }, 1000).animate({ left: "+=0px" }, 1000);
}

$("#start").click(function() {
    functorun();
    razzo1();
    razzo2();
    razzo3();
    razzo4();
    razzo5();

    intership = setInterval(functorun, 2000);
    inter1 = setInterval(razzo1, 2000);
    inter2 = setInterval(razzo2, 2000);
    inter3 = setInterval(razzo3, 2000);
    inter4 = setInterval(razzo4, 2000);
    inter5 = setInterval(razzo5, 2000);
});

$("#leftbtn").click(function() {
    clearInterval(intership);
    clearInterval(inter1);
    clearInterval(inter2);
    clearInterval(inter3);
    clearInterval(inter4);
    clearInterval(inter5);
});

var distr1 = 0;
var distr2 = 0;
var distr3 = 0;
var distr4 = 0;
var distr5 = 0;

function controllo() {
    $("#colpoship").animate({ left: ship.css("left"), top: "590px" }, 50);
    $("#colpoship").animate({ opacity: 1 }, 50);
    $("#colpoship").animate({ top: "110px" }, {
        complete: function() {
            if ($("#colpoship").css("left") === $("#can1").css("left") && $("#colpoship").css("top") === $("#can1").css("top")) {
                clearInterval(inter1);
                $("#can1").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#can1').css("opacity", 0); }
                setInterval(a, 1000);

                distr1 = 1;
                if (distr1 === 1 && distr2 === 1 && distr3 === 1 && distr4 === 1 && distr5 === 1) {
                    function b() { $("#vinto").css("display", "block"); }
                    setInterval(b, 1000);
                }
            }
            if ($("#colpoship").css("left") === $("#can2").css("left") && $("#colpoship").css("top") === $("#can2").css("top")) {
                clearInterval(inter2);
                $("#can2").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#can2').css("opacity", 0); }
                setInterval(a, 1000);

                distr2 = 1;
                if (distr1 === 1 && distr2 === 1 && distr3 === 1 && distr4 === 1 && distr5 === 1) {
                    function b() { $("#vinto").css("display", "block"); }
                    setInterval(b, 1000);
                }
            }
            if ($("#colpoship").css("left") === $("#can3").css("left") && $("#colpoship").css("top") === $("#can3").css("top")) {
                clearInterval(inter3);
                $("#can3").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#can3').css("opacity", 0); }
                setInterval(a, 1000);

                distr3 = 1;
                if (distr1 === 1 && distr2 === 1 && distr3 === 1 && distr4 === 1 && distr5 === 1) {
                    function b() { $("#vinto").css("display", "block"); }
                    setInterval(b, 1000);
                }
            }
            if ($("#colpoship").css("left") === $("#can4").css("left") && $("#colpoship").css("top") === $("#can4").css("top")) {
                clearInterval(inter4);
                $("#can4").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#can4').css("opacity", 0); }
                setInterval(a, 1000);

                distr4 = 1;
                if (distr1 === 1 && distr2 === 1 && distr3 === 1 && distr4 === 1 && distr5 === 1) {
                    function b() { $("#vinto").css("display", "block"); }
                    setInterval(b, 1000);
                }
            }
            if ($("#colpoship").css("left") === $("#can5").css("left") && $("#colpoship").css("top") === $("#can5").css("top")) {
                clearInterval(inter5);
                $("#can5").css("backgroundImage", "url('../img/explosion.svg')");

                function a() { $('#can5').css("opacity", 0); }
                setInterval(a, 1000);

                distr5 = 1;
                if (distr1 === 1 && distr2 === 1 && distr3 === 1 && distr4 === 1 && distr5 === 1) {
                    function b() { $("#vinto").css("display", "block"); }
                    setInterval(b, 1000);
                }
            }
        }
    });
    $("#colpoship").animate({ opacity: 0 }, 50);
}