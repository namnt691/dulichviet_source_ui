function get_height(){return $(window).innerHeight()}vnTMain={init:function(){}},jQuery(window).ready(function(){function e(e,n,i){e.addClass("lazyloading"),e.attr("data-eff",n),e.attr("data-delay",i)}vnTMain.init(),$("#banner_main").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,fade:!0,autoplay:!0,autoplaySpeed:5e3,speed:800}),$("#banner_main").addClass("active"),$("#banner_main .wrapper").css({height:get_height()}),$(window).resize(function(e){$("#banner_main .wrapper").css({height:get_height()})}),e($(".wrapLeft"),"fadeInLeft","0.5"),e($(".wrapRight"),"fadeInRight","0.5"),e($(".wrapTop"),"fadeInUp","0.5"),e($(".inner .innerUp"),"fadeInUp","1"),e($(".chiphi"),"fadeIn","1.5"),time=1.5,$(".chiphi .item").each(function(){e($(this),"fadeInUp",time),time+=.5}),$(".toRegister").click(function(){var e=$(this).attr("href"),n=$(e).offset().top-145;return $("html,body").animate({scrollTop:n},1e3),!1})});