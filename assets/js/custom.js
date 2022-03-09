(function ($) {
    "use strict";

  /* ..............................................
     Special Menu
     ................................................. */

        var Container = $('.container');
        Container.imagesLoaded(function () {
            var portfolio = $('.special-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.special-list').isotope({
                itemSelector: '.special-grid'
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
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
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
                    nav: true,
                    loop: true
                }
            }
        });
        function myMap() {
        var mapProp = {
            center: new google.maps.LatLng(40.712775, -74.005973),
            zoom: 18,
        };
        var map = new google.maps.Map(document.getElementById("map-container-google-1"), mapProp);
    }




}(jQuery));


                       /*bulb-creative*/
                        $(document).ready(function () {
                            $('[data-toggle="tooltip"]').tooltip();
                        });

function myCv() {
  var x = document.getElementById("mycv");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}






  