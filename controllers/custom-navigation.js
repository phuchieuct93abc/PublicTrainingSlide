$.fn.visibleFragment = function () {
    var context = $(this);
    var isInsideSwiper = context.parents(".swiper-container").length > 0;
    if (isInsideSwiper && context.attr('no-slide')==null) {
        var swiperId = context.parents(".swiper-container").eq(0).attr("swiper-id");
        var index = context.index()

        var event = new CustomEvent(swiperId, {"detail": index});

        document.dispatchEvent(event);

    } else if (context.parents(".mvc-wrapper").length > 0) {
        var index = context.index();
        var event = new CustomEvent("mvc", {"detail": index});
        document.dispatchEvent(event);
    } else {
        console.log(123);
        var fragmentId = context.attr("fragment-id");
        var event = new CustomEvent("fragment", {"detail": fragmentId});
        document.dispatchEvent(event);
    }
}