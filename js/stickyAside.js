$(window).on("load", function () {
    if($('.sidebar').length > 0){
        var $sticky = $('.sidebar');
        var $stickyrStopper = $('.sticky-stop');
        if (!!$sticky.offset()) { // make sure ".sticky" element exists
      
          var generalSidebarHeight = $sticky.innerHeight();
          var stickyTop = $sticky.offset().top;
          var stickOffset = 0;
          var stickyStopperPosition = $stickyrStopper.offset().top;
          var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
          var diff = stopPoint + stickOffset;
      
          $(window).scroll(function(){ // scroll event
            var windowTop = $(window).scrollTop(); // returns number
            if (stopPoint < windowTop) {
                $sticky.css({ position: 'absolute', top: diff-265 });
            } else if (stickyTop < windowTop+stickOffset) {
                $sticky.css({ position: 'fixed', top: stickOffset });
            } else {
                $sticky.css({position: 'absolute', top: 'initial'});
            }
          });
      
        }
    }
})
