// VARIABILI

var player1 = true;
var caselle = document.querySelectorAll('.casella');
var punteggioP1 = document.querySelectorAll('.pallino1');
var punteggioP2 = document.querySelectorAll('.pallino');
var puntiP1 = 0;
var puntiP2 = 0;
var partita = 0;
var click = 0;

// MODALE 

var myModal = document.getElementById("modale");
document.querySelector("#modale button").addEventListener("click", function() {
    myModal.classList.remove("modaleAperto");
})
document.querySelector(".modal-footer button").addEventListener("click", function() {
    myModal.classList.remove("modaleAperto");
})

// START 

document.addEventListener('DOMContentLoaded', function() {

    for (i = 0; i < 9; i++) {
        caselle[i].addEventListener('click', function() {
            this.classList.add('cliccata');
            let pP1 = document.getElementById("pP1");
            let pP2 = document.getElementById("pP2");
            if (player1 === true) {
                this.innerHTML = "X";
                pP1.classList.add("text-danger");
                pP1.classList.remove("text-success");
                pP1.innerHTML = "Attendi il tuo TURNO! <br> <div class='w-25 mx-auto my-2 rounded-3 border border-dark'> <i class='bi bi-circle-fill'></i> <br> <i class='bi bi-circle text-warning'></i> <br> <i class='bi bi-circle text-success'></i> </div>";
                pP2.innerHTML = "E' il tuo TURNO! <br> <div class='w-25 mx-auto my-2  rounded-3 border border-dark'> <i class='bi bi-circle text-danger'></i> <br> <i class='bi bi-circle text-warning'> <br> <i class='bi bi-circle-fill text-success'></i> </div>";
                pP2.classList.add("text-success");
                pP2.classList.remove("text-danger");
                player1 = false;

                click++;
                controllo();
            } else {
                this.innerHTML = "O";
                pP2.classList.add("text-danger");
                pP2.classList.remove("text-success");
                pP2.innerHTML = "Attendi il tuo TURNO! <br> <div class='w-25 mx-auto my-2  rounded-3 border border-dark'> <i class='bi bi-circle-fill'></i> <br> <i class='bi bi-circle text-warning'></i> <br> <i class='bi bi-circle text-success'></i> </div>";
                pP1.innerHTML = "E' il tuo TURNO! <br> <div class='w-25 mx-auto my-2  rounded-3 border border-dark'> <i class='bi bi-circle text-danger'></i> <br> <i class='bi bi-circle text-warning'> <br> <i class='bi bi-circle-fill text-success'></i> </div>";
                pP1.classList.add("text-success");
                pP1.classList.remove("text-danger");
                player1 = true;

                click++;
                controllo();
            }
        });
    }

});

function controllo() {

    if (caselle[0].textContent === "X" && caselle[1].textContent === "X" && caselle[2].textContent === "X" || caselle[3].textContent === "X" && caselle[4].textContent === "X" && caselle[5].textContent === "X" || caselle[6].textContent === "X" && caselle[7].textContent === "X" && caselle[8].textContent === "X" || caselle[0].textContent === "X" && caselle[3].textContent === "X" && caselle[6].textContent === "X" || caselle[1].textContent === "X" && caselle[4].textContent === "X" && caselle[7].textContent === "X" || caselle[2].textContent === "X" && caselle[5].textContent === "X" && caselle[8].textContent === "X" || caselle[0].textContent === "X" && caselle[4].textContent === "X" && caselle[8].textContent === "X" || caselle[2].textContent === "X" && caselle[4].textContent === "X" && caselle[6].textContent === "X") {

        for (i = 0; i < 9; i++) {
            caselle[i].classList.remove("cliccata");
            caselle[i].innerHTML = "?";
        }
        puntiP1++;

        document.querySelector("#modale h5").innerHTML = "Vince il PLAYER 1";
        document.querySelector(".modal-body p").innerHTML = "Manche Terminata. " + puntiP1 + " vs " + puntiP2;
        myModal.classList.add("modaleAperto");

        punteggioP1[partita].classList.add("bi-check-circle", "text-success");
        punteggioP1[partita].classList.remove("bi-dash-circle");
        punteggioP2[partita].classList.add("bi-x-circle", "text-danger");
        punteggioP2[partita].classList.remove("bi-dash-circle");
        partita++;
        click = 0;

        controlloFinale();
    }

    if (caselle[0].textContent === "O" && caselle[1].textContent === "O" && caselle[2].textContent === "O" || caselle[3].textContent === "O" && caselle[4].textContent === "O" && caselle[5].textContent === "O" || caselle[6].textContent === "O" && caselle[7].textContent === "O" && caselle[8].textContent === "O" || caselle[0].textContent === "O" && caselle[3].textContent === "O" && caselle[6].textContent === "O" || caselle[1].textContent === "O" && caselle[4].textContent === "O" && caselle[7].textContent === "O" || caselle[2].textContent === "O" && caselle[5].textContent === "O" && caselle[8].textContent === "O" || caselle[0].textContent === "O" && caselle[4].textContent === "O" && caselle[8].textContent === "O" || caselle[2].textContent === "O" && caselle[4].textContent === "O" && caselle[6].textContent === "O") {

        for (i = 0; i < 9; i++) {
            caselle[i].classList.remove("cliccata");
            caselle[i].innerHTML = "?";
        }
        puntiP2++;

        document.querySelector("#modale h5").innerHTML = "Vince il PLAYER 2";
        document.querySelector(".modal-body p").innerHTML = "Manche Terminata. " + puntiP1 + " vs " + puntiP2;
        myModal.classList.add("modaleAperto");

        punteggioP2[partita].classList.add("bi-check-circle", "text-success");
        punteggioP2[partita].classList.remove("bi-dash-circle");
        punteggioP1[partita].classList.add("bi-x-circle", "text-danger");
        punteggioP1[partita].classList.remove("bi-dash-circle");
        partita++;
        click = 0;

        controlloFinale();
    }

    if (click >= 9) {
        document.querySelector("#modale h5").innerHTML = "Pareggio";
        myModal.classList.add("modaleAperto");

        for (i = 0; i < 9; i++) {
            caselle[i].classList.remove("cliccata");
            caselle[i].innerHTML = "?";
        }

        click = 0;

    }
}

function controlloFinale() {
    if (puntiP1 >= 3) {
        document.querySelector("#modale h5").innerHTML = "Vittoria finale: PLAYER 1";
        document.querySelector(".modal-body p").innerHTML = "Partita Terminata: <i class='bi bi-trophy-fill'></i> Player1 -> " + puntiP1 + " vs " + puntiP2 + " <- Player2";
        myModal.classList.add("modaleAperto");

        for (i = 0; i < 5; i++) {
            punteggioP1[i].classList.remove("bi-check-circle", "bi-x-circle", "text-success", "text-danger");
            punteggioP1[i].classList.add("bi-dash-circle");
        }
        for (i = 0; i < 5; i++) {
            punteggioP2[i].classList.remove("bi-check-circle", "bi-x-circle", "text-success", "text-danger");
            punteggioP2[i].classList.add("bi-dash-circle");
        }

        puntiP1 = 0;
        puntiP2 = 0;
        partita = 0;
    }

    if (puntiP2 >= 3) {
        document.querySelector("#modale h5").innerHTML = "Vittoria finale: PLAYER 2";
        document.querySelector(".modal-body p").innerHTML = "Partita Terminata: Player1 -> " + puntiP1 + " vs " + puntiP2 + " <- Player2 <i class='bi bi-trophy-fill'></i>";
        myModal.classList.add("modaleAperto");

        for (i = 0; i < 5; i++) {
            punteggioP1[i].classList.remove("bi-check-circle", "bi-x-circle", "text-success", "text-danger");
            punteggioP1[i].classList.add("bi-dash-circle");
        }
        for (i = 0; i < 5; i++) {
            punteggioP2[i].classList.remove("bi-check-circle", "bi-x-circle", "text-success", "text-danger");
            punteggioP2[i].classList.add("bi-dash-circle");
        }

        puntiP1 = 0;
        puntiP2 = 0;
        partita = 0;
    }
}