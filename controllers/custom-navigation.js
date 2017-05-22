$.fn.visibleFragment = function () {
    var context = $(this);
    var isInsideSwiper = context.parents(".swiper-container").length > 0;
    if (isInsideSwiper) {
        var swiperId = context.parents(".swiper-container").eq(0).attr("swiper-id");
        var index = context.index()
        console.log(swiperId, index);

        // Create the event
        var event = new CustomEvent(swiperId, {"detail": index});

// Dispatch/Trigger/Fire the event
        document.dispatchEvent(event);

    }





}