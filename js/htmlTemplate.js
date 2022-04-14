const retornoCardContenido = (contenido) => {
    const {
        img,
        parrafo,
    } = contenido
    let HTMLCard = ""
    HTMLCard += 
        `<div class="pages grid__img1" data-aos="fade-up-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <a href="./pages/acercaDe.html" class="pages__links">
            <img src="${img}" alt="consultorio de terapia ocupacional">
            </a>
            <p class="pages__parrafo">${parrafo}</p>
        </div>`
    return HTMLCard
}