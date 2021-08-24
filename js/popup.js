var closeBtn    = $(".popup-close");
var popup       = $(".popup-wrap");
var termsOpen   = $(".terms-popup-open-btn");
var adOpen      = $(".ad-popup-open-btn");

termsOpen.click(function(){
    popup.eq(0).addClass("show");
})
adOpen.click(function(){
    popup.eq(1).addClass("show");
})

closeBtn.click(function(){
    popup.removeClass("show");
})