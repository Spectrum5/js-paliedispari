let userValue = prompt(`scegli pari o dispari`);
let userNumber = Number(prompt(`inserisci un numero da 1 a 5`));

function calcolate(string, number){
    let somma;
    
    if(number > 5 || (string !== `pari` && string !== `dispari`)){
        console.log('hai inserito un numero troppo grande, oppure una parola sbagliata')
    }
    else{
        let numberPc = Math.floor(Math.random() * 6);
        somma = number + numberPc;

        if(somma % 2 === 0){
            if(string === `pari`){
                console.log(` il numero e' pari, hai vinto`)
            }
            else{
                console.log(`il numero e' pari, hai perso`)
            } 
        }
        else if( somma % 2 === 1){
            if(string === `dispari`){
                console.log(`il numero e' dispari, hai vinto`);
            }
            else{
                console.log(`il numero e' dispari, hai perso`);
            } 
        }
        return somma;
    }
    
}

console.log(calcolate(userValue, userNumber))