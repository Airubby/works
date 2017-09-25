$(function(){

//搜索所有产品
$("#divselect").on("click",function(){
    $("#headProduct").toggle();
});
$("#headProduct li").on("click",function(){
    $("#headProduct li").show();
    $("#divselect span").html($(this).find("a").html());
    $(this).hide();
});
//侧边导航
$("#indexproduct li").on("click",function(){
    $("#tocityN").show();
    $("#tocityN .TClistN").hide();
    $("#tocityN .TClistN").eq($(this).index()).show();
});
$("#tocityN .closediv").on("click",function(){
    $(this).parent().hide();
    $("#tocityN").hide();
});

//幻灯片
jQuery(".index_slide").slide({
    mainCell: ".bd ul",
    autoPlay: true,
    effect: "fold"
});
//广告切换
function slide() {
    var slide_index = $('#slide_bd').children().length;
    var slide_width = (24 * slide_index) / 2;
    for (var i = 0; i < slide_index; i++) {
        if (i == 0) {
            $('#slide_hd').append("<li class='on'></li>");
        } else {
            $('#slide_hd').append('<li></li>');
        }
    }
    $('.ad_slide .hd').css({
        "margin-left": -(slide_width)
    });
    jQuery(".ad_slide").slide({
        mainCell: ".bd ul",
        autoPlay: true,
        effect: "fold"
    });
}
slide();

//预定滚动
jQuery(".TmyCentr").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:1,interTime:100});
//线路切换
jQuery(".slideTabBox").slide({delayTime:0});




});






































