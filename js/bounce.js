var bounceBall = $(".circle.bg-red:not(.sec9 .circle)");
setInterval(() => {
        if(bounceBall.hasClass("bounce")){
            bounceBall.removeClass("bounce");
        }else{
            bounceBall.addClass("bounce");
        }
    }, 1000
);