let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = "";
let palavra= "";

for (let index = 0; index < array.length; index +=1) {
    palavra = array[index];

    if (palavra.length >= maior.length) {
        maior = palavra;
    }
}

console.log(maior);
