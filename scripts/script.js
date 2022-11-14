const menu = document.querySelector('.menu');
const btn = document.querySelector('#btn-menu');

const ativarMenu = ()=> {
    const ativo = menu.classList;
    ativo.toggle("menu-active");
}

btn.addEventListener('click', ativarMenu() )