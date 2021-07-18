//Código cópiado do modelo de carrosel da página Owl Carousel. 
$('.owl-carousel').owlCarousel({
    loop:true,
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
});

//Botão assistir 
function botaoAssistir(){
    window.location.href = "https://www.youtube.com/watch?v=yWgWhuN8wc4";

}
//Botão mais informações
function botaoInformacao(){
    window.location.href = "animePrincipalInfor.html";  
}
//Link iniciar da pagina principal
function clickInciar(){
alert("Você já está na página Inicar!\nDivirta-se!")
}
//Botão Volta para página principal
function voltarPagInicio(){
    window.location.href = "index.html"
}
