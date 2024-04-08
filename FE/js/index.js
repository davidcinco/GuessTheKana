let title = document.getElementById("h1Title");
let nameInput = document.getElementById("nameInput");

function loadData(){
    console.log(nameInput.value);
    title.innerText = `Hello ${nameInput.value}`
}