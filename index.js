document.addEventListener('DOMContentLoaded', function() {
    var swiperHorizontalBelow = new Swiper('.swiper-container-below-banner-enquiry', {
        direction: 'horizontal',
        slidesPerView: 1, // Default for larger screens
        spaceBetween: 15, 
        loop: true, // Enable infinite loop
        autoplay: {
            delay: 0, // Continuous movement
            disableOnInteraction: false,
        },
        speed: 3000, // Speed of sliding
        breakpoints: {
            768: {
                slidesPerView: 3, // Ensure 1 card on small screens
                spaceBetween: 0, // No space between cards on small screens
            },
            992: {
                slidesPerView: 2, // Medium screens show 2 cards
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 3, // Larger screens show 3 cards
                spaceBetween: 15,
            }
        }
    });
});






// move to top
// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var moveToTopBtn = document.getElementById("moveToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    moveToTopBtn.classList.add("show");
  } else {
    moveToTopBtn.classList.remove("show");
  }
}

// Smooth scroll back to the top
document.getElementById("moveToTopBtn").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// move to top


// swiper testimonials
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper-container-testimonials', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 0, // Continuous movement
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 4000, // Speed of sliding
        breakpoints: {
            768: {
                slidesPerView: 2, // 2 cards on medium screens
            },
            992: {
                slidesPerView: 3, // 3 cards on larger screens
            }
        },
    });
});
// swiper testimonials