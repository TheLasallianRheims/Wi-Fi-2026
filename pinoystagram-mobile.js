(function () {
    document.querySelectorAll('.header__menu').forEach(function (menuButton) {
        const navMenu = document.getElementById(menuButton.getAttribute('aria-controls'));

        function setMenuState(isOpen) {
            navMenu.classList.toggle('is-open', isOpen);
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        }

        menuButton.addEventListener('click', function () {
            setMenuState(!navMenu.classList.contains('is-open'));
        });

        navMenu.addEventListener('click', function (event) {
            if (event.target.closest('.nav-button')) setMenuState(false);
        });

        document.addEventListener('click', function (event) {
            if (!event.target.closest('.navbar') && navMenu.classList.contains('is-open')) {
                setMenuState(false);
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') setMenuState(false);
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
