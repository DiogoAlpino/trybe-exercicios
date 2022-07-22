/* let maior = 0;
let ehprimo = false;

for (let index = 2; index <= 50; index += 1)
    { 

    for (let index2 = 2; index2 <= 50; index2 += 1) {
        if (index%index2 != 0) {
            ehprimo = true;
        }
        if (ehprimo = true && index > maior ) {
            maior = index;
        }
    }
    }

    console.log(maior);
*/

let maior = 0;
let ehPrimo = false;
let numerosPrimos = [];
let quantDivisores = 0;

for (let index = 2; index <= 50; index += 1) {
    quantDivisores = 0;
    for (let index2 = index; index2 >= 2; index2 -= 1) {
    if (index % index2 === 0) {
    quantDivisores += 1;
    }
    }
    if (quantDivisores === 1) {
        numerosPrimos.push(index);
     }
    }
     console.log(numerosPrimos[numerosPrimos.length-1]) ;
