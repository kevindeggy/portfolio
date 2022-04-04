var start = document.querySelector('.starter button');
start.addEventListener('click', inizia);
var punteggio = 0;

var array = [];

var blocco = document.querySelectorAll('.block');
document.querySelector('#btn-reset').classList.add('scompari');
document.querySelector('.punti').classList.add('scompari');

function inizia() {

    array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    function mescola() {

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

    blocco[0].classList.add('carta');

    for (i = 0; i < 24; i++) {
        let element = blocco[i];
        element.classList.add('foto' + array[i]);
    }
    document.querySelector('.starter button').disabled = true;

    document.querySelector('#btn-reset').classList.remove('scompari');
    document.querySelector('.punti').classList.remove('scompari');
    document.querySelector('#btn-reset').classList.add('compari');
    document.querySelector('.punti').classList.add('compari');

    document.querySelector('.welcome').classList.add('scompari');

    tempo();
}

var control = -1;
var aperto = -1;
var first = -1;
var call = 0;

var p = document.createElement('p');
var y = document.createElement('p');
var z = document.createElement('p');

function apri(j) {
    if (blocco[j].childNodes.length == 0 && call == 0) {
        if (control === -1) {
            document.getElementById('carta' + j).classList.add('animazione');
            setTimeout(function() {
                document.getElementById('carta' + j).classList.add('foto-open' + array[j]);
            }, 450);
            document.getElementById('carta' + j).classList.remove('animazione-back');
            control = 0;
            aperto = array[j];
            first = j;
        } else if (control === 0) {
            document.getElementById('carta' + j).classList.add('animazione');
            setTimeout(function() {
                document.getElementById('carta' + j).classList.add('foto-open' + array[j]);
            }, 450);
            document.getElementById('carta' + j).classList.remove('animazione-back');
            control = -1;
            call = 1;
            if (array[j] == (aperto + 12) || array[j] == (aperto - 12)) {
                setTimeout(function() {
                    document.getElementById('carta' + j).classList.add('anim-esatto');
                    document.getElementById('carta' + first).classList.add('anim-esatto');
                }, 800);

                p = document.createElement('p');
                y = document.createElement('p');
                z = document.createElement('p');
                document.getElementById('carta' + j).appendChild(y);
                document.getElementById('carta' + first).appendChild(p);
                document.getElementById('carta' + first).appendChild(z);

                document.getElementById('carta' + j).classList.remove('anim-esatto');
                document.getElementById('carta' + first).classList.remove('anim-esatto');
                call = 0;

                punteggio += 50;
            } else {
                setTimeout(function() {
                    document.getElementById('carta' + j).classList.add('anim-errato');
                    document.getElementById('carta' + first).classList.add('anim-errato');
                }, 800);
                setTimeout(function() {
                    document.getElementById('carta' + j).classList.add('animazione-back');
                    document.getElementById('carta' + j).classList.remove('animazione');
                    document.getElementById('carta' + j).classList.remove('foto-open' + array[j]);
                    document.getElementById('carta' + first).classList.remove('foto-open' + aperto);
                    document.getElementById('carta' + first).classList.add('animazione-back');
                    document.getElementById('carta' + first).classList.remove('animazione');

                    document.getElementById('carta' + j).classList.remove('anim-errato');
                    document.getElementById('carta' + first).classList.remove('anim-errato');
                    call = 0;

                    punteggio -= 10;
                    if (punteggio < 0) { punteggio = 0 };
                }, 1800);
            }
        }
    }

    if (blocco[0].childNodes.length != 0 && blocco[1].childNodes.length != 0 && blocco[2].childNodes.length != 0 && blocco[3].childNodes.length != 0 && blocco[4].childNodes.length != 0 && blocco[5].childNodes.length != 0 && blocco[6].childNodes.length != 0 && blocco[7].childNodes.length != 0 && blocco[8].childNodes.length != 0 && blocco[9].childNodes.length != 0 && blocco[10].childNodes.length != 0 && blocco[11].childNodes.length != 0 && blocco[12].childNodes.length != 0 && blocco[13].childNodes.length != 0 && blocco[14].childNodes.length != 0 && blocco[15].childNodes.length != 0 && blocco[16].childNodes.length != 0 && blocco[17].childNodes.length != 0 && blocco[18].childNodes.length != 0 && blocco[19].childNodes.length != 0 && blocco[20].childNodes.length != 0 && blocco[21].childNodes.length != 0 && blocco[22].childNodes.length != 0 && blocco[23].childNodes.length != 0) {
        setTimeout(function() {
            modale();
        }, 1000);
        document.querySelector('#btn-reset').disabled = false;

        for (i = 0; i < 24; i++) {
            document.getElementById('carta' + i).classList.add('anim-vittoria');
        }
    }
}

var minuti = 0;
var secondi = 0;
var ore = 0;
var x = 0;
var m = 0;

function tempo() {
    if (x == 0 & m == 0) {
        if (secondi == 60) {
            secondi = 0;
            minuti++;
            if (minuti == 60) {
                minuti = 0;
                ore++;
            }
        }

        secondi++;
        document.getElementById("ore").innerHTML = "Tempo trascorso:  Ore: " + ore;
        document.getElementById("minuti").innerHTML = " - Minuti: " + minuti;
        document.getElementById("secondi").innerHTML = " - Secondi: " + secondi;
        document.querySelector(".punti").innerHTML = "Punteggio: " + punteggio;
        setTimeout("tempo()", 1000);
    }
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function modale() {
    modal.style.display = "block";
    document.querySelector('.modal-content p').innerHTML = "HAI VINTO IN: " + ore + "h:" + minuti + "m:" + secondi + "s !" + " - con un Punteggio di: " + punteggio;
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}