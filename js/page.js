$(document).ready(function () {
    console.log("page.js Ready");
    // sections-parents blog load more blog
    $("body").on("click", ".section-parents .wrap-load-more", function(e){
        e.preventDefault();
        let blogEles = $(".section-parents .list-side-img.hidden");

        blogEles.each(function( index ) {
            if(index <= 2) $(this).removeClass("hidden");
            if(blogEles.length <= 3) $(".section-parents .wrap-load-more").addClass("hidden");
            });
    })

    // Parent page - Load more blog
    $("body").on("click", "#parent-blog .btn-load-more", function(e){
        e.preventDefault();
        let blogEles = $("#parent-blog .blog-item.hidden");

        blogEles.each(function( index ) {
            if(index <= 2) $(this).removeClass("hidden");
            if(blogEles.length <= 3) $("#parent-blog .btn-load-more").addClass("hidden");
          });
    })

    // Sub Parent page - Load more blog
    $("body").on("click", "#parent-sub-blog .content .btn-load-more", function(e){
        e.preventDefault();
        let blogEles = $("#parent-sub-blog .content .blog-item.hidden");

        blogEles.each(function( index ) {
            if(index <= 1) $(this).removeClass("hidden");
            if(blogEles.length <= 2) $("#parent-sub-blog .content .btn-load-more").addClass("hidden");
          });
    })

    // highlight blog load more blog
    $("body").on("click", "#parent-sub-blog .wrap-blog-highlight .btn-load-more", function(e){
        e.preventDefault();
        let blogEles = $("#parent-sub-blog .wrap-blog-highlight .blog-item.hidden");

        blogEles.each(function( index ) {
            if(index <= 3) $(this).removeClass("hidden");
            if(blogEles.length <= 4) $("#parent-sub-blog .wrap-blog-highlight .btn-load-more").addClass("hidden");
          });
    })

    // another blog load more blog
    $("body").on("click", "#blog-another .btn-load-more", function(e){
        e.preventDefault();
        let blogEles = $("#blog-another .blog-item.hidden");

        blogEles.each(function( index ) {
            if(index <= 2) $(this).removeClass("hidden");
            if(blogEles.length <= 3) $("#blog-another .btn-load-more").addClass("hidden");
            });
    })

    // Modal
    function closeModal(){
        $(".modal").removeClass("show");
        $(".modal").addClass("hide");
        $('html, body').css({
            overflowY: 'auto'
        });
    }

    function showModal(){
        $(".modal").removeClass("hide");
        $(".modal").addClass("show");
        $('html, body').css({
            overflowY: 'hidden'
        });
    }

    $("body").on("click", "[data-close-modal]", function(e){
        e.preventDefault();
        closeModal();
    });

    $("body").on("click", "[data-open-modal]", function(e){
        e.preventDefault();
        showModal();
    });
    

    // asp 
    widthbody = $("body").width();
    if (widthbody < 768){
        $('.partner-box').slick({
            prevArrow:
            '<span class="partner-btn btn-arrow btn-prev"><img src="../images/feedback/pre.svg" alt=""></span>',
            nextArrow:
            '<span class="partner-btn btn-arrow btn-next"><img src="../images/feedback/next.svg" alt=""></span>',
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
    }
   
});
