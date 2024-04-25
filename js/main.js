"use strict"

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.header').addClass('sticky');
        }

        else {
            $('.header').removeClass('sticky');
        }

    })
})

$(document).ready(function () {
    $('.menu ul li').click(function (event) {
        if (!$(event.target).hasClass('.click-btn').length) {
            $('.menu ul li').removeClass('active');

            $(this).addClass('active');
        }
    });

    $('.menu ul li .click-btn').click(function (event) {
        event.stopPropagation(); // Prevent event bubbling
    });
});

$(document).ready(function () {
    $('.click-btn').click(function () {
        $('ul.sub-menu').slideToggle('slow');
        $(this).toggleClass('click-toggle')
    })
})

$(document).ready(function () {
    $('.menu ul li a').click(function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            var targetSection = $(this.hash);
            var offset = targetSection.offset().top - 200;
            $('html, body').animate({
                scrollTop: offset
            }, 800, function () {
                window.location.hash = targetSection.selector;
            });

            $('.offcanvas').offcanvas('hide');
        }

    })
})

$('.slider').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        992: {
            items: 1
        }
    },

    onChanged: function (event) {
        $('.owl-item img').removeClass('zoom-in');

        $('.owl-item').eq(event.item.index).find('img').addClass('zoom-in')
    }

});

// counter animation starts



$(document).ready(function () {
    $('.scroll_top').hide();

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.scroll_top').show(500);
        } else {
            $('.scroll_top').hide(500);
        }
    });

    $('.scroll_top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 2000, () => {
            $('.scroll_top').hide(500);
        });
        return false;
    });
});

$(document).ready(function() {
    $('.photo-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{
        enabled:true
      }
    });
  });

$(document).ready(function () {
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    var observer = new IntersectionObserver(callback, options);
    var targetBox = document.querySelector('.counter-box');

    observer.observe(targetBox)

    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                observer.unobserve(targetBox);
                startCounterAnimation();
            }
        })
    }

    function startCounterAnimation() {
        $('.count').each(function () {
            var $this = $(this);
            var targetCount = parseInt($this.text(), 10);

            $({ count: 0 }).animate({
                count: targetCount
            }, {
                duration: 5000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.count))
                },
                complete: function () {
                    $this.text(targetCount)
                }
            })
        })
    }


})

$(document).ready(function () {
    $('.testimonial-slider').slick({
        dots: false,
        nav: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});
