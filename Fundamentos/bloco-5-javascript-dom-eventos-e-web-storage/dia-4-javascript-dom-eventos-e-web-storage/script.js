window.onload = function() {
let select = document.querySelector("select");
select.addEventListener("change", function(){
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;
});

let select2 = document.getElementById("select2");
select2.addEventListener("change", function(){
    let selected2 = select2.selectedOptions[0];
    document.body.style.color = selected2.value;
});
}