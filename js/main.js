let btn = document.getElementById("btnAgreg");
btn.addEventListener("click", function (e){
    e.preventDefault();
let nombreProducto = document.getElementById("name");
let cantidad = document.getElementById("Number");

if (
    (nombreProducto.value.length >= 3)
    &&
    (isNaN(nombreProducto.value))
) {
    nombreProducto.classList.remove("is-invalid");
    nombreProducto.classList.remove("is-valid");
} else {
    nombreProducto.classList.remove("is-valid");
    nombreProducto.classList.remove("is-invalid");
}
console.log(cantidad.value.length);
console.log(!isNaN(cantidad));
{

};