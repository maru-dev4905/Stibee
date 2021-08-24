var card = $(".sub-section-card");

$('#fullpage').fullpage({
    scrollingSpeed: 750,
    scrollOverflow:true,
    onLeave: function(origin, destination, direction){
        if(destination >= 2){
            $(".sec-header").addClass("fixed");
        }else{
            $(".sec-header").removeClass("fixed");
        }
        if(destination >= 4){
            $(".card .card-item .graph li .counter-wrap").removeClass("show");
            $(".card .card-item .graph .bar span").css({
                opacity:0
            })
        }
        if(destination >= 5){
            setTimeout(function(){
                $(".sec5 .card .card-item .graph li:nth-child(1) .counter-wrap").addClass("show");
            },500)
            setTimeout(function(){
                $(".sec5 .card .card-item .graph li:nth-child(2) .counter-wrap").addClass("show");
            },600)
            setTimeout(function(){
                var count1 = new countUp.CountUp("count1", 21.8,{decimalPlaces:1,startVal:0.1})
                var count2 = new countUp.CountUp("count2", 12.9,{decimalPlaces:1,startVal:0.1})
                count1.start();
                count2.start();
                var count5 = new countUp.CountUp("count5", 21.8,{decimalPlaces:1,startVal:0.1})
                var count6 = new countUp.CountUp("count6", 12.9,{decimalPlaces:1,startVal:0.1})
                count5.start();
                count6.start();
            },500)
            setTimeout(function(){
                var count3 = new countUp.CountUp("count3", 5.4,{decimalPlaces:1,startVal:0.1})
                var count4 = new countUp.CountUp("count4", 2.1,{decimalPlaces:1,startVal:0.1})
                count3.start();
                count4.start();
                var count7 = new countUp.CountUp("count7", 5.4,{decimalPlaces:1,startVal:0.1})
                var count8 = new countUp.CountUp("count8", 2.1,{decimalPlaces:1,startVal:0.1})
                count7.start();
                count8.start();
            },700)

            setTimeout(function(){
                $(".card .card-item .graph .bar span").css({
                    opacity:1
                })
            },900)
        }
        if(destination >= 6){
            setTimeout(function(){
                $(".sec5-2 .card .card-item .graph li:nth-child(1) .counter-wrap").addClass("show");
            },500)
            setTimeout(function(){
                $(".sec5-2 .card .card-item .graph li:nth-child(2) .counter-wrap").addClass("show");
            },600)
            
            setTimeout(function(){
                var count9 = new countUp.CountUp("count9", 42.5,{decimalPlaces:1,startVal:0.1})
                var count10 = new countUp.CountUp("count10", 11.7,{decimalPlaces:1,startVal:0.1})
                count9.start();
                count10.start();
                var count13 = new countUp.CountUp("count13", 42.5,{decimalPlaces:1,startVal:0.1})
                var count14 = new countUp.CountUp("count14", 11.7,{decimalPlaces:1,startVal:0.1})
                count13.start();
                count14.start();
            },500)
            setTimeout(function(){
                var count11 = new countUp.CountUp("count11", 10.2,{decimalPlaces:1,startVal:0.1})
                var count12 = new countUp.CountUp("count12", 1.9,{decimalPlaces:1,startVal:0.1})
                count11.start();
                count12.start();
                var count15 = new countUp.CountUp("count15", 10.2,{decimalPlaces:1,startVal:0.1})
                var count16 = new countUp.CountUp("count16", 1.9,{decimalPlaces:1,startVal:0.1})
                count15.start();
                count16.start();
            },700)

            setTimeout(function(){
                $(".card .card-item .graph .bar span").css({
                    opacity:1
                })
            },900)
        }
        if(destination >= 11){

            if($(window).width() <= 768){
                if($(destination == 11)){

                }
            }else{
                setTimeout(function(){
                    $(".fix-title").addClass("show");
                },500);
                if(destination == 11){
                    card.eq(0).addClass("show");
                    card.eq(0).removeClass("back");
                    card.eq(1).removeClass("show");
                }else if(destination == 12){
                    card.eq(0).addClass("back");
                    card.eq(1).addClass("show");
                    card.eq(1).removeClass("back");
                    card.eq(2).removeClass("show");
                    $(".fix-title h2").html(`
                        유료 콘텐츠 발행, 광고 집행 등
                        <br>
                        뉴스레터 발행인들의
                        <br class="mo">
                        <span>'수익 창출의 기회'</span>
                    `)
                    if(direction == "up"){
                        card.eq(0).css("opacity",1);
                        card.eq(1).css("opacity",1);
                    }
                }else if(destination == 13){
                    card.eq(1).addClass("back");
                    card.eq(2).addClass("show");
                    card.eq(2).removeClass("back");
                    card.eq(3).removeClass("show");
                    
                    if(direction == "down"){
                        card.eq(0).css("opacity",0);
                        card.eq(1).css("opacity",0);
                    }
                    $(".fix-title h2").html(`
                        강의, 강연, 기고, 인터뷰 등
                        <br>
                        뉴스레터 발행인들의
                        <br class="mo">
                        <span>'퍼스널 브랜딩 기회'</span>
                    `);
    
                }else if(destination == 14){
                    card.eq(2).addClass("back");
                    card.eq(3).addClass("show");
                    card.eq(3).removeClass("back");
                    card.eq(4).removeClass("show");
    
                    if(direction == "up"){
                        card.eq(2).css("opacity",1);
                        card.eq(3).css("opacity",1);
                    }

                    $(".fix-title h2").html(`
                        강의, 강연, 기고, 인터뷰 등
                        <br>
                        뉴스레터 발행인들의
                        <br class="mo">
                        <span>'퍼스널 브랜딩 기회'</span>
                    `);
                }else if(destination == 15){
                    card.eq(3).addClass("back");
                    card.eq(4).addClass("show");
                    card.eq(4).removeClass("back");
                    card.eq(5).removeClass("show");
                    $(".fix-title h2").html(`
                        취업, 이직 등
                        <br>
                        뉴스레터 발행인들의
                        <br class="mo">
                        <span>'커리어 전환의 기회'</span>
                    `)
                    if(direction == "down"){
                        card.eq(2).css("opacity",0);
                        card.eq(3).css("opacity",0);
                    }
    
                }else if(destination == 16){
                    card.eq(4).addClass("back");
                    card.eq(5).addClass("show");
                    card.eq(5).removeClass("back");
                    card.eq(6).removeClass("show");
                    $(".fix-title").removeClass("hide");
                    card.removeClass("hide");
    
                }else if(destination == 17){
                    $(".fix-title").addClass("hide");
                    card.eq(5).addClass("back");
                    card.addClass("hide");
                }

            }
        }
        else{
            $(".fix-title").removeClass("show");
            $(".sub-section-card").removeClass("show");
            $(".sub-section-card").removeClass("back")
        }
    }
});

$(".moveTo").click(function(){
    if($(window).width() <= 768){
        $.fn.fullpage.moveTo(12)
    }else{
        $.fn.fullpage.moveTo(17);
        $(".fix-title").addClass("hide");
        card.addClass("show");
        card.addClass("back");
        card.addClass("hide")
        $(".fix-title h2").html(`
            취업, 이직 등
            <br>
            뉴스레터 발행인들의
            <br class="mo">
            <span>'커리어 전환의 기회'</span>
        `)
        card.eq(0).css("opacity",0);
        card.eq(1).css("opacity",0);
        card.eq(2).css("opacity",0);
        card.eq(3).css("opacity",0);
    }
})
$(".up-btn").click(function(){
    $.fn.fullpage.moveTo(1);
})
$(window).ready(function(){
    if($(window).width() <= 768){
        $(".pc-sec").remove();
        $(".sub-section").remove();
    }
})
$(window).resize(function(){
    if($(window).width() <= 768){
        $(".pc-sec").remove();
        $(".sub-section").remove();
    }
})

document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
            event.preventDefault(); 
        } 
    }, false);

var lastTouchEnd = 0; 

document.documentElement.addEventListener('touchend', function (event) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault(); 
    } lastTouchEnd = now; 
}, false);