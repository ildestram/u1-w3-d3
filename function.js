// FUNZIONE CHE CALCOLA UNA RANGE DI ANNI
function sottrazione (firstNumber, secondNumber) {
    let risultato = firstNumber - secondNumber;
    return risultato;
}

let firstSottrazione = sottrazione (2022,1998);
console.log(firstSottrazione);

// FUNZIONE FRECCIA 
const hola = () => alert("Hello, world!");

hola();
console.log(hola);

// FUNZIONE ALL'INTERNO DI UN'ALTRA FUNZIONE
const goodbye = function()
    { alert("Goodbye, world!");

    };

goodbye();