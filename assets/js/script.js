const burgerMenu = document.querySelector('.burger-menu');
const x = document.querySelector('.x');
const modal = document.querySelector('.modal');

const toggleModal = ()=> {
    modal.classList.toggle('hidden');
};

burgerMenu.addEventListener('click', toggleModal);
x.addEventListener('click', toggleModal);