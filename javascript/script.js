$(window).on('load', function() {
    // Navbar toggle
    $('.navbar-toggle').on('click', function() {
        $('.navbar-menu').slideToggle();
    });

    $(window).on('resize', function() {
        if ($(window).width() > 430) {
            $('.navbar-menu').show();
        } else {
            $('.navbar-menu').hide();
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
        
        // Remove the open class from all buttons except the one being clicked
        $('.btn').not(this).removeClass('open');
        
        // Toggle the clicked dropdown
        $(this).next('.dropdown-content').slideToggle();
        $(this).find('i').toggleClass('closed open');
        
        // Toggle the open class on the button
        $(this).toggleClass('open');
    });
});

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to update product details
function updateProductDetails() {
    const productName = getUrlParameter('name');
    const productPrice = getUrlParameter('price');

    const productNameElement = document.getElementById('productName');
    const productPriceElement = document.getElementById('productPrice');

    if (productName && productNameElement) {
        productNameElement.textContent = productName;
    }
    if (productPrice && productPriceElement) {
        productPriceElement.textContent = `$${productPrice}`;
    }
}

// Call the function to update product details on page load
document.addEventListener('DOMContentLoaded', updateProductDetails);


// Global variable to keep track of the current image index
let currentImageIndex = 0;
const images = ['front', 'back'];

//
function showImage(imageType) {
    const fullImage = document.getElementById('fullImage');
    const fullImageLink = document.getElementById('fullImageLink');
    if (imageType === 'front') {
        fullImage.src = '../../../images/front.png';
        fullImageLink.href = '../../../images/front.png';
        currentImageIndex = 0;
    } else if (imageType === 'back') {
        fullImage.src = '../../../images/back.png';
        fullImageLink.href = '../../../images/back.png';
        currentImageIndex = 1;
    }
}

// Magnific Popup for Product Images
$(function() {
    $('.full-image a').magnificPopup({
        type: 'image',
        gallery: {
            enabled: false
        },
        closeOnContentClick: true,
        closeBtnInside: false,
        showCloseBtn: false
    });
});