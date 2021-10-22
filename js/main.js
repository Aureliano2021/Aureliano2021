/*function trocar(elemento){
elemento.innerHTML = "007 - Sem tempo para morrer"
}

function voltar(elemento){
    elemento.innerHTML = ""
}*/

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})