(function ($) {
    "use strict";
    /* ..............................................
       Special Menu
       ................................................. */

    var Container = $('.container');
    Container.imagesLoaded(function () {
        var $grid = $('.special-list').isotope({
            itemSelector: '.special-grid'
        });

        // Event listener for filtering items
        $('.special-menu').on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
    });

    /* ..............................................
       Featured Products
       ................................................. */

    $('.featured-products-box').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: [
            "<i class='fas fa-arrow-left'></i>", 
            "<i class='fas fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    });

}(jQuery));