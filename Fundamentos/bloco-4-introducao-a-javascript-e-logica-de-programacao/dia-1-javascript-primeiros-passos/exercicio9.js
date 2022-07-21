const ang1 = 25;
const ang2 = 15;
const ang3 = 120;
let soma = ang1 + ang2 + ang3;
let condicao;

if (ang1 <= 0) {
    console.log("Angulo Invalido");
    condicao = false;
}

if (ang2 <= 0) {
    console.log("Angulo Invalido");
    condicao = false;
}

if (ang3 <= 0) {
    console.log("Angulo Invalido");
    condicao = false;
}

else condicao === true;

if (condicao ===true && soma === 180) {
    console.log("True");
}

else if (condicao === true && soma != 180) {
    console.log("False");
}