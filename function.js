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

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
// let altezza = prompt("Inserisci un numero per l'altezza");
// let larghezza = prompt("Inserisci un numero per la larghezza");

// function area(altezza, larghezza) {
//     return altezza * larghezza;
// }

// document.write("L'area del triangolo è " + area(altezza,larghezza));

function area(altezza, larghezza) {
    let areaRettangolo = altezza * larghezza;
    return areaRettangolo;
}

let altezza = 10;
let larghezza = 15;
document.write("Area = " + area(altezza, larghezza));
console.log(area);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/