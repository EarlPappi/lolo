var menu = document.querySelector('#mobile-menu');
var mainMenu = document.querySelector('#main-menu');

menu.addEventListener('click', function(e){
    mainMenu.classList.toggle('hide-menu')
})