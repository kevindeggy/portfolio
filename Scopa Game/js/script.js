    // MAZZO

    var mazzo = ["d-1", "d-2", "d-3", "d-4", "d-5", "d-6", "d-7", "d-8", "d-9", "d-10", "c-1", "c-2", "c-3", "c-4", "c-5", "c-6", "c-7", "c-8", "c-9", "c-10", "b-1", "b-2", "b-3", "b-4", "b-5", "b-6", "b-7", "b-8", "b-9", "b-10", "s-1", "s-2", "s-3", "s-4", "s-5", "s-6", "s-7", "s-8", "s-9", "s-10"];

    function mescola() { //funzione che mescola il mio array

        var currentIndex = mazzo.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = mazzo[currentIndex];

            mazzo[currentIndex] = mazzo[randomIndex];
            mazzo[randomIndex] = temporaryValue;
        }
    }
    mescola();

    // GAME

    var cartePlayer1 = document.querySelector('#cartePlayer');
    var cartePlayer2 = document.querySelector('#oscurare-carte');
    var player2Cards = document.querySelector('#cartePc');
    var carteTerra = document.querySelector('#gioco');
    var sceltaCarte = document.querySelector('#scelta');

    var mazzettinoP1 = [];
    var mazzettinoPc = [];

    var punteggioMatchP1 = 0;
    var punteggioMatchPc = 0;
    var scopaP1 = [];
    var scopaPc = [];
    var giocatoreUno = document.createElement('span');
    var giocatoreDue = document.createElement('span');
    var ultimaPresaP1 = document.createElement('span');
    var ultimaPresaPC = document.createElement('span');

    var tirodelPc = 0;

    for (i = 0; i < 3; i++) { //creazione 3 carte al player iniziali
        let carta = document.createElement('div');
        carta.style.backgroundImage = "url('./img/" + mazzo[i] + ".svg')";
        carta.style.height = "135px";
        carta.style.width = "80px";
        carta.addEventListener('mouseenter', function a() {
            carta.style.height = "202.5px";
            carta.style.width = "120px";
        });
        carta.addEventListener('mouseleave', function b() {
            carta.style.height = "135px";
            carta.style.width = "80px";
        });
        let cartaSelezionata = mazzo[i];
        carta.addEventListener('click', function() {
            if (giocatoreUno.textContent === "false" || giocatoreUno.textContent === "") {
                carta.style.height = "135px";
                carta.style.width = "80px";
                carteTerra.appendChild(carta);
                carta.addEventListener('mouseenter', function() {
                    carta.style.height = "135px";
                    carta.style.width = "80px";
                });
                setTimeout(function() {
                    controllo(cartaSelezionata, carta, mazzettinoP1, scopaP1, giocatoreUno, giocatoreDue, ultimaPresaP1, ultimaPresaPC);
                    controlloNumCarte();
                }, 500);
            }
        });
        cartePlayer1.appendChild(carta);
    }

    var numCart = 10;
    var numCartPc = 13;
    var ics = 3;
    var mauro = 3;

    function controlloNumCarte() {
        if (cartePlayer1.childElementCount === 0 && numCart < 40) {
            for (i = numCart; i < (numCart + 3); i++) { //creazione delle 3 carte dopo al player
                let carta = document.createElement('div');
                carta.style.backgroundImage = "url('./img/" + mazzo[i] + ".svg')";
                carta.style.height = "135px";
                carta.style.width = "80px";
                carta.addEventListener('mouseenter', function a() {
                    carta.style.height = "202.5px";
                    carta.style.width = "120px";
                });
                carta.addEventListener('mouseleave', function b() {
                    carta.style.height = "135px";
                    carta.style.width = "80px";
                });
                let cartaSelezionata = mazzo[i];
                carta.addEventListener('click', function() {
                    if (giocatoreUno.textContent === "false" || giocatoreUno.textContent === "") {
                        carta.style.height = "135px";
                        carta.style.width = "80px";
                        carteTerra.appendChild(carta);
                        carta.addEventListener('mouseenter', function() {
                            carta.style.height = "135px";
                            carta.style.width = "80px";
                        });
                        setTimeout(function() {
                            controllo(cartaSelezionata, carta, mazzettinoP1, scopaP1, giocatoreUno, giocatoreDue, ultimaPresaP1, ultimaPresaPC);
                            controlloNumCarte();
                        }, 500);
                    }
                });
                cartePlayer1.appendChild(carta);
            }
            numCart += 6;
        }
    }

    function controlloNumCartePc() {
        if (cartePlayer2.childElementCount === 0 && numCartPc < 40) {
            for (i = numCartPc; i < (numCartPc + 3); i++) { //creazione delle 3 carte dopo al pc
                let carta = document.createElement('div');
                carta.style.backgroundImage = "url('./img/" + mazzo[i] + ".svg')";
                carta.style.height = "135px";
                carta.style.width = "80px";
                cartePlayer2.appendChild(carta);
            }
            numCartPc += 6;
        }
        if (numCartPc === 43) {
            mauro--;
        }
        if (player2Cards.childElementCount === 0 && numCartPc < 44 && mauro > 0) {
            for (i = 0; i < 3; i++) { //creazione 3 carte al pc FITTIZIE
                let carta = document.createElement('div');
                carta.style.backgroundImage = "url('./img/back-card.svg')";
                carta.style.height = "135px";
                carta.style.width = "80px";
                player2Cards.appendChild(carta);
            }
        }
    }

    for (i = 3; i < 6; i++) { //creazione 3 carte al pc iniziali
        let carta = document.createElement('div');
        carta.style.backgroundImage = "url('./img/" + mazzo[i] + ".svg')";
        carta.style.height = "135px";
        carta.style.width = "80px";
        cartePlayer2.appendChild(carta);
    }

    for (i = 0; i < 3; i++) { //creazione 3 carte al pc FITTIZIE
        let carta = document.createElement('div');
        carta.style.backgroundImage = "url('./img/back-card.svg')";
        carta.style.height = "135px";
        carta.style.width = "80px";
        player2Cards.appendChild(carta);
    }

    for (i = 6; i < 10; i++) { //creazione 4 carte a terra inizio game
        let carta = document.createElement('div');
        carta.style.backgroundImage = "url('./img/" + mazzo[i] + ".svg')";
        carta.style.height = "135px";
        carta.style.width = "80px";
        carteTerra.appendChild(carta);
    }

    // Controllo

    function controllo(cartaLanciata, cartaDiv, mazzetto, scopetta, giocatore1, giocatore2, prende1, prende2) {

        giocatore1.innerHTML = "true";
        giocatore2.innerHTML = "false";

        var tavolo = carteTerra.children;
        var somma = [];
        var somma2 = [];
        var somma3 = [];
        var somma4 = [];
        let cartaConfronto = cartaLanciata.slice(2, 4);
        cartaConfronto = +cartaConfronto;

        for (i = 0; i < tavolo.length - 1; i++) {
            let cartaUguale = tavolo[i].getAttribute('style').slice(31, 33);
            cartaUguale = +cartaUguale;
            if (cartaUguale === cartaConfronto) {
                somma.push(tavolo[i]);
            }
        }

        for (i = 0; i < tavolo.length - 1; i++) {
            for (j = i + 1; j < tavolo.length - 1; j++) {
                let firstCard = tavolo[i].getAttribute('style').slice(31, 33);
                firstCard = +firstCard;
                let secondCard = tavolo[j].getAttribute('style').slice(31, 33);
                secondCard = +secondCard;
                if (firstCard + secondCard === cartaConfronto) {
                    somma2.push(tavolo[i], tavolo[j]);
                }
            }
        }

        for (i = 0; i < tavolo.length - 1; i++) {
            for (j = i + 1; j < tavolo.length - 1; j++) {
                for (k = j + 1; k < tavolo.length - 1; k++) {
                    let firstCard = tavolo[i].getAttribute('style').slice(31, 33);
                    firstCard = +firstCard;
                    let secondCard = tavolo[j].getAttribute('style').slice(31, 33);
                    secondCard = +secondCard;
                    let thirdCard = tavolo[k].getAttribute('style').slice(31, 33);
                    thirdCard = +thirdCard;
                    if (firstCard + secondCard + thirdCard === cartaConfronto) {
                        somma3.push(tavolo[i], tavolo[j], tavolo[k]);
                    }
                }
            }
        }

        for (i = 0; i < tavolo.length - 1; i++) {
            for (j = i + 1; j < tavolo.length - 1; j++) {
                for (k = j + 1; k < tavolo.length - 1; k++) {
                    for (m = k + 1; m < tavolo.length - 1; m++) {
                        let firstCard = tavolo[i].getAttribute('style').slice(31, 33);
                        firstCard = +firstCard;
                        let secondCard = tavolo[j].getAttribute('style').slice(31, 33);
                        secondCard = +secondCard;
                        let thirdCard = tavolo[k].getAttribute('style').slice(31, 33);
                        thirdCard = +thirdCard;
                        let fourCard = tavolo[m].getAttribute('style').slice(31, 33);
                        fourCard = +fourCard;
                        if (firstCard + secondCard + thirdCard + fourCard === cartaConfronto) {
                            somma4.push(tavolo[i], tavolo[j], tavolo[k], tavolo[m]);
                        }
                    }
                }
            }
        }

        // Inizio IF

        if (somma.length === 0 && somma2.length === 0 && somma3.length === 0 && somma4.length === 0 && giocatoreUno.textContent === "true") {
            setTimeout(function() {
                tiraPc();
                tirodelPc++;
            }, 1500);
        }

        if (somma.length === 1) {
            mazzetto.push(somma[0].getAttribute('style').slice(29, 33));
            mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
            prende1.innerHTML = "Yes";
            prende2.innerHTML = "No";
            if (giocatoreUno.textContent === "true") {
                setTimeout(function() {
                    tiraPc();
                    tirodelPc++;
                }, 1500);
            }
            carteTerra.removeChild(somma[0]);
            carteTerra.removeChild(cartaDiv);
        } else if (somma2.length === 2 && (somma.length === 0 && somma3.length === 0 && somma4.length === 0)) {
            mazzetto.push(somma2[0].getAttribute('style').slice(29, 33));
            mazzetto.push(somma2[1].getAttribute('style').slice(29, 33));
            mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
            prende1.innerHTML = "Yes";
            prende2.innerHTML = "No";
            if (giocatoreUno.textContent === "true") {
                setTimeout(function() {
                    tiraPc();
                    tirodelPc++;
                }, 1500);
            }
            carteTerra.removeChild(somma2[0]);
            carteTerra.removeChild(somma2[1]);
            carteTerra.removeChild(cartaDiv);
        } else if (somma3.length === 3 && (somma2.length === 0 && somma.length === 0 && somma4.length === 0)) {
            mazzetto.push(somma3[0].getAttribute('style').slice(29, 33));
            mazzetto.push(somma3[1].getAttribute('style').slice(29, 33));
            mazzetto.push(somma3[2].getAttribute('style').slice(29, 33));
            mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
            prende1.innerHTML = "Yes";
            prende2.innerHTML = "No";
            if (giocatoreUno.textContent === "true") {
                setTimeout(function() {
                    tiraPc();
                    tirodelPc++;
                }, 1500);
            }
            carteTerra.removeChild(somma3[0]);
            carteTerra.removeChild(somma3[1]);
            carteTerra.removeChild(somma3[2]);
            carteTerra.removeChild(cartaDiv);
        } else if (somma4.length === 4 && (somma2.length === 0 && somma3.length === 0 && somma.length === 0)) {
            mazzetto.push(somma4[0].getAttribute('style').slice(29, 33));
            mazzetto.push(somma4[1].getAttribute('style').slice(29, 33));
            mazzetto.push(somma4[2].getAttribute('style').slice(29, 33));
            mazzetto.push(somma4[3].getAttribute('style').slice(29, 33));
            mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
            prende1.innerHTML = "Yes";
            prende2.innerHTML = "No";
            if (giocatoreUno.textContent === "true") {
                setTimeout(function() {
                    tiraPc();
                    tirodelPc++;
                }, 1500);
            }
            carteTerra.removeChild(somma4[0]);
            carteTerra.removeChild(somma4[1]);
            carteTerra.removeChild(somma4[2]);
            carteTerra.removeChild(somma4[3]);
            carteTerra.removeChild(cartaDiv);
        } else {
            if (somma.length !== 0) {
                if (giocatoreDue.textContent === "false") {
                    sceltaCarte.style.display = "block";
                    for (incr = 0; incr < somma.length; incr++) {
                        //var scegli0 = [];
                        var scegli0 = document.createElement('div');
                        var p0 = document.createElement('p');
                        for (j = incr; j < incr + 1; j++) {
                            //scegli0.push(" " + somma[j].getAttribute('style').slice(29, 31) + Number(somma[j].getAttribute('style').slice(31, 33)));
                            let nuovo = document.createElement('div');
                            nuovo.style.height = "135px";
                            nuovo.style.width = "80px";
                            nuovo.style.backgroundImage = "url('./img/" + ((somma[j].getAttribute('style').slice(29, 31) + Number(somma[j].getAttribute('style').slice(31, 33)))) + ".svg')";
                            scegli0.appendChild(nuovo);
                        }
                        //p0.innerText = scegli0;
                        p0.appendChild(scegli0);

                        if (incr === 0) {
                            p0.addEventListener('click', function() {
                                mazzetto.push((somma[0]).getAttribute('style').slice(29, 33));
                                mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                prende1.innerHTML = "Yes";
                                prende2.innerHTML = "No";
                                if (giocatoreUno.textContent === "true") {
                                    setTimeout(function() {
                                        tiraPc();
                                        tirodelPc++;
                                    }, 1500);
                                }
                                carteTerra.removeChild(somma[0]);
                                carteTerra.removeChild(cartaDiv);

                                for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                    let figlio = sceltaCarte.childNodes(nodi);
                                    sceltaCarte.removeChild(figlio);
                                }
                                sceltaCarte.innerHTML = "";
                                sceltaCarte.style.display = "none";
                            });
                        } else if (incr === 1) {
                            p0.addEventListener('click', function() {
                                mazzetto.push((somma[1]).getAttribute('style').slice(29, 33));
                                mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                prende1.innerHTML = "Yes";
                                prende2.innerHTML = "No";
                                if (giocatoreUno.textContent === "true") {
                                    setTimeout(function() {
                                        tiraPc();
                                        tirodelPc++;
                                    }, 1500);
                                }
                                carteTerra.removeChild(somma[1]);
                                carteTerra.removeChild(cartaDiv);

                                for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                    let figlio = sceltaCarte.childNodes(nodi);
                                    sceltaCarte.removeChild(figlio);
                                }
                                sceltaCarte.innerHTML = "";
                                sceltaCarte.style.display = "none";
                            });
                        } else if (incr === 2) {
                            p0.addEventListener('click', function() {
                                mazzetto.push((somma[2]).getAttribute('style').slice(29, 33));
                                mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                prende1.innerHTML = "Yes";
                                prende2.innerHTML = "No";
                                if (giocatoreUno.textContent === "true") {
                                    setTimeout(function() {
                                        tiraPc();
                                        tirodelPc++;
                                    }, 1500);
                                }
                                carteTerra.removeChild(somma[2]);
                                carteTerra.removeChild(cartaDiv);

                                for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                    let figlio = sceltaCarte.childNodes(nodi);
                                    sceltaCarte.removeChild(figlio);
                                }
                                sceltaCarte.innerHTML = "";
                                sceltaCarte.style.display = "none";
                            });
                        } else if (incr === 3) {
                            p0.addEventListener('click', function() {
                                mazzetto.push((somma[3]).getAttribute('style').slice(29, 33));
                                mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                prende1.innerHTML = "Yes";
                                prende2.innerHTML = "No";
                                if (giocatoreUno.textContent === "true") {
                                    setTimeout(function() {
                                        tiraPc();
                                        tirodelPc++;
                                    }, 1500);
                                }
                                carteTerra.removeChild(somma[3]);
                                carteTerra.removeChild(cartaDiv);

                                for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                    let figlio = sceltaCarte.childNodes(nodi);
                                    sceltaCarte.removeChild(figlio);
                                }
                                sceltaCarte.innerHTML = "";
                                sceltaCarte.style.display = "none";
                            });
                        }
                        sceltaCarte.appendChild(p0);
                    }
                } else {
                    mazzetto.push((somma[0]).getAttribute('style').slice(29, 33));
                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                    prende1.innerHTML = "Yes";
                    prende2.innerHTML = "No";
                    carteTerra.removeChild(somma[0]);
                    carteTerra.removeChild(cartaDiv);
                }
            } else {
                if (somma2.length !== 0) {
                    if (giocatoreDue.textContent === "false") {
                        sceltaCarte.style.display = "block";
                        for (incr = 0; incr < somma2.length; incr += 2) {
                            //var scegli = [];
                            var scegli = document.createElement('div');
                            var p = document.createElement('p');
                            for (j = incr; j < incr + 2; j++) {
                                //scegli.push(" " + somma2[j].getAttribute('style').slice(29, 31) + Number(somma2[j].getAttribute('style').slice(31, 33)));
                                let nuovo = document.createElement('div');
                                nuovo.style.height = "135px";
                                nuovo.style.width = "80px";
                                nuovo.style.backgroundImage = "url('./img/" + ((somma2[j].getAttribute('style').slice(29, 31) + Number(somma2[j].getAttribute('style').slice(31, 33)))) + ".svg')";
                                scegli.appendChild(nuovo);
                            }
                            //p.innerText = scegli;
                            p.appendChild(scegli);

                            if (incr === 0) {
                                p.addEventListener('click', function() {
                                    mazzetto.push((somma2[0]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma2[1]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma2[0]);
                                    carteTerra.removeChild(somma2[1]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 2) {
                                p.addEventListener('click', function() {
                                    mazzetto.push((somma2[2]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma2[3]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma2[2]);
                                    carteTerra.removeChild(somma2[3]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 4) {
                                p.addEventListener('click', function() {
                                    mazzetto.push((somma2[4]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma2[5]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma2[4]);
                                    carteTerra.removeChild(somma2[5]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 6) {
                                p.addEventListener('click', function() {
                                    mazzetto.push((somma2[6]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma2[7]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma2[4]);
                                    carteTerra.removeChild(somma2[5]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            }
                            sceltaCarte.appendChild(p);
                        }
                    } else {
                        if (somma.length === 0) {
                            mazzetto.push((somma2[0]).getAttribute('style').slice(29, 33));
                            mazzetto.push((somma2[1]).getAttribute('style').slice(29, 33));
                            mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                            prende1.innerHTML = "Yes";
                            prende2.innerHTML = "No";
                            carteTerra.removeChild(somma2[0]);
                            carteTerra.removeChild(somma2[1]);
                            carteTerra.removeChild(cartaDiv);
                        }
                    }
                }

                if (somma3.length !== 0) {
                    if (giocatoreDue.textContent === "false") {
                        sceltaCarte.style.display = "block";
                        for (incr = 0; incr < somma3.length; incr += 3) {
                            //var scegli2 = [];
                            var scegli2 = document.createElement('div');
                            var p2 = document.createElement('p');
                            for (j = incr; j < incr + 3; j++) {
                                //scegli2.push(" " + somma3[j].getAttribute('style').slice(29, 31) + Number(somma3[j].getAttribute('style').slice(31, 33)));
                                let nuovo = document.createElement('div');
                                nuovo.style.height = "135px";
                                nuovo.style.width = "80px";
                                nuovo.style.backgroundImage = "url('./img/" + ((somma3[j].getAttribute('style').slice(29, 31) + Number(somma3[j].getAttribute('style').slice(31, 33)))) + ".svg')";
                                scegli2.appendChild(nuovo);
                            }
                            //p2.innerText = scegli2;
                            p2.appendChild(scegli2);

                            if (incr === 0) {
                                p2.addEventListener('click', function() {
                                    mazzetto.push((somma3[0]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[1]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[2]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma3[0]);
                                    carteTerra.removeChild(somma3[1]);
                                    carteTerra.removeChild(somma3[2]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 3) {
                                p2.addEventListener('click', function() {
                                    mazzetto.push((somma3[3]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[4]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[5]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma3[3]);
                                    carteTerra.removeChild(somma3[4]);
                                    carteTerra.removeChild(somma3[5]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 6) {
                                p2.addEventListener('click', function() {
                                    mazzetto.push((somma3[6]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[7]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[8]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma3[6]);
                                    carteTerra.removeChild(somma3[7]);
                                    carteTerra.removeChild(somma3[8]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 9) {
                                p2.addEventListener('click', function() {
                                    mazzetto.push((somma3[9]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[10]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma3[11]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma3[9]);
                                    carteTerra.removeChild(somma3[10]);
                                    carteTerra.removeChild(somma3[11]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            }
                            sceltaCarte.appendChild(p2);
                        }
                    } else {
                        if (somma.length === 0 && somma2.length === 0) {
                            mazzetto.push((somma3[0]).getAttribute('style').slice(29, 33));
                            mazzetto.push((somma3[1]).getAttribute('style').slice(29, 33));
                            mazzetto.push((somma3[2]).getAttribute('style').slice(29, 33));
                            mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                            prende1.innerHTML = "Yes";
                            prende2.innerHTML = "No";
                            carteTerra.removeChild(somma3[0]);
                            carteTerra.removeChild(somma3[1]);
                            carteTerra.removeChild(somma3[2]);
                            carteTerra.removeChild(cartaDiv);
                        }
                    }
                }

                if (somma4.length !== 0) {
                    if (giocatoreDue.textContent === "false") {
                        sceltaCarte.style.display = "block";
                        for (incr = 0; incr < somma3.length; incr += 4) {
                            //var scegli3 = [];
                            var scegli3 = document.createElement('div');
                            var p3 = document.createElement('p');
                            for (j = incr; j < incr + 4; j++) {
                                //scegli3.push(" " + somma4[j].getAttribute('style').slice(29, 31) + Number(somma4[j].getAttribute('style').slice(31, 33)));
                                let nuovo = document.createElement('div');
                                nuovo.style.height = "135px";
                                nuovo.style.width = "80px";
                                nuovo.style.backgroundImage = "url('./img/" + ((somma4[j].getAttribute('style').slice(29, 31) + Number(somma4[j].getAttribute('style').slice(31, 33)))) + ".svg')";
                                scegli3.appendChild(nuovo);
                            }
                            //p3.innerText = scegli3;
                            p3.appendChild(scegli3);

                            if (incr === 0) {
                                p3.addEventListener('click', function() {
                                    mazzetto.push((somma4[0]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[1]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[2]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[3]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma4[0]);
                                    carteTerra.removeChild(somma4[1]);
                                    carteTerra.removeChild(somma4[2]);
                                    carteTerra.removeChild(somma4[3]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 4) {
                                p3.addEventListener('click', function() {
                                    mazzetto.push((somma4[4]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[5]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[6]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[7]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma4[4]);
                                    carteTerra.removeChild(somma4[5]);
                                    carteTerra.removeChild(somma4[6]);
                                    carteTerra.removeChild(somma4[7]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 8) {
                                p3.addEventListener('click', function() {
                                    mazzetto.push((somma4[8]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[9]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[10]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[11]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma4[8]);
                                    carteTerra.removeChild(somma4[9]);
                                    carteTerra.removeChild(somma4[10]);
                                    carteTerra.removeChild(somma4[11]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            } else if (incr === 12) {
                                p3.addEventListener('click', function() {
                                    mazzetto.push((somma4[12]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[12]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[14]).getAttribute('style').slice(29, 33));
                                    mazzetto.push((somma4[15]).getAttribute('style').slice(29, 33));
                                    mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                                    prende1.innerHTML = "Yes";
                                    prende2.innerHTML = "No";
                                    if (giocatoreUno.textContent === "true") {
                                        setTimeout(function() {
                                            tiraPc();
                                            tirodelPc++;
                                        }, 1500);
                                    }
                                    carteTerra.removeChild(somma4[12]);
                                    carteTerra.removeChild(somma4[13]);
                                    carteTerra.removeChild(somma4[14]);
                                    carteTerra.removeChild(somma4[15]);
                                    carteTerra.removeChild(cartaDiv);

                                    for (nodi = 0; nodi < sceltaCarte.length; nodi++) {
                                        let figlio = sceltaCarte.childNodes(nodi);
                                        sceltaCarte.removeChild(figlio);
                                    }
                                    sceltaCarte.innerHTML = "";
                                    sceltaCarte.style.display = "none";
                                });
                            }
                            sceltaCarte.appendChild(p3);
                        }
                    } else {
                        if (somma.length === 0 && somma2.length === 0 && somma3.length === 0) {
                            mazzetto.push((somma4[0]).getAttribute('style').slice(29, 33));
                            mazzetto.push((somma4[1]).getAttribute('style').slice(29, 33));
                            mazzetto.push((somma4[2]).getAttribute('style').slice(29, 33));
                            mazzetto.push((somma4[3]).getAttribute('style').slice(29, 33));
                            mazzetto.push(cartaDiv.getAttribute('style').slice(29, 33));
                            prende1.innerHTML = "Yes";
                            prende2.innerHTML = "No";
                            carteTerra.removeChild(somma4[0]);
                            carteTerra.removeChild(somma4[1]);
                            carteTerra.removeChild(somma4[2]);
                            carteTerra.removeChild(somma4[3]);
                            carteTerra.removeChild(cartaDiv);
                        }
                    }
                }
            }
        }
        if (carteTerra.childElementCount === 0) {
            scopetta.push("SCOPA");
        }

        if (tirodelPc === 18) {
            setTimeout(function() {
                contrUltimeCarte();
            }, 1500);
        }
    }

    //Tira PC function

    function tiraPc() {
        var count = cartePlayer2.childElementCount;
        if (carteTerra.childElementCount === 0) {
            if (count === cartePlayer2.childElementCount) {
                let cartaLanciataPc = document.createElement('div');
                cartaLanciataPc = cartePlayer2.firstChild;
                carteTerra.appendChild(cartaLanciataPc);
                count++;
                let cartaPcSel = cartaLanciataPc.getAttribute('style').slice(29, 33);
                player2Cards.removeChild(player2Cards.firstChild);
                setTimeout(function() {
                    controllo(cartaPcSel, cartaLanciataPc, mazzettinoPc, scopaPc, giocatoreDue, giocatoreUno, ultimaPresaPC, ultimaPresaP1);
                    controlloNumCartePc();
                }, 500);
            }
        }
        for (i = 0; i < carteTerra.childElementCount; i++) {
            var watchTerra = (Number(carteTerra.childNodes[i].getAttribute('style').slice(31, 33)));
            for (k = 0; k < cartePlayer2.childElementCount; k++) {
                if (watchTerra === Number(cartePlayer2.childNodes[k].getAttribute('style').slice(31, 33))) {
                    if (count === cartePlayer2.childElementCount) {
                        let cartaLanciataPc = document.createElement('div');
                        cartaLanciataPc = cartePlayer2.childNodes[k];
                        carteTerra.appendChild(cartaLanciataPc);
                        count++;
                        let cartaPcSel = cartaLanciataPc.getAttribute('style').slice(29, 33);
                        player2Cards.removeChild(player2Cards.firstChild);
                        setTimeout(function() {
                            controllo(cartaPcSel, cartaLanciataPc, mazzettinoPc, scopaPc, giocatoreDue, giocatoreUno, ultimaPresaPC, ultimaPresaP1);
                            controlloNumCartePc();
                        }, 500);
                    }
                } else if (watchTerra !== Number(cartePlayer2.childNodes[k].getAttribute('style').slice(31, 33)) && i === carteTerra.childElementCount - 1 && k === cartePlayer2.childElementCount - 1) {
                    if (count === cartePlayer2.childElementCount) {

                        let cartaLanciataPc = document.createElement('div');
                        cartaLanciataPc = cartePlayer2.firstChild;
                        carteTerra.appendChild(cartaLanciataPc);
                        count++;
                        let cartaPcSel = cartaLanciataPc.getAttribute('style').slice(29, 33);
                        player2Cards.removeChild(player2Cards.firstChild);
                        setTimeout(function() {
                            controllo(cartaPcSel, cartaLanciataPc, mazzettinoPc, scopaPc, giocatoreDue, giocatoreUno, ultimaPresaPC, ultimaPresaP1);
                            controlloNumCartePc();
                        }, 500);
                    }
                }
            }
        }
    }

    function contrUltimeCarte() {
        if (carteTerra.childElementCount > 0) {
            if (ultimaPresaP1.textContent === "Yes") {
                for (f = 0; f < carteTerra.childElementCount; f++) {
                    mazzettinoP1.push(carteTerra.childNodes[f].getAttribute('style').slice(29, 33));
                    carteTerra.removeChild(carteTerra.childNodes[f]);
                }
            } else if (ultimaPresaPC.textContent === "Yes") {
                for (f = 0; f < carteTerra.childElementCount; f++) {
                    mazzettinoPc.push(carteTerra.childNodes[f].getAttribute('style').slice(29, 33));
                    carteTerra.removeChild(carteTerra.childNodes[f]);
                }
            }
            contrUltimeCarte();
        } else {
            let punteggioP1 = 0;
            let punteggioPc = 0;
            alert("PARTITA FINITA");
            document.getElementById('finePartita').style.display = 'flex';

            let pSc0 = document.createElement('p');
            let pSc1 = document.createElement('p');
            pSc0.innerHTML = "SCOPE: " + scopaP1.length;
            pSc1.innerHTML = "SCOPE: " + scopaPc.length;
            document.getElementById('risP1').appendChild(pSc0);
            document.getElementById('risPc').appendChild(pSc1);
            punteggioP1 += scopaP1.length;
            punteggioPc += scopaPc.length;

            let pMaz0 = document.createElement('p');
            let pMaz1 = document.createElement('p');
            pMaz0.innerHTML = "Carte nel mazzetto: " + mazzettinoP1.length;
            pMaz1.innerHTML = "Carte nel mazzetto: " + mazzettinoPc.length;
            document.getElementById('risP1').appendChild(pMaz0);
            document.getElementById('risPc').appendChild(pMaz1);
            if (mazzettinoP1.length > mazzettinoPc.length) {
                punteggioP1++;
            } else if (mazzettinoP1.length < mazzettinoPc.length) {
                punteggioPc++;
            }

            let settebelloP1 = "NO";
            let settebelloPc = "NO";
            for (h = 0; h < mazzettinoP1.length; h++) {
                if (mazzettinoP1[h] === "d-7.") {
                    settebelloP1 = "YES";
                    punteggioP1++;
                }
            }
            for (h = 0; h < mazzettinoPc.length; h++) {
                if (mazzettinoPc[h] === "d-7.") {
                    settebelloPc = "YES";
                    punteggioPc++;
                }
            }
            let pSet0 = document.createElement('p');
            let pSet1 = document.createElement('p');
            pSet0.innerHTML = "Settebello? " + settebelloP1;
            pSet1.innerHTML = "Settebello? " + settebelloPc;
            document.getElementById('risP1').appendChild(pSet0);
            document.getElementById('risPc').appendChild(pSet1);

            let denariP1 = 0;
            let denariPc = 0;
            for (h = 0; h < mazzettinoP1.length; h++) {
                if (mazzettinoP1[h].slice(0, 1) === "d") {
                    denariP1++;
                }
            }
            for (h = 0; h < mazzettinoPc.length; h++) {
                if (mazzettinoPc[h].slice(0, 1) === "d") {
                    denariPc++;
                }
            }
            let pDen0 = document.createElement('p');
            let pDen1 = document.createElement('p');
            pDen0.innerHTML = "Carte di denari: " + denariP1;
            pDen1.innerHTML = "Carte di denari: " + denariPc;
            document.getElementById('risP1').appendChild(pDen0);
            document.getElementById('risPc').appendChild(pDen1);
            if (denariP1 > denariPc) {
                punteggioP1++;
            } else if (denariP1 < denariPc) {
                punteggioPc++;
            }

            let primieraP1 = 0;
            let primieraPc = 0;
            for (h = 0; h < mazzettinoP1.length; h++) {
                if (Number(mazzettinoP1[h].slice(2, 4)) === 7) {
                    primieraP1 += 21;
                } else if (Number(mazzettinoP1[h].slice(2, 4)) === 6) {
                    primieraP1 += 18;
                } else if (Number(mazzettinoP1[h].slice(2, 4)) === 1) {
                    primieraP1 += 16;
                } else if (Number(mazzettinoP1[h].slice(2, 4)) === 5) {
                    primieraP1 += 15;
                } else if (Number(mazzettinoP1[h].slice(2, 4)) === 4) {
                    primieraP1 += 14;
                } else if (Number(mazzettinoP1[h].slice(2, 4)) === 3) {
                    primieraP1 += 13;
                } else if (Number(mazzettinoP1[h].slice(2, 4)) === 2) {
                    primieraP1 += 12;
                } else {
                    primieraP1 += 10;
                }
            }
            for (h = 0; h < mazzettinoPc.length; h++) {
                if (Number(mazzettinoPc[h].slice(2, 4)) === 7) {
                    primieraPc += 21;
                } else if (Number(mazzettinoPc[h].slice(2, 4)) === 6) {
                    primieraPc += 18;
                } else if (Number(mazzettinoPc[h].slice(2, 4)) === 1) {
                    primieraPc += 16;
                } else if (Number(mazzettinoPc[h].slice(2, 4)) === 5) {
                    primieraPc += 15;
                } else if (Number(mazzettinoPc[h].slice(2, 4)) === 4) {
                    primieraPc += 14;
                } else if (Number(mazzettinoPc[h].slice(2, 4)) === 3) {
                    primieraPc += 13;
                } else if (Number(mazzettinoPc[h].slice(2, 4)) === 2) {
                    primieraPc += 12;
                } else {
                    primieraPc += 10;
                }
            }
            if (primieraP1 > primieraPc) {
                punteggioP1++;
            } else if (primieraP1 < primieraPc) {
                punteggioPc++;
            }
            let pPri0 = document.createElement('p');
            let pPri1 = document.createElement('p');
            pPri0.innerHTML = "Primiera: " + primieraP1;
            pPri1.innerHTML = "Primiera: " + primieraPc;
            document.getElementById('risP1').appendChild(pPri0);
            document.getElementById('risPc').appendChild(pPri1);

            let puntiP1 = document.createElement('p');
            let puntiPc = document.createElement('p');
            puntiP1.innerHTML = "Punti: " + punteggioP1;
            puntiPc.innerHTML = "Punti: " + punteggioPc;
            document.getElementById('risP1').appendChild(puntiP1);
            document.getElementById('risPc').appendChild(puntiPc);

            let puntiP1Tot = document.createElement('p');
            let puntiPcTot = document.createElement('p');
            let punteggioLocalP1 = localStorage.getItem('puntiP1');
            let punteggioLocalPc = localStorage.getItem('puntiPc');
            if (punteggioLocalP1 === null && punteggioLocalPc === null) {
                puntiP1Tot.innerHTML = "Punti Totali: " + punteggioP1;
                puntiPcTot.innerHTML = "Punti Totali: " + punteggioPc;
            } else {
                puntiP1Tot.innerHTML = "Punti Totali: " + (Number(punteggioP1) + Number(punteggioLocalP1));
                puntiPcTot.innerHTML = "Punti Totali: " + (Number(punteggioPc) + Number(punteggioLocalPc));
            }
            document.getElementById('risP1').appendChild(puntiP1Tot);
            document.getElementById('risPc').appendChild(puntiPcTot);
            punteggioP1 = (Number(punteggioP1) + Number(punteggioLocalP1));
            punteggioPc = (Number(punteggioPc) + Number(punteggioLocalPc));
            localStorage.setItem('puntiP1', punteggioP1);
            localStorage.setItem('puntiPc', punteggioPc);

            controlloMatch();
        }
    }

    function controlloMatch() {
        let punteggioLocalP1 = localStorage.getItem('puntiP1');
        let punteggioLocalPc = localStorage.getItem('puntiPc');

        if (Number(punteggioLocalP1) >= 11 && Number(punteggioLocalP1) > Number(punteggioLocalPc)) {
            setTimeout(function() {
                alert("PLAYER 1 HA VINTO!");
            }, 2000);
            localStorage.removeItem('puntiP1');
            localStorage.removeItem('puntiPc');
        } else if (Number(punteggioLocalPc) >= 11 && Number(punteggioLocalPc) > Number(punteggioLocalP1)) {
            setTimeout(function() {
                alert("PC HA VINTO!");
            }, 2000);
            localStorage.removeItem('puntiP1');
            localStorage.removeItem('puntiPc');
        }
    }