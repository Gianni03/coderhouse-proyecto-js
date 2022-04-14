const url = `${window.location.origin}/js/media.json`
const contenidoHTML = document.getElementById("contenido-inicio")
const muestraEnPantalla = ""


const obtengoContenido = (url) =>{
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        const cargarImagenes = data
        cargarImagenes.forEach(contenido => {
            muestraEnPantalla += retornoCardContenido(contenido)
            contenidoHTML.innerHTML = muestraEnPantalla
        });
    })
    .finally()

}








// let URL = ''
// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))