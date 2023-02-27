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
let verifiedEmails = ["pincopallino@gmail.com", "francescofalanga@gmail.com", "vincenzovincenzini@gmail.com", "martalosito@gmail.com", "marcocarta@gmail.com", "marcomengoni@gmail.com"];

console.log(verifiedEmails);



// Aggiungo un Evento al click del BUTTON
loginButtonEl.addEventListener("click", function() {

    // Creo una variabile in modo tale da non printare in pagina tutti i valori
    let commonVar = false;

    for (let i = 0; i < verifiedEmails.length; i++) {
        // accesso consentito
        if (mailInputEl.value === verifiedEmails[i]) {

            console.log("Accesso Consentito");
            commonVar = true; 

        // accesso negato
        } else {
            
            console.log("Accesso Negato");

        }

        // stampo in pagina il risultato finale
        if (commonVar) {
            document.getElementById("accessGranted").innerText = "Accesso Consentito";
        } else {
            document.getElementById("accessGranted").innerText = "Accesso Negato";
        }
        
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



let userNumberEl = document.getElementById("userNumber");
let pcNumberEl = document.getElementById("pcNumber");

// Creo due variabili per generare i numeri casuali
let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);


// Assegno entrambe le variabili
userNumberEl = x;
pcNumberEl = y;

// Stampo in console i risultati e successivamente li stampo nel documento
console.log("Numero Utente: " + userNumberEl);
console.log("Numero PC: " + pcNumberEl);




document.getElementById("userNumber").innerText = userNumberEl;
document.getElementById("pcNumber").innerText = pcNumberEl;


// imposto il risultato finale in pagina
if (userNumberEl > pcNumberEl) {
    
    document.getElementById("victory").innerText = "HAI VINTO!"

} else {

    document.getElementById("victory").innerText = "IL COMPUTER TI HA BATTUTO!";

}