var swiper = new Swiper('.lank-swiper', {
    slidesPerView: 2,
    centeredSlides: true,
    pagination:{
        el: '.lank-pagination'
    }
});
var swiperCard = new Swiper('.card-swiper1',{
    slidesPerView: 2,
    centeredSlides: true,
    pagination:{
        el: ".card-pagination1"
    }
});
var swiperCard2 = new Swiper('.card-swiper2',{
    slidesPerView: 2,
    centeredSlides: true,
    pagination:{
        el: ".card-pagination2"
    }
});

var swiper2 = new Swiper('.card-group-swiper',{
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination:{
        el: '.card-group-pagination'
    }
});

var swiper3 = new Swiper('.mo-swiper',{
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination:{
        el: '.mo-pagination'
    }
})
swiper3.on("slideChange",function(idx){

    var r_idx = swiper3.activeIndex;
    if(r_idx == 1){
        $(".sec10 .title h2").html(`
            유료 콘텐츠 발행, 광고 집행 등
            <br>
            뉴스레터 발행인들의
            <br>
            <span>'수익 창출의 기회'</span>
        `)
    }else if(r_idx == 2){
        $(".sec10 .title h2").html(`
            강의, 강연, 기고, 인터뷰 등
            <br>
            뉴스레터 발행인들의
            <br>
            <span>'퍼스널 브랜딩 기회'</span>
        `)
    }else if(r_idx == 3){
        $(".sec10 .title h2").html(`
            강의, 강연, 기고, 인터뷰 등
            <br>
            뉴스레터 발행인들의
            <br>
            <span>'퍼스널 브랜딩 기회'</span>
        `)
    }else if(r_idx == 4){
        $(".sec10 .title h2").html(`
            취업, 이직 등
            <br>
            뉴스레터 발행인들의
            <br>
            <span>'커리어 전환의 기회'</span>
        `)        
        $(".sec10 .title h2 span").text("'커리어 전환의 기회'");
    }
})

$(".sec7 .card-group.mo .swiper-wrapper div").click(function(){
    $(".sec7 .card-group.mo .swiper-wrapper div").removeClass("active");
    $(this).addClass("active");
})
$(".sec8 .card-group.mo .swiper-wrapper div").click(function(){
    $(".sec8 .card-group.mo .swiper-wrapper div").removeClass("active");
    $(this).addClass("active");
})
