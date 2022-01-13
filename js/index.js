$(function () {
  //창의 크기가 변경하면 수행하는 resize이벤트
    $(window).resize(function () {
      var win_width=$(this).width();
      //console.log(win_width);
      if(win_width <= 1024) { //테블릿이거나 모바일화면
        $('nav').prependTo('.h-top');
        $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO-b.svg');
        $('.main-menu').off('mouseenter'); 
        $('.main-menu').off('mouseleave');
      }else { //데스크탑 화면
        $('.main-menu').on({
          mouseenter:function () {
            $('.sub-menu, .sub-bg').stop().show();
          },
          mouseleave:function () {
            $('.sub-menu, .sub-bg').stop().hide();
          }
        });
        $('nav').appendTo('header');
        $('.jordan-logo').find('img').attr('src','images/AIR-JORDAN-LOGO.svg');
       /* $('.main-menu').hover(function () {
          $('.sub-menu, .sub-bg').stop().show();
        }, function () {
          $('.sub-menu, .sub-bg').stop().hide();
        });*/
      }
      if(win_width <= 480) {
        $('.main-01 img').attr('src','images/M-01-mobile.png');
        $('.main-02 img').attr('src','images/M-02-mobile.png');
        $('.main-03 img').attr('src','images/M-03-mobile.png');
      }else {
        $('.main-01 img').attr('src','images/M-01.png');
        $('.main-02 img').attr('src','images/M-02.png');
        $('.main-03 img').attr('src','images/M-03.png');
      }
    });
    //메뉴 아이콘
    $('.menu-btn').click(function () {
      $('#index-wrap').css('filter','blur(10px)');
      $('body, html').css({
        height:'100vh',
        overflow:'hidden'
      });
      $('#menu-area').show();
      $('.h-top').animate({
        right:0
      },'fast');
    });
    //메인 메뉴를 클릭하면
    $('.main-menu>li>a').click(function () {
      $(this).next().animate({
        left:0
      },'fast');
    });
    //서브메뉴의 ALL를 클릭하면
    $('.all>a').click(function () {
      $(this).parents('.sub-menu').animate({
        left:'150%'
      },'fast');
    });
    $('#menu-area').on('mouseup', function (event) {
      //console.log($(this).has(event.target).length);
      if($(this).has(event.target).length==0) {
        $('#index-wrap').css('filter','blur(0px)');
        $('body, html').css({
          height:'auto',
          overflow:'visible'
        });
        
        $('.h-top').animate({
          right:'-100%'
        },'fast');
        $('#menu-area').hide();
      }
    });
    //swiper 플러그인 - 슬라이드
    var swiperSlide=new Swiper('.Featured-slide', {
      sliderPerView:'auto',
      spaceBetween:8,
      pagination: {
        el:'.f-pager',
        clickable:true,
        type:'fraction'
      },
      navigation: {
        prevEl:'.f-prev',
        nextEl:'.f-next'
      },
      breakpoints: {
        1025: {
          slidesPerView:3,
          spaceBetween:24
        },
        480: {
          sliderPerView:'auto',
          spaceBetween:16
        }
      }
    });
    //이벤트 강제발생
    $(window).trigger('resize');
}); 
