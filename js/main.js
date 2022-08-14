/***** This Function Opens/Closes Menu Bar *****/

const menu = document.querySelector('.mobile-menu img')
const nav = document.getElementById('nav')

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
})