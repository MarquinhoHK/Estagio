//Video
$(document).ready(function(){
    $('.block-video-thumbnail').click(function() {
        Video();
    });
});

function Video() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/vhII1qlcZ4E';

    var video = document.querySelector('.block-video-video');
    var thumbnail = document.querySelector('.block-video-thumbnail');

    video.removeAttribute("hidden");
    thumbnail.remove();
    video.appendChild(iframe);
}

//Confirmar se o utilizador selecionou alguma opção
document.getElementById('block-form-form').addEventListener('submit', function(event) {
    var selectElement = document.querySelector('.block-form-form-select');
    var errorAlert = document.getElementById('block-form-form-select-error');
    
    if (selectElement.value === "0") {
        errorAlert.style.display = 'block';
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none';
    }
});

//Menu Burger
var hamMenu = document.querySelector('.header-menu-burger');
var offScreenMenu = document.querySelector('.header-menu');
var menuOptions = document.querySelectorAll('.header-menu-options a');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});

// Adiciona o evento de clique a cada item de menu
menuOptions.forEach(option => {
    option.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    });
});

//Botão para o top
const topLink = document.querySelector(".button-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        topLink.classList.add("active");
    } else {
        topLink.classList.remove("active");
    }
});