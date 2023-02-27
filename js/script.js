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
