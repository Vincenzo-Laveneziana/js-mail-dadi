/**
 * //CERCA IN UN ARRRAY
 * Chiedi all’utente la sua email,
 * controlla che sia nella lista di chi può accedere,
 * stampa un messaggio appropriato sull’esito dell controllo
*/

//Dichiarazione Variabili
var listMail = ["michele@boolean.careers", "fabio@boolean.careers", "roberto@boolean.careers", "paolo@boolean.careers", "lorenzo@boolean.careers", "vincenzo@boolean.careers" ,"ciao"];
var boolean = false;


bottoneCerca.addEventListener("click",
  function(){
    //chiedo all'utente la sua email
    var yourMail= document.getElementById("nome").value;
    var yourMail = yourMail.toLowerCase();
    console.log(yourMail);

    //controllo
    for ( var i = 0; i < listMail.length; i++){
      var item = listMail[i];

      if (yourMail == item){
        boolean = true;
      }
    };

    //stampa un messaggio
    if (boolean == true){
      //email trovata
      document.getElementById("check").innerHTML = "L'utente " + yourMail + " è stato trovato";
      console.log("L'utente " + yourMail + " è stato trovato");
      bottoneCerca.className = "hidden";
      play.className = "show";
      
    } else {
      //email non trovata
      document.getElementById("check").innerHTML = "Attenzione l'utente " + yourMail + " non è stato trovato";
      console.log("Attenzione l'utente " + yourMail + " non è stato trovato, reinserisci l'email");
    };

    check.className = "show";
    
  }
)


/** 
 * //GIOCO DEI DADI
 * generare un numero random da 1  a 6, sia per il giocatore sia per il computer
 * Stabilire il vincitore, in base a chi fa il punteggio più alto
*/

//Dichiarazione variabili
var mioNumero;
var pcNumero;


bottoneGioca.addEventListener("click",
  function(){
    //Genero numero random da 1 a 6
  mioNumero = Math.floor( Math.random() * 6) + 1;
  console.log("Il tuo numero è " + mioNumero);

  pcNumero = Math.floor( Math.random() * 6) + 1;
  console.log("Il del pc è " + pcNumero);

  //Stabilisco il vincitore
  if ( mioNumero > pcNumero){
    console.log("Bravissimo sei un campione nato");
  } else if (pcNumero > mioNumero) {
    console.log("Riprova sicuramente il pc ha barato");
  } else if ( mioNumero == pcNumero){
    console.log("Pareggio c'eri quasi");
  }
  

  //stampa un messaggio
  if (boolean == true){
    //email trovata
    email.className = "hidden";
  } else {
    //email non trovata
    alert("Per giocare devi inserire e cercare l'indirizzo email");
  };
  dadi.className = "show";
  }
)

bottoneAnnulla.addEventListener("click",
  function(){
    window.location.reload(); 
  }
)


