let word = 'tryber';
let reverse = "";

for (let index = word.length - 1; index >=0; index -=1) {
    reverse += word[index];
}

console.log(reverse);