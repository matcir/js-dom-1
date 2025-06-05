const imgElOn = document.getElementById("lamp-on")
const imgElOff = document.getElementById("lamp-off")

const btnEl = document.querySelector("#btn");

btnEl.addEventListener("click", function() {
    // spengo
    imgElOff.classList.toggle("d-none");
    // accendo
    imgElOff.classList.toggle("d-inline-block");
    

    // spengo
    imgElOn.classList.toggle("d-none");
    // accendo
    imgElOn.classList.toggle("d-inline-block");


    console.log(btnEl.querySelectorAll('span'));
    console.log(btnEl.querySelectorAll('span')[0]);
    
    // accendere
    btnEl.querySelectorAll('span')[0].classList.toggle('d-inline');
    btnEl.querySelectorAll('span')[1].classList.toggle('d-none');
    // spegnere
    btnEl.querySelectorAll('span')[0].classList.toggle('d-none');
    btnEl.querySelectorAll('span')[1].classList.toggle('d-inline');
 })

// btnEl.addEventListener("click", function() {
//     document.querySelector("#lamp-on").classList.toggle(".d-none");
//     document.querySelector("#lamp-off").classList.toggle(".d-none");
//     const btnClass = document.querySelector("#btn").classList;
//     btnClass.remove("btn-outline-warning");
//     btnClass.add("btn-outline-dark");
// })