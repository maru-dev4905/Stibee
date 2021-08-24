$(".tooltip1").addClass("show");
$(".sec6 #pie span").eq(0).addClass("active");

$("#pie [class*='circle']").mouseover(function(){
    var thisNumber = $(this).index();

    show_tooltip(thisNumber);
})

$("#pie [class*='circle']").mouseout(function(){
    var thisNumber = $(this).index();

    hide_tooltip(thisNumber);
})

$(".legend-wrap span").mouseover(function(){
    var thisNumber = $(this).index();

    show_tooltip(thisNumber);
})

$(".legend-wrap span").mouseout(function(){
    var thisNumber = $(this).index();

    hide_tooltip(thisNumber);
})

$(`[class*="tooltip"]:not(.tooltip-wrap)`).mouseover(function(){
    var thisClass = $(this).attr('class');
    thisClass = thisClass.charAt(thisClass.length - 1) - 1;
    var thisNumber = thisClass;

    show_tooltip(thisNumber);
})

$(`[class*="tooltip"]:not(.tooltip-wrap)`).mouseout(function(){
    var thisClass2 = $(this).attr('class');
    thisClass2 = thisClass2.charAt(thisClass2.length - 6) - 1;
    var thisNumber2 = thisClass2;

    hide_tooltip(thisNumber2);
})
function show_tooltip(idx){
    if($(".sec6 #pie span").eq(0).hasClass("active")){
        $("[class*='tooltip']").removeClass("show");
        $(".sec6 #pie span").removeClass("show");
    }
    $(`.tooltip${idx + 1}`).addClass("show");
    $(".sec6 #pie span").eq(idx).addClass("active");
}

function hide_tooltip(idx){
    $(`.tooltip${idx + 1}`).removeClass("show");
    $(".sec6 #pie span").eq(idx).removeClass("active");
}