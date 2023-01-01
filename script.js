const menu = document.querySelector('.menuIcon');
const menuIcon = document.querySelector('.menuIcon i');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    if(menu.classList.contains('isOpened')){
        menu.classList.remove('isOpened');
        nav.style.transform = 'translateY(100%)';
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
    else{
        menu.classList.add('isOpened');
        nav.style.transform = 'translateY(0%)';
        menuIcon.classList.replace('fa-bars', 'fa-times');
    }
});