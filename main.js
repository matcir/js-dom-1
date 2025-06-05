const imgEl = document.querySelector("#lamp");
const btnEl = document.querySelector("#btn");

btnEl.addEventListener("click", function() {
    document.getElementById("lamp").src = "./img/yellow_lamp.png";
    imgEl.alt = 'lampon_png';
    btnEl.innerHTML = 'Spegni';
    btnEl.className = 'btn btn-outline-dark';
})