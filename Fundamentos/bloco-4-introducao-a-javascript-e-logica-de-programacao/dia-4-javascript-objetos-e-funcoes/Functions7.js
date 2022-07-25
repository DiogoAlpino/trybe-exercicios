function checkWord (word, ending) {
    word = word.split("");
    ending = ending.split("");
    let condition = true;

    for (let index = 0; index < ending.length; index +=1) {
        if (word [word.length - ending.length + index] != ending[index]) {
            condition = false;
        }
    }

    return condition;
}

console.log(checkWord("trybe", "be"));
console.log(checkWord("joaoFernando", "fernan"));