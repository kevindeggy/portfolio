"use strict";
document.addEventListener("DOMContentLoaded", function () {
    class User {
        constructor(credito, numeroTelefono, nomeUtente) {
            this.credito = 0;
            this.numeroChiamate = 0;
            this.credito = credito;
            this.numeroTelefono = numeroTelefono;
            this.nomeUtente = nomeUtente;
        }
        ricarica(unaRicarica) {
            this.credito = this.credito + unaRicarica;
        }
        chiamata(minutiDurata) {
            this.numeroChiamate++;
            if ((+minutiDurata / 60 * 0.20) <= this.credito) {
                this.credito -= +minutiDurata / 60 * 0.20;
                this.credito = +this.credito.toFixed(2);
                alert(variaz.innerHTML = this.nomeUtente + ": ha effettuato una chiamata di " + minutiDurata + " secondi. Spendendo: " + (+minutiDurata / 60 * 0.20).toFixed(2) + " €");
            }
            else {
                alert('fatti una ricarica');
                this.numeroChiamate--;
            }
        }
        numero404(creditoRes) {
            alert(`il tuo credito residuo è: ${creditoRes} €`);
        }
        getNumeroChiamate() {
            alert(`Oggi hai effettuato: ${this.numeroChiamate} chiamate`);
        }
        azzeraChiamate() {
            this.numeroChiamate = 0;
        }
    }
    let FirstUser = new User(0, 1234, "Kevin De Girolamo");
    let SecondUser = new User(0, 8888, "Mauro Migliorino");
    let ThirdUser = new User(0, 4321, "Giovanni Tassone");
    let telefono = document.querySelector("#numero");
    let dieciEuro = document.querySelector("#dieci");
    let ventiEuro = document.querySelector("#venti");
    let cinqueantaEuro = document.querySelector("#cinquanta");
    let centoEuro = document.querySelector("#cento");
    let login = document.querySelector("#login");
    let logout = document.querySelector("#logout");
    let chiamato = document.querySelector("#numeroChiam");
    let secondi = document.querySelector("#secondiChiam");
    let inoltra = document.querySelector("#inoltraChiam");
    let infoChiam = document.querySelector("#infoChiamate");
    let azzera = document.querySelector("#azzeraChiam");
    let titoloRic = document.querySelector("#titoloric");
    let cancella = document.querySelector("#canc");
    let variaz = document.querySelector("#par");
    let btnUno = document.querySelector("#uno");
    let btnDue = document.querySelector("#due");
    let btnTre = document.querySelector("#tre");
    let btnQua = document.querySelector("#quattro");
    let btnCin = document.querySelector("#cinque");
    let btnSei = document.querySelector("#sei");
    let btnSet = document.querySelector("#sette");
    let btnOtt = document.querySelector("#otto");
    let btnNov = document.querySelector("#nove");
    let btnZer = document.querySelector("#zero");
    let btnUnoPre = document.querySelector("#unoPre");
    let btnDuePre = document.querySelector("#duePre");
    let btnTrePre = document.querySelector("#trePre");
    let btnQuaPre = document.querySelector("#quattroPre");
    let btnCinPre = document.querySelector("#cinquePre");
    let btnSeiPre = document.querySelector("#seiPre");
    let btnSetPre = document.querySelector("#settePre");
    let btnOttPre = document.querySelector("#ottoPre");
    let btnNovPre = document.querySelector("#novePre");
    let btnZerPre = document.querySelector("#zeroPre");
    function canctel() { telefono.value = ""; }
    function cancnum() { chiamato.value = ""; }
    cancella.addEventListener("click", canctel);
    btnUno.addEventListener("click", function () { chiamato.value += "1"; });
    btnDue.addEventListener("click", function () { chiamato.value += "2"; });
    btnTre.addEventListener("click", function () { chiamato.value += "3"; });
    btnQua.addEventListener("click", function () { chiamato.value += "4"; });
    btnCin.addEventListener("click", function () { chiamato.value += "5"; });
    btnSei.addEventListener("click", function () { chiamato.value += "6"; });
    btnSet.addEventListener("click", function () { chiamato.value += "7"; });
    btnOtt.addEventListener("click", function () { chiamato.value += "8"; });
    btnNov.addEventListener("click", function () { chiamato.value += "9"; });
    btnZer.addEventListener("click", function () { chiamato.value += "0"; });
    btnUnoPre.addEventListener("click", function () { telefono.value += "1"; });
    btnDuePre.addEventListener("click", function () { telefono.value += "2"; });
    btnTrePre.addEventListener("click", function () { telefono.value += "3"; });
    btnQuaPre.addEventListener("click", function () { telefono.value += "4"; });
    btnCinPre.addEventListener("click", function () { telefono.value += "5"; });
    btnSeiPre.addEventListener("click", function () { telefono.value += "6"; });
    btnSetPre.addEventListener("click", function () { telefono.value += "7"; });
    btnOttPre.addEventListener("click", function () { telefono.value += "8"; });
    btnNovPre.addEventListener("click", function () { telefono.value += "9"; });
    btnZerPre.addEventListener("click", function () { telefono.value += "0"; });
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        login.addEventListener("click", function () {
            chiamato.value = "";
            secondi.value = "";
            if (+telefono.value === FirstUser.numeroTelefono || +telefono.value === SecondUser.numeroTelefono || +telefono.value === ThirdUser.numeroTelefono) {
                if (titoloRic !== null) {
                    titoloRic.style.display = "inline-block";
                }
                if (btnUno !== null && btnDue !== null && btnTre !== null && btnQua !== null && btnCin !== null && btnSei !== null && btnSet !== null && btnOtt !== null && btnNov !== null && btnZer !== null) {
                    btnUno.style.display = "inline-block";
                    btnDue.style.display = "inline-block";
                    btnTre.style.display = "inline-block";
                    btnQua.style.display = "inline-block";
                    btnCin.style.display = "inline-block";
                    btnSei.style.display = "inline-block";
                    btnSet.style.display = "inline-block";
                    btnOtt.style.display = "inline-block";
                    btnNov.style.display = "inline-block";
                    btnZer.style.display = "inline-block";
                }
                btnUnoPre.style.display = "none";
                btnDuePre.style.display = "none";
                btnTrePre.style.display = "none";
                btnQuaPre.style.display = "none";
                btnCinPre.style.display = "none";
                btnSeiPre.style.display = "none";
                btnSetPre.style.display = "none";
                btnOttPre.style.display = "none";
                btnNovPre.style.display = "none";
                btnZerPre.style.display = "none";
                cancella.style.left = "-90px";
                cancella.style.top = "-150px";
                cancella.removeEventListener("click", canctel);
                cancella.addEventListener("click", cancnum);
                dieciEuro.style.display = 'inline-block';
                ventiEuro.style.display = 'inline-block';
                cinqueantaEuro.style.display = 'inline-block';
                centoEuro.style.display = 'inline-block';
                login.style.display = 'none';
                telefono.disabled = true;
                logout.style.display = 'inline-block';
                chiamato.style.display = 'block';
                secondi.style.display = 'block';
                inoltra.style.display = 'block';
                infoChiam.style.display = 'inline-block';
                azzera.style.display = 'inline-block';
            }
            else {
                alert('Non sei nostro cliente');
            }
        });
    }
    if (logout !== null && login !== null || dieciEuro !== null && login !== null || ventiEuro !== null && login !== null || cinqueantaEuro !== null && login !== null || centoEuro !== null && login !== null) {
        logout.addEventListener("click", function () {
            chiamato.value = "";
            secondi.value = "";
            if (dieciEuro.style.display === 'inline-block') {
                if (titoloRic !== null) {
                    titoloRic.style.display = "none";
                }
                if (btnUno !== null && btnDue !== null && btnTre !== null && btnQua !== null && btnCin !== null && btnSei !== null && btnSet !== null && btnOtt !== null && btnNov !== null && btnZer !== null) {
                    btnUno.style.display = "none";
                    btnDue.style.display = "none";
                    btnTre.style.display = "none";
                    btnQua.style.display = "none";
                    btnCin.style.display = "none";
                    btnSei.style.display = "none";
                    btnSet.style.display = "none";
                    btnOtt.style.display = "none";
                    btnNov.style.display = "none";
                    btnZer.style.display = "none";
                }
                cancella.style.left = "-122px";
                cancella.style.top = "110px";
                cancella.removeEventListener("click", cancnum);
                cancella.addEventListener("click", canctel);
                dieciEuro.style.display = 'none';
                ventiEuro.style.display = 'none';
                cinqueantaEuro.style.display = 'none';
                centoEuro.style.display = 'none';
                login.style.display = 'inline-block';
                telefono.disabled = false;
                logout.style.display = 'none';
                chiamato.style.display = 'none';
                secondi.style.display = 'none';
                inoltra.style.display = 'none';
                infoChiam.style.display = 'none';
                azzera.style.display = 'none';
                telefono.value = "";
            }
        });
    }
    dieciEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(10);
            alert(variaz.innerHTML = FirstUser.nomeUtente + ": ricarica di 10 €");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(10);
            alert(variaz.innerHTML = SecondUser.nomeUtente + ": ricarica di 10 €");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(10);
            alert(variaz.innerHTML = ThirdUser.nomeUtente + ": ricarica di 10 €");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    ventiEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(20);
            alert(variaz.innerHTML = FirstUser.nomeUtente + ": ricarica di 20 €");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(20);
            alert(variaz.innerHTML = SecondUser.nomeUtente + ": ricarica di 20 €");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(20);
            alert(variaz.innerHTML = ThirdUser.nomeUtente + ": ricarica di 20 €");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    cinqueantaEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(50);
            alert(variaz.innerHTML = FirstUser.nomeUtente + ": ricarica di 50 €");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(50);
            alert(variaz.innerHTML = SecondUser.nomeUtente + ": ricarica di 50 €");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(50);
            alert(variaz.innerHTML = ThirdUser.nomeUtente + ": ricarica di 50 €");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    centoEuro.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.ricarica(100);
            alert(variaz.innerHTML = FirstUser.nomeUtente + ": ricarica di 100 €");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.ricarica(100);
            alert(variaz.innerHTML = SecondUser.nomeUtente + ": ricarica di 100 €");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.ricarica(100);
            alert(variaz.innerHTML = ThirdUser.nomeUtente + ": ricarica di 100 €");
        }
        else {
            alert("Non sei un nostro cliente");
        }
    });
    inoltra.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value !== 404) {
            if (+chiamato.value <= 0 || chiamato.value === "") {
                alert("Inserisci un numero giusto!");
            }
            else {
                if (+secondi.value <= 0 || secondi.value === "") {
                    alert("Inserisci i secondi giusti!");
                }
                else {
                    FirstUser.chiamata(+secondi.value);
                    chiamato.value = "";
                    secondi.value = "";
                }
            }
        }
        else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value !== 404) {
            if (+chiamato.value <= 0 || chiamato.value === "") {
                alert("Inserisci un numero giusto!");
            }
            else {
                if (+secondi.value <= 0 || secondi.value === "") {
                    alert("Inserisci i secondi giusti!");
                }
                else {
                    SecondUser.chiamata(+secondi.value);
                    chiamato.value = "";
                    secondi.value = "";
                }
            }
        }
        else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value !== 404) {
            if (+chiamato.value <= 0 || chiamato.value === "") {
                alert("Inserisci un numero giusto!");
            }
            else {
                if (+secondi.value <= 0 || secondi.value === "") {
                    alert("Inserisci i secondi giusti!");
                }
                else {
                    ThirdUser.chiamata(+secondi.value);
                    chiamato.value = "";
                    secondi.value = "";
                }
            }
        }
        else if (+telefono.value === FirstUser.numeroTelefono && +chiamato.value === 404) {
            FirstUser.numero404(FirstUser.credito);
        }
        else if (+telefono.value === SecondUser.numeroTelefono && +chiamato.value === 404) {
            SecondUser.numero404(SecondUser.credito);
        }
        else if (+telefono.value === ThirdUser.numeroTelefono && +chiamato.value === 404) {
            ThirdUser.numero404(ThirdUser.credito);
        }
    });
    infoChiam.addEventListener('click', function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            return FirstUser.getNumeroChiamate();
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            return SecondUser.getNumeroChiamate();
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            return ThirdUser.getNumeroChiamate();
        }
    });
    azzera.addEventListener("click", function () {
        if (+telefono.value === FirstUser.numeroTelefono) {
            FirstUser.azzeraChiamate();
            alert(variaz.innerHTML = FirstUser.nomeUtente + ": ha cancellato tutte le chiamate");
        }
        else if (+telefono.value === SecondUser.numeroTelefono) {
            SecondUser.azzeraChiamate();
            alert(variaz.innerHTML = SecondUser.nomeUtente + ": ha cancellato tutte le chiamate");
        }
        else if (+telefono.value === ThirdUser.numeroTelefono) {
            ThirdUser.azzeraChiamate();
            alert(variaz.innerHTML = ThirdUser.nomeUtente + ": ha cancellato tutte le chiamate");
        }
    });
});
