
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });

//ドロワーメニュー
function checkWindowWidth() {
  // １，ウィンドウの幅を取得
  const windowWidth = $(window).width();
  // ２．768px以上の場合、ドロワーメニューをフェードアウトさせる
  if (windowWidth >= 768) {
    $(".js-drawer").fadeOut();
    $(".js-hamburger").removeClass("is-active");
  }
}
// ３．ドキュメントが読み込まれた時とウィンドウのサイズが変わった時に実行
$(document).ready(function () {
  checkWindowWidth(); // 初期表示時にもチェック
});
$(window).resize(function () {
  checkWindowWidth(); // ウィンドウのサイズが変わったら再度チェック
});
// ４．ハンバーガーメニューがクリックされたときの処理はそのままでOK
$(".js-hamburger,.js-drawer").click(function () {
  $(".js-hamburger").toggleClass("is-active");
  $(".js-drawer").fadeToggle();
});


//headerの背景変更
$(function () {
$(window).on('scroll',function () {
    if ($('.mv,.contact-mv').height() < $(this).scrollTop()) {
        $('.js-header').addClass('change-color');
  } else {
        $('.js-header').removeClass('change-color');
  }
});
});

//MVスライダー
var swiper = new Swiper(".js-mv-swiper", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 4000,
},
speed: 2000,
fadeEffect: {
    crossFade: true
},
});

//campaign スライダー
var swiper = new Swiper(".js-campaign-swiper", {
  //slidesPerView: "auto",
  //centeredSlides: true,
  spaceBetween: 30,
  //追加分
  loopedSlides: 4,
  loop: true, // ループ有効
  //slidesPerView: 4.5, // 一度に表示する枚数
  speed: 4000, // ループの時間
  width: 280, //card width
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    //delay: 0, // 途切れなくループ
    delay: 200,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      spaceBetween: 40,
      width: 333,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(function () {
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

//画像アニメーション　
//1・要素の取得とスピードの設定
var box = $('.js-color'),
    speed = 700;  
 
//２.js-colorの付いた全ての要素に対して下記の処理を行う
box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;
 
    image.css('opacity','0');
    color.css('width','0%');
    //３．inviewを使って背景色が画面に現れたら処理をする
    color.on('inview', function(){
        if(counter == 0){
        $(this).delay(200).animate({'width':'100%'},speed,function(){
                   image.css('opacity','1');
                   $(this).css({'left':'0' , 'right':'auto'});
                   $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
     });
});

//to top　ボタン
$(function () {
  const pageTop = $(".js-page-top");
  pageTop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
  pageTop.click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

});
