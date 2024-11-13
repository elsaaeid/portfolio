(function ($) {
    "use strict";

    /**== WOW Animation ==**/
    new WOW().init();

    /**== Loader JS ==*/
    $(window).on('load', function () {
        $(".bg_load").fadeOut("slow");
    });

    const $navLinks = $(".sidebar a");

    // Function to set active link
    function setActiveLink() {
        $navLinks.removeClass("active"); // Remove active class from all links
        // Check if the current URL matches the link's href
        const currentPath = window.location.pathname.split("/").pop();
        $navLinks.each(function() {
            if ($(this).attr("href") === currentPath) {
                $(this).addClass("active"); // Add active class to the current link
            }
        });
    }

    // Check on page load
    setActiveLink();

    // Event listeners for navigation links
    $navLinks.on("click", function() {
        // Delay the active link update to allow the page to navigate
        setTimeout(setActiveLink, 0);
    });

    // Check when the hash changes (for back/forward navigation)
    $(window).on("hashchange", setActiveLink);

}(jQuery));