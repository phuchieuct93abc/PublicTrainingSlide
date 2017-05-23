$.fn.visibleFragment = function () {
    var context = $(this);
    var isInsideSwiper = context.parents(".swiper-container").length > 0;
    if (isInsideSwiper) {
        var swiperId = context.parents(".swiper-container").eq(0).attr("swiper-id");
        var index = context.index()

        // Create the event
        var event = new CustomEvent(swiperId, {"detail": index});

// Dispatch/Trigger/Fire the event
        document.dispatchEvent(event);

    }else if( context.parents(".mvc-wrapper").length > 0){
        var index = context.index();                    
        var event = new CustomEvent("mvc", {"detail": index});
        document.dispatchEvent(event);       
    }
}