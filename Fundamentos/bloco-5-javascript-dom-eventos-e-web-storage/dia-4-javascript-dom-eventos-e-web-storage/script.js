window.onload = function() {
let select = document.querySelector("select");
select.addEventListener("change", function(){
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;

    localStorage.setItem("5.4-backgroundColor", selected.value);

});

let select2 = document.getElementById("select2");
select2.addEventListener("change", function(){
    let selected2 = select2.selectedOptions[0];
    document.body.style.color = selected2.value;
});

let inputFontSize = document.querySelector('input[name = "font-size"]');
inputFontSize.addEventListener("change", function(){
    let p = document.querySelector("p");
    p.style.fontSize = `${inputFontSize.value}px`; 

    localStorage.setItem("5.4-fontSize", `${inputFontSize.value}px`);
});

let savedBackground = localStorage.getItem("5.4-backgroundColor");
document.body.style.backgroundColor = savedBackground;

let savedFontSize = localStorage.getItem("5.4-fontSize");
let p = document.querySelector("p");
p.style.fontSize = savedFontSize;
}