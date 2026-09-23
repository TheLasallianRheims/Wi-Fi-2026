(function () {
    document.querySelector('.header__menu').addEventListener('click', function () {
        alert('Menu coming soon!');
    });

    document.querySelector('.header__search').addEventListener('click', function () {
        alert('Search coming soon!');
    });

    const firstPage = document.querySelector('.viewport');
    const secondPage = document.querySelector('.second-page');

    document.querySelector('.carousel-chevron').addEventListener('click', function () {
        firstPage.hidden = true;
        secondPage.hidden = false;
    });
})();
