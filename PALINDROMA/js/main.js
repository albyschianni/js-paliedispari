// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (dvd, effe, aerea)
// Dare output relativo.

let word = prompt("inserisci una parola");

let palindrome = function (word){
    let len = word.length;
    let start = word.substring(0, Math. floor(len / 2));
    let end = word.substring(len - Math. floor(len / 2));
    //console. log(start, end);
    let flip = end.split("").reverse().join("");
    return (start == flip);

    
}

if (palindrome(word) == true) {
    alert("La tua parola è palindroma");
} else if (palindrome(word)== false) {
    alert("La tua parola non è palindroma");
}


