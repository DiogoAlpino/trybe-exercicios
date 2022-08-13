const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
    for (let index = 1; index < array.length; index += 1) {
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index] < array [index2]) { //Vai invertendo a posicao se for menor
                let position = array[index];
                array[index] = array[index2];
                array[index2] = position;
            }

        }
    }

    return array;   
};

console.log(sortOddsAndEvens(oddsAndEvens));  

//Bonus

/*const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);*/