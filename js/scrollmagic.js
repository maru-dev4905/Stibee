var introShape1 = $(".intro-title-img img:nth-child(1)");
var introShape2 = $(".intro-title-img img:nth-child(2)");
var header = $(".sec-header");
var introCircleGray = $(".gray-group");
var introCircleRed = $(".red-group");

var controller = new ScrollMagic.Controller();

var tween1 = TweenMax.to(introShape1, 1, {
    rotation:360
});
var tween2 = TweenMax.to(introShape1, 1, {
    rotation:-360
});

var scene = new ScrollMagic.Scene({
    triggerElement : "#trigger1",
    duration: $(window).height() / 2
})
.setTween(tween1)
.addTo(controller)

var scene = new ScrollMagic.Scene({
    triggerElement : "#trigger1-1",
    duration: $(window).height()
})
.setTween(tween2)
.addTo(controller)