// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

var chilometri = prompt ("Quanti chilometri desideri percorrere?");
console.log(chilometri);
var eta = prompt ("Quanti anni hai?");
console.log(eta);

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

var prezzo_biglietto = chilometri * 0.21;
console.log(prezzo_biglietto);


// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

if (eta < 18) {

    prezzo_biglietto_scontato = prezzo_biglietto - ((20/100) * prezzo_biglietto) ;

} 
else if (eta >= 65) {
    prezzo_biglietto_scontato = prezzo_biglietto - ((40/100) * prezzo_biglietto);
} else {
    prezzo_biglietto_scontato = prezzo_biglietto;
}

// metodo per arrotondare SEMPRE a due decimali.
// var prezzo_biglietto_scontato = prezzo_biglietto_scontato.toFixed(2);

//metodo per arrotondare a MASSIMO due cifre decimali.
var prezzo_biglietto_scontato = Math.round((prezzo_biglietto_scontato + Number.EPSILON) *100 ) /100;


console.log(prezzo_biglietto_scontato);