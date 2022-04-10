// START BUTTON

$("#start").click(function() {
    for (i = 0; i < 22; i++) { //un ciclo for per "togliere" il display none alle carte
        $("#carta" + i).css("display", "block");
    }

    $("#carta0").animate({ top: "210px", left: "50px", opacity: 1 }, 500); //tutte le animazioni della distribuzione carte
    $("#carta1").animate({ top: "450px", left: "160px", opacity: 1 }, 600);
    $("#carta2").animate({ top: "290px", left: "160px", opacity: 1 }, 700);
    $("#carta3").animate({ top: "320px", left: "460px", opacity: 1 }, 800);
    $("#carta4").animate({ top: "320px", left: "360px", opacity: 1 }, 900);
    $("#carta5").animate({ top: "340px", left: "540px", opacity: 1 }, 1000);
    $("#carta6").animate({ top: "360px", left: "640px", opacity: 1 }, 1100);
    $("#carta7").animate({ top: "460px", left: "460px", opacity: 1 }, 1200);
    $("#carta8").animate({ top: "440px", left: "330px", opacity: 1 }, 1300);
    $("#carta9").animate({ top: "370px", left: "220px", opacity: 1 }, 1400);
    $("#carta10").animate({ top: "300px", left: "820px", opacity: 1 }, 1500);
    $("#carta11").animate({ top: "170px", left: "170px", opacity: 1 }, 1600);
    $("#carta12").animate({ top: "220px", left: "920px", opacity: 1 }, 1700);
    $("#carta13").animate({ top: "340px", left: "920px", opacity: 1 }, 1800);
    $("#carta14").animate({ top: "500px", left: "920px", opacity: 1 }, 1900);
    $("#carta15").animate({ top: "490px", left: "820px", opacity: 1 }, 2000);
    $("#carta16").animate({ top: "480px", left: "50px", opacity: 1 }, 2100);
    $("#carta17").animate({ top: "330px", left: "60px", opacity: 1 }, 2200);
    $("#carta18").animate({ top: "300px", left: "700px", opacity: 1 }, 2300);
    $("#carta19").animate({ top: "102px", left: "70px", opacity: 1 }, 2400);
    $("#carta20").animate({ top: "115px", left: "790px", opacity: 1 }, 2500);
    $("#carta21").animate({ top: "115px", left: "910px", opacity: 1 }, 2600);

    $(".mosse").text("Numero di mosse: " + contatore); //start delle statistiche di gioco
    $(".punti").text("Punteggio: " + punti);
    $(".combo").text("Indovina sempre per la combo!");

});

// STAMPA DEL RECORD

if (firstMatch !== 0) { //se è la prima partita
    rec = localStorage.getItem('record');
    if (rec === null) {
        $("#record").text("RECORD: 0");
    } else {
        $("#record").text("RECORD: " + rec);
    }
}

$("#azzeraRecord").click(function() {
    localStorage.clear();
    $("#record").text("RECORD: 0");
});

// METODO MESCOLA

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; // 21 perchè le foto sono da 0 a 21

function mescola() { //funzione che mescola i numeri del mio array

    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];

        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}
mescola();

// VARIABILI

var primaCarta = -1;
var posizCartaUno = -1;
var posizCartaDue = -1;
var secondaCarta = -1;
var anim = 0; // controlla la fine dell'anim delle deu carte
var contatore = 0;
var punti = 0;
var combo = 1;
var call1 = 0;
var call2 = 0;
var vittoriaFinale = 0; //controlla la fine del gioco

var LocalScore; // variabili dei records
var firstMatch = 0;
var showScore;
var rec;

// FUNZIONE SCOPRI CARTA

function scopri(i) {
    if (anim === 0) { //cosicchè aspetta che l'animazione precedente sia conclusa

        if (call2 === 1) { //se è la seconda carta da girare (variabile call)

            $("#carta" + i).addClass("rot2");
            $("#carta" + i).css("backgroundImage", "url('./img/" + array[i] + ".svg'");

            posizCartaDue = i; //posizione carta
            secondaCarta = array[i] //figura della carta

            call1 = 0;
            call2 = 0;
            contatore++; // il contatore per le mosse effettuate

            anim = 1;

            setTimeout(function() {
                $("#carta" + i).removeClass("rot2");
            }, 1200);

            if (primaCarta === (secondaCarta + 11) || primaCarta === (secondaCarta - 11)) { //se le due carte sono uguali (0 e 11 sono uguali)

                setTimeout(function() {
                    $("#carta" + posizCartaUno).animate({ opacity: 0 }, 500);
                    $("#carta" + posizCartaUno).css("display", "none");
                    $("#carta" + posizCartaDue).animate({ opacity: 0 }, 500);
                    $("#carta" + posizCartaDue).css("display", "none");
                }, 1500);

                if (combo > 1) {
                    $(".combo").text("COMBOOO! X" + combo);
                } else if (combo === 1) {
                    $(".combo").text("Indovina sempre per la combo!");
                }

                punti += 30 * combo; //se indovini di fila ti viene assegnato una combo
                combo++;
                anim = 0;

                vittoriaFinale++;

                setTimeout(function() {
                    if (vittoriaFinale === 11) {
                        $("#final-score").css("display", "block");
                        let score = Math.ceil((punti / contatore) * 100);
                        $("#fine").text("Il tuo punteggio totale calcolando anche le mosse effettuate è di: " + score);
                        if (firstMatch !== 0) {
                            showScore = localStorage.getItem('record');
                            rec = showScore;
                        }
                        firstMatch++; //per avvisare che non è più la prima partita

                        if (score >= rec) { //aggiorna record
                            LocalScore = score;
                            localStorage.setItem('record', LocalScore);
                        }
                    }
                }, 2000);
            } else {

                $(".combo").text("Indovina sempre per la combo!");
                punti -= 10;
                combo = 1; // rimette la combo ad 1
                if (punti <= 0) { punti = 0 }; //cosi non esce un punteggio negativo

                setTimeout(function() {
                    $("#carta" + posizCartaUno).css("backgroundImage", "url('./img/card.svg'");
                    $("#carta" + posizCartaDue).css("backgroundImage", "url('./img/card.svg'");
                    anim = 0;
                }, 2200);

            }

        } else if (call1 === 0) { //se è la prima carta da girare (variabile call)

            $("#carta" + i).addClass("rot1");
            $("#carta" + i).css("backgroundImage", "url('./img/" + array[i] + ".svg'");

            posizCartaUno = i; //posizione carta
            primaCarta = array[i] //figura della carta

            call2 = 1;
            contatore++; // il contatore per le mosse effettuate

            setTimeout(function() {
                $("#carta" + i).removeClass("rot1");
            }, 1200);

        }

        $(".mosse").text("Numero di mosse: " + contatore); //inserimento num di mosse
        $(".punti").text("Punteggio: " + punti); //inserimento punti

    }

}