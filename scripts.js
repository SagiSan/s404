

$.fn.visibleHeight = function () {
    var elBottom, elTop, scrollBot, scrollTop, visibleBottom, visibleTop, _ref, _ref1;
    scrollTop = $(window).scrollTop();
    scrollBot = scrollTop + $(window).height();
    elTop = this.offset().top;
    elBottom = elTop + this.outerHeight();
    visibleTop = elTop < scrollTop ? scrollTop : elTop;
    visibleBottom = elBottom > scrollBot ? scrollBot : elBottom;
    return visibleBottom - visibleTop
}
$(window).on('scroll resize', function () {
    let p = $("#screens").visibleHeight();
    let t = $("#team").visibleHeight();
    if (p > 120) {
        console.log('added');
        $('#leftTv').addClass("rotate-left");
        $('#centerTv').addClass("rotate-center");
        $('#rightTv').addClass("rotate-right");
    }
    if(t > 120) {
        $('#miki').removeClass("miki");
        $('#faruk').removeClass("faruk");
        $('#semir').removeClass("semir");    
        $('#dave').removeClass("dave");    
        $('#kemo').removeClass("kemo");    
        $('#sagi').removeClass("sagi");    
    }
});

(function ($) {
    $(document).ready(function () {
        // scroll speed
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

        //owl carousel team slider
        $("#owl-carousel-team").owlCarousel({
            margin: 25,
            loop: true,
            nav: true,
            dots: false,
            navText: ["<span class='icons apex-icon-arrow-left-1'></span>", "<span class='icons apex-icon-arrow-right-1'></span>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    loop: true
                },
                300: {
                    items: 1,
                    loop: true
                },
                600: {
                    items: 2,
                    loop: true
                },
                800: {
                    items: 2,
                    loop: true
                },
                1000: {
                    items: 3,
                    loop: true
                }
            }
        });


        // owl carousel portfolio slider 1
        var isSlide1 = false;
        $('#portfolio-carousel-1').owlCarousel({
            loop: true,
            margin: 50,
            responsiveClass: true,
            navText: ["<span class='icons apex-icon-arrow-left-1'></span>", "<span class='icons apex-icon-arrow-right-1'></span>"],
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true
                }
            }
        });
        $('#toggle1').click(function () {
            isSlide1 = !isSlide1;
            if (isSlide2) {
                $('#portfolio-carousel-2').toggleClass("show2");
                $("#portfolio-carousel-2 div img").toggleClass("img-size");
                $("#portfolio-carousel-2 div img").toggleClass("img-responsive");
                $("#portfolio-content").toggleClass("move-portfolio");
                isSlide2 = !isSlide2;
            }

            if (isSlide3) {
                $('#portfolio-carousel-3').toggleClass("show3");
                $("#portfolio-carousel-3 div img").toggleClass("img-size");
                $("#portfolio-carousel-3 div img").toggleClass("img-responsive");
                $("#portfolio-content").toggleClass("move-portfolio");
                isSlide3 = !isSlide3;
            }

            $('#portfolio-carousel-1').toggleClass("show1");
            $("#portfolio-carousel-1 div img").toggleClass("img-size");
            $("#portfolio-carousel-1 div img").toggleClass("img-responsive");
            $("#portfolio-content").toggleClass("move-portfolio");
        });
        // end

        // owl carousel portfolio slider 2
        var isSlide2 = false;
        $('#portfolio-carousel-2').owlCarousel({
            loop: true,
            margin: 50,
            responsiveClass: true,
            navText: ["<span class='icons apex-icon-arrow-left-1'></span>", "<span class='icons apex-icon-arrow-right-1'></span>"],
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true
                }
            }
        });
        $('#toggle2').click(function () {
            isSlide2 = !isSlide2;

            if (isSlide1) {
                $('#portfolio-carousel-1').toggleClass("show1");
                $("#portfolio-carousel-1 div img").toggleClass("img-size");
                $("#portfolio-carousel-1 div img").toggleClass("img-responsive");
                $("#portfolio-content").toggleClass("move-portfolio");
                isSlide1 = !isSlide1;
            }

            if (isSlide3) {
                $('#portfolio-carousel-3').toggleClass("show3");
                $("#portfolio-carousel-3 div img").toggleClass("img-size");
                $("#portfolio-carousel-3 div img").toggleClass("img-responsive");
                $("#portfolio-content").toggleClass("move-portfolio");
                isSlide3 = !isSlide3;
            }
            $('#portfolio-carousel-2').toggleClass("show2");
            $("#portfolio-carousel-2 div img").toggleClass("img-size");
            $("#portfolio-carousel-2 div img").toggleClass("img-responsive");
            $("#portfolio-content").toggleClass("move-portfolio");
        });

        // owl carousel portfolio slider 3
        var isSlide3 = false;
        $('#portfolio-carousel-3').owlCarousel({
            loop: true,
            margin: 50,
            responsiveClass: true,
            navText: ["<span class='icons apex-icon-arrow-left-1'></span>", "<span class='icons apex-icon-arrow-right-1'></span>"],
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    dots: false,
                    loop: true
                }
            }
        });
        $('#toggle3').click(function () {
            isSlide3 = !isSlide3;

            if (isSlide1) {
                $('#portfolio-carousel-1').toggleClass("show1");
                $("#portfolio-carousel-1 div img").toggleClass("img-size");
                $("#portfolio-carousel-1 div img").toggleClass("img-responsive");
                $("#portfolio-content").toggleClass("move-portfolio");
                isSlide1 = !isSlide1;
            }

            if (isSlide2) {
                $('#portfolio-carousel-2').toggleClass("show2");
                $("#portfolio-carousel-2 div img").toggleClass("img-size");
                $("#portfolio-carousel-2 div img").toggleClass("img-responsive");
                $("#portfolio-content").toggleClass("move-portfolio");
                isSlide2 = !isSlide2;
            }

            $('#portfolio-carousel-3').toggleClass("show3");
            $("#portfolio-carousel-3 div img").toggleClass("img-size");
            $("#portfolio-carousel-3 div img").toggleClass("img-responsive");
            $("#portfolio-content").toggleClass("move-portfolio");
        });
        $('#contact-form').submit(function (e) {
            e.preventDefault();
            var name = $('#ime').val();
            var email = $('#email').val();
            var msg = $('#poruka').val();
            $.post('/sendmail.php', { name: name, email: email, msg: msg }, function (data) {
                $('#form-alert').show();
            });
        });
        // end
    });
}(jQuery));

