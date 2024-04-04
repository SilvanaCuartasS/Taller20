const render = () => {
    const formulario = document.querySelector("#formulario");
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const edad = document.querySelector("#edad");
    const p = document.querySelector("#p");

    nombre.addEventListener("input", (e) => {

    });

    apellido.addEventListener("input", (e) => {
        
    });

    edad.addEventListener("input", (e) => {
        
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        p.innerHTML=`El nombre de la persona es ${e.target.nombre.value}, su apellido es ${e.target.apellido.value} y su edad es ${e.target.edad.value}`
    });
};

document.addEventListener("DOMContentLoaded", render);

