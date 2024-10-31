$(function() {
    // Navbar toggle
    $('#navbar-toggle').on('click', function() {
        $('#navbar-menu').slideToggle();
    });

    $(window).on('resize', function() {
        if ($(window).width() > 430) {
            $('#navbar-menu').show();
        } else {
            $('#navbar-menu').hide();
        }
    }).trigger('resize');

    // FlexSlider
    $('.flexslider').flexslider({
        animation: "slide",
        directionNav: true,
        controlNav: false,
        slideshow: true,
        slideshowSpeed: 3000, // 3 seconds
    });

    // Magnific Popup
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: false
        },
        closeOnContentClick: true,
        closeBtnInside: false,
        showCloseBtn: false
    });

    // Dropdown menus
    $('.btn').on('click', function() {
        // Close all dropdowns except the one being clicked
        $('.dropdown-content').not($(this).next('.dropdown-content')).slideUp();
        $('.btn i').not($(this).find('i')).removeClass('open').addClass('closed');
        
        // Toggle the clicked dropdown
        $(this).next('.dropdown-content').slideToggle();
        $(this).find('i').toggleClass('closed open');
    });
});