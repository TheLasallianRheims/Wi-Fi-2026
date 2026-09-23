(function () {
    document.querySelectorAll('.header__menu').forEach(function (menuButton) {
        menuButton.addEventListener('click', function () {
            alert('Menu coming soon!');
        });
    });

    document.querySelectorAll('.header__search').forEach(function (searchButton) {
        searchButton.addEventListener('click', function () {
            alert('Search coming soon!');
        });
    });

    const firstPage = document.querySelector('.viewport');
    const secondPage = document.querySelector('.second-page');

    document.querySelector('.carousel-chevron').addEventListener('click', function () {
        firstPage.hidden = true;
        secondPage.hidden = false;
    });
})();
