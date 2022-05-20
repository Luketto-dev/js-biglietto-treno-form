let nomeCognome = document.getElementById("nome-cognome")

let kilometri = document.getElementById("kilometri")

let eta = document.getElementById("eta")

let buttonSubmit = document.getElementById("submit")

let buttoncancel = document.getElementById("cancel")

let error = document.querySelector(".error")

let divSectionTicket = document.querySelector(".section-ticket");



buttonSubmit.addEventListener("click", function(){

    let datiValidi = true;

    // controllo se i kilometri sono < 1 oppure > di 499
    if (kilometri.value < 1 || kilometri.value > 499) {
        datiValidi = false
        error.innerHTML = "inserisci kilometraggio corretto (min:1 max:499)"
    }

    // controllo se il nome non è sia un numero e che non sia vuoto
    if (!isNaN(nomeCognome.value || nomeCognome.value == "")) {
        datiValidi = false
        error.innerHTML = "inserisci un nome e un cognome validi"
    }

    if (datiValidi) {
        let prezzoPerKilometro = 0.21;
        let prezzoTotale = kilometri.value * prezzoPerKilometro;
        let scontoApplicato = 0;
        let offering = "biglietto standard";


        if (eta.value == "min") {
            scontoApplicato = 0.2;
            offering = "biglietto minorenni"

        }else if (eta.value == "over65") {
            scontoApplicato = 0.4;
            offering = "biglietto over-65"
        }

        divSectionTicket.classList.remove("d-none");

        prezzoTotale -= prezzoTotale * scontoApplicato;
        console.log(prezzoTotale)
        
        let price = document.querySelector(".price")
        price.innerHTML = prezzoTotale.toFixed(2)
        console.log(price)

        let divOffering = document.querySelector(".ticket-type")
        divOffering.innerHTML = offering;
        console.log(divOffering)

        let codiceCp = document.querySelector(".cp-code")
        codiceCp.innerHTML = Math.floor(Math.random() * 10000) + 1;
        console.log(codiceCp)

        let carriage = document.querySelector(".carriage")
        carriage.innerHTML = Math.floor(Math.random() * 10);
        console.log(carriage)

        let namePassenger = document.querySelector(".name-passenger")
        namePassenger.innerHTML = nomeCognome.value
        console.log(namePassenger)

        nomeCognome.value = "";
        kilometri.value = null;

    }else{

    }

});


buttoncancel.addEventListener("click", function(){
    
    divSectionTicket.classList.add("d-none");
    error.innerHTML = "";

})