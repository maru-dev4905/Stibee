var title       = $(".sec9 .title");
var newBtn      = $(".sec9 .title button");
var img         = $(".sec9 .title img");
var shapeWrap1  = $(".sec9 .shape1");
var shapeWrap2  = $(".sec9 .shape2");
var shapeText   = $(".sec9 .shape-text");
var NEW_TEXT    = "새로운 기회";

var shapeShowCheck = false;

newBtn.click(function(){
    $(this).addClass("active");
    $(this).text(NEW_TEXT);
    
    img.addClass("active");

    if(!shapeShowCheck){
        shapeWrap1.addClass("active");
        shapeShowCheck = true;
    }else{
        return false;
    }

    setTimeout(function() {
        shapeWrap1.removeClass("active");
            setTimeout(function(){
            shapeWrap2.addClass("active");
            shapeText.addClass("active");
            title.addClass("up");
            
        }, 250);
    }, 750);

})  