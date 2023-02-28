/* Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*
- Chiedi all'utente la sua email e memorizzala
? SE l'email è nella lista di chi può accedere
    Consenti l'accesso
: ALTRIMENTI
    Nega l'accesso
- Stampa un messaggio appropriato sull'esito del check
*/



// Inizializzo le variabili dell'input e del button
let mailInputEl = document.getElementById("mailInput");
let loginButtonEl = document.getElementById("loginButton");

// Creo la lista delle email che consentono l'accesso!
const verifiedEmails = ["pincopallino@gmail.com", "francescofalanga@gmail.com", "vincenzovincenzini@gmail.com", "martalosito@gmail.com", "marcocarta@gmail.com", "marcomengoni@gmail.com"];

console.log(verifiedEmails);

// Creo una variabile in modo tale da non printare in pagina tutti i valori
let commonVar = false;


// Aggiungo un Evento al click del BUTTON
loginButtonEl.addEventListener("click", function() {


    for (let i = 0; i < verifiedEmails.length; i++) {
        // accesso consentito
        if (mailInputEl.value === verifiedEmails[i]) {

            console.log("Accesso Consentito");
            commonVar = true; 

        }
        
    }
    
    // stampo in pagina il risultato finale
    if (commonVar) {
        document.getElementById("accessGranted").innerText = "Accesso Consentito";
    } else {
        document.getElementById("accessGranted").innerText = "Accesso Negato";
    }

})





/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


/*
- genera un numero da 1 a 6, sia per il giocatore sia per il computer.
? SE l'utente ha un numero più alto
    Vince
: ALTRIMENTI
    Vince il Computer
- stampa un messaggio di Vittoria
*/


// BONUS creo un array e assegno la src delle immagini, creando poi due variabili per utente e pc
let diceImgs = ["img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png"]
const diceImgUserEl = document.getElementById("diceImgUser");
const diceImgPcEl = document.getElementById("diceImgPc");


// creo le variabili dell'utente e del computer
let userNumberEl = document.getElementById("userNumber");
let pcNumberEl = document.getElementById("pcNumber");


// Aggiungo un evento al click del BUTTON "Genera"
let numberGeneratorButtonEl = document.getElementById("numberGeneratorButton");

numberGeneratorButtonEl.addEventListener("click", function() {
    
    // Creo due variabili per generare i numeri casuali
    const x = Math.floor((Math.random() * 6) + 1);
    const y = Math.floor((Math.random() * 6) + 1);
    
    
    // Assegno entrambe le variabili
    userNumberEl = x;
    pcNumberEl = y;
    
    // Stampo in console i risultati
    console.log("Numero Utente: " + userNumberEl);
    console.log("Numero PC: " + pcNumberEl);

    document.getElementById("userNumber").innerText = userNumberEl;
    document.getElementById("pcNumber").innerText = pcNumberEl;
    
    

    // imposto il risultato finale in pagina
    if (userNumberEl > pcNumberEl) {
        
        document.getElementById("results").innerText = "HAI VINTO!"
    
    } else if (userNumberEl < pcNumberEl) {
    
        document.getElementById("results").innerText = "IL COMPUTER TI HA BATTUTO!";
    
    } else {

        document.getElementById("results").innerText = "PAREGGIO!";

    }

    // imposto l'output delle img per visualizzare i dadi correttamente in pagina
    diceImgUserEl.src = diceImgs[userNumberEl - 1];
    diceImgPcEl.src = diceImgs[pcNumberEl - 1];

})

