//NAVBAR CELULAR
const navbarCelular = document.querySelector(".navCel")
const navLinks = document.querySelector(".navLinks")

navbarCelular.addEventListener("click", () => {
    navbarCelular.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll("navSecciones").forEach(n => n.addEventListener("click", () => {
    navbarCelular.classList.remove("active");
    navLinks.classList.remove("active");
}))

// MENSAJE SUGERENCIAS
let nombreFormulario = document.getElementById('nombre')
let botonFormulario = document.getElementById('botonFormulario')

botonFormulario.addEventListener('click', () => {

    let nombre = nombreFormulario.value
    const mensajeFormulario = document.getElementById('formulario')

    mensajeFormulario.innerHTML = `<h5>Gracias por tu mensaje, ${nombre}. Nos comunicaremos a la brevedad.</h5>`
})