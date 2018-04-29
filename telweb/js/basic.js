
jQuery(".index_slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});

jQuery(".slideTabBox").slide({delayTime:0});

// 内容页
function anchorGoWhere(nav,yangshi,sudu,toubu){
    a=nav+" a";
    $(a).click(function(){
        tis=$(this);
        o=tis.attr("href");
        $("html,body").animate({scrollTop: $(o).offset().top-toubu}, sudu);
        return false;
    });
    $(window).scroll(function() {
        t = $(this).scrollTop();
        $(a).each(function(){
            d=$(this).attr("href");
            y = $(d).offset().top;
            jl=t-y;
            $(this).parent().removeClass(yangshi);
            if (-81<jl && jl<$(d).height()-40){
                $(this).parent().addClass(yangshi);
            }
        });
    });
}
anchorGoWhere("#show_nav","active",500,40);
$("#show_nav").scrollFix({distanceTop:0});