// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let pariODispari = prompt("Scegli pari o dispari");
let numero = parseInt(prompt("Scegli un numero"));

console.log(pariODispari);
console.log(numero);

let pcNumber = randomPcNumber(1, 5);

function randomPcNumber (min, max) {

    let numerogenerato = Math.floor(Math.random() * (max - min + 1)) + min;
    return numerogenerato;
    
}
console.log("pc number " + pcNumber);


const somma = sommaNumeri(numero, pcNumber);

ValoreRisultato();

function sommaNumeri (num1, num2) {

    const somma = num1 + num2;
    
    const risultato = [somma];

    return risultato;

    
}
console.log("la somma è " + somma);


function ValoreRisultato () {
        
    if (somma % 2 === 0){
        alert("vince pari");
    } else if (somma % 2 === 1) {
        alert("vince dispari");
    }
    
}