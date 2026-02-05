/* Genero i valori casuali da assegnare all'utente ed al computer */
/* Tutti i valori devono essere tra 1 e 6 compresi */
/* Uso di Math.random() */

userDice = parseInt(Math.random() * 6 + 1);
computerDice = parseInt(Math.random() * 6 + 1);

console.log("Utente: " + userDice, "\nComputer: " + computerDice);

/* Dichiarazione varabile message per esito finale */
let message;

/* Controllo del vincitore con dado più alto */
if (userDice > computerDice) {
    message = "Hai vinto!";
} else if (computerDice > userDice) {
    message = "Ha vinto il computer :(";
} else {
    message = "Pareggio !";
}

console.log(message);