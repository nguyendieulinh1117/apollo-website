if ($(window).width() > 991) {
    var position = $(window).scrollTop();
    var page = $("html, body");

    function scrolled(current, next, ontop) {
        var scrollDistance = $(window).scrollTop();
        // console.log(current);
        if (
            scrollDistance > ($(current).position().top + $(current).innerHeight() / 2)
            && scrollDistance < ($(current).position().top + $(current).innerHeight() - 50)) {
            console.log('scroll active');
            page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
                page.stop();
            });
            page.animate({ scrollTop: $(next).position().top + ontop }, 500, function () {
                // page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });
            // setTimeout(function() {
            //     page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            // }, 500)
            return false;
        } else {
            // console.log('scroll disable');
        }
    }
    // $(window).on('scroll', scrolled);
    // $(window).bind('scroll', function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            // console.log('scrollDown');
            scrolled('.feedback-section', '.jouney-section', 150);
            scrolled('.jouney-section', '.vision-section', 150);
            scrolled('.vision-section', '.section-teachers', 0);
            scrolled('.section-teachers', '.infrastructure-section', 200);
            scrolled('.infrastructure-section', '.message-section', 0);
            scrolled('.message-section', '.section-footer-init', 100);
        } else {
            // console.log('scrollUp');
        }
        position = scroll;
    })
}

$(document).ready(function () {
    let bgFooterElement = document.querySelector("#video-animation-footer");
    let positionFooter = $('.section-footer-init').position().top;
    let isTrigger = true;

    const playVideoFooter = () => {
        let currentPosition = $(window).scrollTop();

        if (currentPosition > positionFooter) {
            if ($('#video-animation-footer').hasClass('go')) {
                // if (isTrigger) {
                bgFooterElement.play();
                // }
            } else {
                // isTrigger = true;
                bgFooterElement.currentTime = 0;
            }
        }
    }

    bgFooterElement.ontimeupdate = () => {
        if (bgFooterElement.currentTime >= 2.6) {
            bgFooterElement.pause();
        }
        // isTrigger = false;
    }

    document.addEventListener("scroll", playVideoFooter);
})