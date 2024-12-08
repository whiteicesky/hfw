const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');

    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('active');

});


