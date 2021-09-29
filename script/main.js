$(".hm > ul > li").mouseover(function(){
    $(this).find(".ma").stop().slideDown(200);
});
$(".hm > ul > li").mouseout(function(){
    $(this).find(".ma").stop().slideUp(200);
});