/* STEP:
1. Definire una funzione per verificare se una parola è palindroma
2. Chiedere all'utente di inserire una parola (tramite prompt)
3. Usare la funzione precedentemente definita per verificare se l'input dell'utente è una parola palindroma
    3a. Se la parola è palindroma, stampare in console "la parola è palindroma"
    3b. Se la parola non è palindroma, stampare in console "la parola NON è palindroma"
*/

function checkPalindroma(parola) { /*Verifica se la parola è palindroma*/

    let parolaInversa = '';

    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        console.log(parola[i]);
        parolaInversa = parolaInversa + parola [i];
    }

    console.log(parolaInversa);

    if (parola == parolaInversa) {
        return true;
    }
    else {
        return false;
    }
}

const parolaUtente = prompt('Inserire una parola');
console.log('parolaUtente', parolaUtente);


const risultato = checkPalindroma(parolaUtente);
console.log('risultato', risultato, typeof risultato);

    if (checkPalindroma(parolaUtente)) {

    console.log('La parola è palindroma');

}
    else {

    console.log('La parola NON è palindroma');
}