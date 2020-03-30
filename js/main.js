/**
 * //CERCA IN UN ARRRAY
 * Chiedi all’utente la sua email,
 * controlla che sia nella lista di chi può accedere,
 * stampa un messaggio appropriato sull’esito dell controllo
*/

//Dichiarazione Variabili
var listMail = ["michele@boolean.careers", "fabio@boolean.careers", "roberto@boolean.careers", "paolo@boolean.careers", "lorenzo@boolean.careers", "vincenzo@boolean.careers"];
var boolean = false;

//chiedo all'utente la sua email
var yourMail= prompt("Inserisci il tuo indirizzo email").toLowerCase();


//controllo
for ( var i = 0; i < listMail.length; i++){
  var item = listMail[i]

  if (yourMail == item){
    boolean = true;
  }
};

//stampa un messaggio
if (boolean == true){
  //email trovata
  console.log("L'utente " + yourMail + " è stato trovato");
} else {
  //email non trovata
  console.log("L'utente " + yourMail + " non è stato trovato");
};



/** 
 * //GIOCO DEI DADI
 * generare un numero random da 1  a 6, sia per il giocatore sia per il computer
 * Stabilire il vincitore, in base a chi fa il punteggio più alto
*/