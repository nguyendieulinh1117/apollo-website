// $(window).on("load", function () {
$(document).ready(function () {
    console.log("Load ready");
    setTimeout(function () {
        $(".loader-wrapper").fadeOut("slow");
    }, 1000)
});

setTimeout(function () {
    $(".loader-wrapper").fadeOut("slow");
}, 3000)

$.doTimeout(2500, function () {
    $('.repeat.go').removeClass('go');
    return true;
});
$.doTimeout(2520, function () {
    $('.repeat').addClass('go');
    return true;
});

$(document).ready(function () {
    console.log("script.js Ready");
    if (navigator.platform.match('Mac') !== null) {
        document.body.setAttribute('class', document.body.className + ' mac');
    }

    $(".back-top-top").on("click", function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    // JS Menu mobile
    function closeMenu() {
        $(".y-mobile-menu").removeClass("show");
        $(".overlay-menu").removeClass("active");
    }
    $(".has-submenu > .btn-toggle-sub").on("click", function (e) {
        var parentli = $(this).closest("li");
        if (parentli.hasClass("opened")) {
            parentli.removeClass("opened");
            parentli.find("> ul.sub-menu").slideUp(400);
        } else {
            parentli.addClass("opened");
            parentli.find("> ul.sub-menu").slideDown(400);
        }
        parentli.siblings("li").removeClass("opened");
        parentli.siblings("li").find(".has-submenu.opened").removeClass("opened");
        parentli.siblings("li").find("ul:visible").slideUp();
    });
    $(".btn-menu-mobile").on("click", function () {
        $(".overlay-menu").toggleClass("active");
        $(".y-mobile-menu").toggleClass("show");
        return false;
    });
    $(".overlay-menu, .m-menu-close").on("click", function () {
        closeMenu();
    });
    $(".y-mobile-menu ul li a[href^='#']").on(
        "click",
        function (scroll_to_target) {
            scroll_to_target.preventDefault();
            var a = this.hash,
                i = $(a);
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop: i.offset().top - 69,
                    },
                    800,
                    "swing",
                    function () { }
                );

            $(".m-menu-close").trigger("click");
        }
    );

    $(".scroll-to-target[href^='#']").on("click", function (scroll_to_target) {
        scroll_to_target.preventDefault();
        var a = this.hash,
            i = $(a);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: i.offset().top,
                },
                800,
                "swing",
                function () { }
            );
    });

    if ($("#owl-banner").length > 0) {
        $("#owl-banner").owlCarousel({
            autoplay: true,
            // autoplayTimeout: 5000,
            // autoplaySpeed: 5000,
            loop: true,
            lazyLoad: true,
            nav: false,
            dots: false,
            items: 1,
            animateOut: "fadeOutCustom",
            mouseDrag: false,
        });
    }

    $(".feedback-slider-for").slick({
        prevArrow:
            '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
        nextArrow:
            '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: ".feedback-slider-nav",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    $(".feedback-slider-nav").slick({
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 1,
        asNavFor: ".feedback-slider-for",
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    // slidesToScroll: 5,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    prevArrow:
                        '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
                    nextArrow:
                        '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    // centerMode: false,
                },
            },
        ],
    });

    if ($(".video").length > 0) {
        $(".play-button").html(` <div class="play-icon"><img src="../images/about/play.svg" alt=""></div>`)
        $(".video-play")
            .parent()
            .click(function () {
                if ($(this).hasClass("disable-play")) {
                    $(this).children(".video-play").get(0).paused
                }
                else {
                    if ($(this).children(".video-play").get(0).paused) {
                        $(this).children(".video-play").get(0).play();
                        $(this).children(".play-button").addClass('playing').removeClass('pause').html(` <div class="play-icon"><img src="../images/about/play.svg" alt="">
            </div>`);
                    } else {
                        $(this).children(".video-play").get(0).pause();
                        $(this).children(".play-button").addClass('pause').removeClass('playing').html(` <div class="play-icon"><img src="../images/about/play.svg" alt="">
            </div>`);
                    }
                }

            });
        $(".video-play").parent().mouseover(function () {
            if ($(this).children(".video-play").get(0).paused) {
                null
            }
            else {
                $(".play-button").addClass('pause').removeClass('playing');
            }
        })
        $(".video-play").parent().mouseout(function () {
            if ($(this).children(".video-play").get(0).paused) {
                null
            } else {
                $(".play-button").addClass('playing').removeClass('pause');
            }
        })

    }

    if ($('.reaches-number').length > 0) {
        $(window).on('scroll load', function () {
            animationNumnber();
        });
        var viewed = false;

        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        function animationNumnber() {
            let number = parseInt(($('.count').eq(0).attr('data-count')))
            let number2 = parseInt(($('.count').eq(1).attr('data-count')))
            demicalNumber = number.toLocaleString('vi-vn')
            demicalNumber2 = number2.toLocaleString('vi-vn')
            if (isScrolledIntoView($(".reaches-items")) && !viewed) {
                $('.reaches-items').removeClass('animated')
                setTimeout(() => {
                    $('.reaches-items').addClass('animated')
                }, 10)
                $('.count').eq(0).text(number)
                $('.count').eq(1).text(number2)
                setTimeout(() => {
                    $('.count').eq(0).text(demicalNumber)
                    $('.count').eq(1).text(demicalNumber2)
                }, 2050)
                viewed = true;
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            } else {
                $('.count').eq(0).text(demicalNumber)
                $('.count').eq(1).text(demicalNumber2)
            }
        }
    }    // Feedback Slider
    //   if ($(".js-feedback-slider").length > 0) {
    //     $(".js-feedback-slider").owlCarousel({
    //       autoplay: true,
    //       autoplayTimeout: 4000,
    //       loop: true,
    //       lazyLoad: true,
    //       margin: 0,
    //       responsiveClass: true,
    //       items: 1,
    //       dots: false,
    //       navText: [
    //         '<span class="fas fa-chevron-left"></span>',
    //         '<span class="fas fa-chevron-right"></span>',
    //       ],
    //       rewindNav: true,
    //       nav: true,
    //     });
    //   }

    if ($(".system-slider").length > 0) {
        $(".system-slider").slick({
            prevArrow:
                '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
            nextArrow:
                '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
            slidesToShow: 1,
            infinite: false,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        fade: true,
                        // slidesToScroll: 5,
                    },
                },
            ],
        });
        $(".system-slider").on('beforeChange', function () {
            $(".system-slider").find('.image-container .animate-icon').removeClass('go')
            setTimeout(() => {
                $(".system-slider").find('.image-container .animate-icon').addClass('go')
            }, 100);
        })

    }

    if ($(".reward-slider-for").length > 0) {
        $(".reward-slider-for").slick({
            prevArrow:
                '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
            nextArrow:
                '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
    if ($(".wrapper-meet-us").length > 0) {
        $(".wrapper-meet-us").slick({
            prevArrow:
                '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
            nextArrow:
                '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        });
    }
    if ($("#more-news").length > 0) {
        $("#more-news").click(function () {
            $(".sub-blog-container").find('.content')[0].scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        });
    }

    if ($('.sticky').length > 0) {
        let filterItem = $('.sticky').find('li a')
        for (let i = 0; i < filterItem.length; i++) {
            filterItem.eq(i).on('click', function () {
                $('.sticky').find('li a').removeClass('active')
                $('.sticky').find('li a').eq(i).addClass('active')
            })
        }

        let dropDown = $('.sticky').find('.menu')
        for (let i = 0; i < filterItem.length; i++) {
            dropDown.eq(i).on('click', function () {
                $('.sticky').find('.menu').removeClass('active')
                $('.sticky').find('.menu').eq(i).addClass('active')
            })
        }
        $(window).bind('scroll', function () {
            var scrollDistance = $(window).scrollTop();
            $('.scroll-active').each(function (i) {
                if ($(this).offset().top < scrollDistance + 100) {
                    $('.sticky').find('li a').removeClass('active')
                    $('.sticky').find('li a').eq(i).addClass('active')
                }
            });
        })
    }

    if ($('.modal-download').length > 0) {
        let name = $('form .input-group #input-name')
        let phone = $('form .input-group #input-phone')
        let email = $('form .input-group #input-email')
        const fileName = "sach-noi"

        const phoneValidate = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        const emailValidate = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        $('.modal-download').find('form').on('submit', function (e) {
            e.preventDefault()
            if (name.val() == '') {
                $(this).find('#name-error').addClass('active')
            } else if (phone.val() == '' || phoneValidate.test(phone.val()) == false) {
                $(this).find('#phone-error').addClass('active')
                $('form .input-group #input-phone').addClass('error')

                setTimeout(() => {
                    $('form .input-group #input-phone').removeClass('error')
                }, 5000)
            } else if (email.val() == '' || emailValidate.test(email.val()) == false) {
                $(this).find('#email-error').addClass('active')
                $('form .input-group #input-email').addClass('error')

                setTimeout(() => {
                    $('form .input-group #input-email').removeClass('error')
                }, 5000)
            } else {
                $(this).find('small').removeClass('active')
                $('form .input-group input').val('')
                download();
            }
        })
    }
    // Feedback Slider
    //   if ($(".js-feedback-slider").length > 0) {
    //     $(".js-feedback-slider").owlCarousel({
    //       autoplay: true,
    //       autoplayTimeout: 4000,
    //       loop: true,
    //       lazyLoad: true,
    //       margin: 0,
    //       responsiveClass: true,
    //       items: 1,
    //       dots: false,
    //       navText: [
    //         '<span class="fas fa-chevron-left"></span>',
    //         '<span class="fas fa-chevron-right"></span>',
    //       ],
    //       rewindNav: true,
    //       nav: true,
    //     });
    //   }

    if ($(".cta-fixed").length > 0) {
        $(".cta-fixed .has-sub").click(function () {
            $(this).toggleClass("active");
        });
    }

    if ($(".chatbox").length > 0) {
        $(".chatbox").click(function () {
            $(this).toggleClass("active");
        });
    }

    // if ($(".owl-carousel-story").length > 0) {
    //     $(".owl-carousel-story").owlCarousel({
    //         items: 1,
    //         autoplayTimeout: 4000,
    //         nav: false,
    //         dots: false,
    //         lazyLoad: true,
    //         margin: 0,
    //         // dotsContainer: '.list-bookmark',
    //         navText: false,
    //         animateOut: "fadeOutCustom",
    //         autoplay: true,
    //         autoplayTimeout: 4000,
    //     });
    // $(".teachers-slider").on(
    //     "beforeChange",
    //     function (slider, index, current, next, prev) {
    //         // $(".teachers-slider .slick-slide .teacher-img").find('img').addClass('unanimation')
    //         $(".teachers-slider .slick-slide .teacher-img").find('img').removeClass('fadeInUp')
    //         $(".teachers-slider .slick-slide .desc").removeClass('fadeIn')
    //         setTimeout(() => {
    //             $(".teachers-slider .slick-active .teacher-img").find('img').addClass('fadeInUp')
    //             $(".teachers-slider .slick-active .desc").addClass('fadeIn')
    //         }, 100);
    //     })

    //     $(".owl-carousel-story").on("changed.owl.carousel", function (property) {
    //         var current = property.item.index;
    //         $(".icon-15").attr("data-index", current);
    //         $(".list-bookmark .item").removeClass("active");
    //         $(".list-bookmark .item").eq(current).addClass("active");
    //     });
    // }

    if ($(".teachers-slider").length > 0) {
        $(".teachers-slider").slick({
            prevArrow:
                '<span class="btn-arrow-infrastructure btn-prev fadeIn animated delay-500"><img src="../images/feedback/pre.svg" alt=""></span>',
            nextArrow:
                '<span class="btn-arrow-infrastructure btn-next fadeIn animated delay-500"><img src="../images/feedback/next.svg" alt=""></span>',
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,

            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
        // $(".teachers-slider").on(
        //     "beforeChange",
        //     function (slider, index, current, next, prev) {
        //         // $(".teachers-slider .slick-slide .teacher-img").find('img').addClass('unanimation')
        //         $(".teachers-slider .slick-slide .teacher-img")
        //             .find("img")
        //             .removeClass("fadeInUp");
        //         $(".teachers-slider .slick-slide .desc").removeClass("fadeIn");
        //         setTimeout(() => {
        //             $(".teachers-slider .slick-active .teacher-img")
        //                 .find("img")
        //                 .addClass("fadeInUp");
        //             $(".teachers-slider .slick-active .desc").addClass("fadeIn");
        //         }, 100);
        //     }
        // );

        // $(".teachers-slider").on("click", ".slick-slide", function (e) {
        //     e.stopPropagation();
        //     var index = $(this).index();
        //     console.log(index);
        //     if ($(".teachers-slider").slick("slickCurrentSlide") !== index) {
        //         $(".teachers-slider").slick("slickGoTo", index);
        //     }
        // });
    }

    if ($('.teachers-tabs-container').length > 0) {
        $('.active-video').on('click', function () {
            $('.teachers-slider-about').removeClass('active')
            $('.active-slide').removeClass('active')
            $('.video-about').addClass('active')
            $('.active-video').addClass('active')
        })

        $('.active-slide').on('click', function () {
            $('.video-about').removeClass('active')
            $('.active-video').removeClass('active')
            $('.teachers-slider-about').addClass('active')
            $('.active-slide').addClass('active')

            $(".teachers-slider .slick-slide .teacher-img")
                .find("img")
                .removeClass("fadeInUp");
            $(".teachers-slider .slick-slide .teacher-img").removeClass('go')
            $(".teachers-slider .slick-slide .desc").removeClass("fadeIn");
            $(".teachers-slider").removeClass("go");
            setTimeout(() => {
                $(".teachers-slider .slick-slide .teacher-img")
                    .find("img")
                    .addClass("fadeInUp");
                $(".teachers-slider .slick-slide .teacher-img").addClass('go')
                $(".teachers-slider .slick-slide .desc").addClass("fadeIn");
                $(".teachers-slider").addClass("go");
            }, 100);
        })
    }

    if ($(".infrastructure-slider").length > 0) {
        $(".infrastructure-slider").slick({
            prevArrow:
                '<span class="btn-arrow-infrastructure btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
            nextArrow:
                '<span class="btn-arrow-infrastructure btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            asNavFor: ".infrastructure-dots-slider",
        });
        $(".infrastructure-dots-slider").slick({
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            asNavFor: ".infrastructure-slider",
        });
    }
    if ($(".manager-slider").length > 0) {
        $(".manager-slider").slick({
            prevArrow:
                '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
            nextArrow:
                '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            centerPadding: 0,
            asNavFor: ".introduce-slider",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
        $(".introduce-slider").slick({
            asNavFor: ".manager-slider",
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
        });
    }

    if($('.section-english-summer').length>0){
        $('.video-slide').slick({
            prevArrow:
            '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
        nextArrow:
            '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        }),
        $('.avatar-slide').slick({
            prevArrow:
            '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
        nextArrow:
            '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        asNavFor : '.feedback-slide',
        fade: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        })
        $('.feedback-slide').slick({
            prevArrow:
            '<span class="btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
        nextArrow:
            '<span class="btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        asNavFor: '.avatar-slide',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        })
    }
    if($('.section-journey-summer').length>0){
        let parent = $('.section-journey-summer .list-item .item')
        let child = $('.section-journey-summer .list-item .item .date-box .main-date')
        child.each((e)=>{
           if(child.eq(e).text() === ''){
               parent.eq(e).addClass('null-date')
           }
        })
    }
    
});

// Modal noti
const notiBtn = document.querySelector(".noti");
const notiModal = document.querySelector(".noti-modal");
if (notiBtn) {
    notiBtn.addEventListener("click", function () {
        notiModal.classList.toggle("modal-display");
    });
}

// Tab Learning methods
const tabs = document.querySelectorAll("[data-tab-click]");
const tabContents = document.querySelectorAll("[data-tab-content]");

var indexTab = 0;
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        const click = document.querySelector(tab.dataset.tabClick);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabs.forEach((e) => {
            e.classList.remove("hiddenLeftToRight");
            e.classList.remove("hiddenRightToLeft");
            e.classList.remove("activeLeftToRight");
            e.classList.remove("activeRightToLeft");
        });
        if (index > indexTab) {
            tabs[indexTab].classList.add("hiddenLeftToRight");
            tab.classList.add("activeLeftToRight");
        } else if (index < indexTab) {
            tabs[indexTab].classList.add("hiddenRightToLeft");
            tab.classList.add("activeRightToLeft");
        }
        indexTab = index;
        click.classList.add("active");
    });
});

$('.wrapper-tabs-learning .prev-tab').click(()=>{
    $(`.wrapper-tabs-learning .list-tab li[data-tab-click='#tab-${indexTab}']`).trigger('click');
    document.querySelector('.list-tab').scrollLeft -= 120;
})

$('.wrapper-tabs-learning .next-tab').click(()=>{
    $(`.wrapper-tabs-learning .list-tab li[data-tab-click='#tab-${indexTab + 2}']`).trigger('click');
    document.querySelector('.list-tab').scrollLeft += 120;
})

// Accordion
// var acc = document.querySelectorAll(".accordion");
// acc.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("active");
//   });
// });

// FAQ JS
$(document).ready(function () {
    if ($(".accordion").length > 0) {

        //Update 21/02/2022 auto next accordion

        let indexAccordion = 0;
        let indexAccordionSummer = 0
        const autoNextAccordion =
            setInterval(()=>{
                if($('.box-accordion').hasClass('go')){
                    if(indexAccordion > 3){
                        indexAccordion = 0;
                    }
                    $(".accordion .accordion-title").eq(indexAccordion).trigger('click');
                }
                if($('.summer-accordion').hasClass('go')){
                    if(indexAccordionSummer > 2){
                        indexAccordionSummer = 0;
                    }
                    $(".accordion .accordion-title").eq(indexAccordionSummer).trigger('click');
                }
             },4000)
        
       

        //end update
        $(".accordion .accordion-title").on("mouseup", function(){
           clearInterval(autoNextAccordion)
        })
        $(".accordion .accordion-title").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").next(".accordion-content").slideUp();
            } else {
                $(".accordion .accordion-title").removeClass("active");
                $(".accordion .accordion-content").slideUp();
                $(this).toggleClass("active").next(".accordion-content").slideToggle();
            }
            var index_item = $(this).parents(".accordion").index();
            indexAccordion= index_item + 1;
            indexAccordionSummer = index_item + 1;

            $(".wrapper-vision .vision-image .box-image").removeClass("active");
            $(".wrapper-vision .vision-image .box-image")
                .eq(index_item)
                .addClass("active");

            $(".companion-accordion .companion-image .box-image").removeClass("active");
            $(".companion-accordion .companion-image .box-image")
                .eq(index_item)
                .addClass("active");
        });
        $(".companion-accordion  .accordion .accordion-title").first().trigger("click");
        // $(".accordion .accordion-title").first().trigger("click");
        $(".wrapper-vision .vision-image .box-image").first().addClass("active");
        $(".companion-accordion .companion-image .box-image").first().addClass("active");

        $(".accordion1 .accordion-title").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").next(".accordion-content").slideUp();
            } else {
                $(".accordion1 .accordion-title").removeClass("active");
                $(".accordion1 .accordion-content").slideUp();
                $(this).toggleClass("active").next(".accordion-content").slideToggle();
            }
        });
    }
});

$(document).ready(function (){
    if($(".skill-land .skill-land-main").length>0){
        $(".skill-land .skill-land-main .skill-item .skill-item-img").on("click", function(){
            if($(this).hasClass("active")){
                $(this).removeClass("active")
            } else{
                $(this).addClass("active")
            }
        })
    }
})

function openMenuMobile() {
    const body = document.body;
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.matches(".mobile-menu-hidden")) {
        mobileMenu.classList.remove("mobile-menu-hidden");
        mobileMenu.classList.add("mobile-menu-active");
        $('.close-mobile-menu').addClass('active')
        setTimeout(() => (body.style.position = "fixed"), 500);
        // setTimeout(() => mobileMenu.style.display = "none", 500)
    } else {
        mobileMenu.classList.add("mobile-menu-hidden");
        setTimeout(() => mobileMenu.classList.remove("mobile-menu-active"), 500);
        body.style.position = "static";
        $('.close-mobile-menu').removeClass('active');
    }
}

$("#mobile-menu .sub-menu > span").click(function () {
    if ($(this).closest(".sub-menu").is(".active")) {
        $(this).closest(".sub-menu").removeClass("active");
        $(this).siblings("ul").children(".arrow-menu").removeClass("active")
    } else {
        $("#mobile-menu .sub-menu").removeClass("active");
        $(this).closest(".sub-menu").addClass("active");
    }
});
$("#mobile-menu .sub-menu ul li > i").on("click", function(){
    if($(this).closest(".arrow-menu").is(".active")){
        $(this).closest(".arrow-menu").removeClass("active");
    } else{
        $("#mobile-menu .sub-menu ul .arrow-menu").removeClass("active")
        $(this).closest(".arrow-menu").addClass("active");
    }
})
function download() {
    let downloader = document.getElementById('visible-download')
    downloader.click();
}

//check language
const lang = localStorage.getItem('apollo-locale');

if(!lang){
    $('.section-footer .form-add-ace').removeClass('en'); //vi
}
else if(lang === 'en'){
    $('.section-footer .form-add-ace').addClass('en'); //en
}
else{
    $('.section-footer .form-add-ace').removeClass('en'); //vi
}

