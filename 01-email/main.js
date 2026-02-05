/* Dichiarazione lista email invitati e varabile message */
/* Array di email */

const guestsEmails = ['user1@example.com', 'user2@example.com', 'user3@example.com', 'user4@example.com'];
let message = "Utente non invitato";

/* Richiesta dell'email dell'utente */
const userEmail = prompt("Inserisci la tua email");

/* Controllo della presenza dell'email tra gli invitati */
for (let i = 0; i < guestsEmails.length; i++) {
    const guestEmail = guestsEmails[i];

    if (guestEmail === userEmail) {
        message = "Benvenuto!";
    }
    
}

/* Stampa messaggio di esito */
console.log(message);