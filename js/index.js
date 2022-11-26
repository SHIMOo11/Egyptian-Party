$('.open').click(function(){
    $('.sideBar').animate({'width':"25%"},1000);
    $('.open').animate({"left":"25%"},1000);
    // $('.sideBar').animate({'left':"0%"},1000);
})
$('.close').click(function(){
    $('.sideBar').animate({'width':"0%"},2000);
    $('.open').animate({"left":"15px"},2000);
    // $('.sideBar').animate({'left':"0%"},1000);
})
$("a[href^='#']").click(function(){
    let currentHref = $(this).attr('href');
    let currentOffset = $(currentHref).offset().top;
    $('body,html').animate({scrollTop:currentOffset},1500)

})

$(document).ready(function () {
    $("#singer h3").click(function () {
        $(this).next().slideToggle(1000);
        $("#singer div").not($(this).next()).slideUp(500);
    });
    $('#loading').fadeOut(3000,function(){
        $('body').css('overflow','visible');
    });
});

function timerInfo(m,d,y){
    var current=new Date();
    var eventStart=new Date(`${m}/${d}/${y}`);
    var ms=eventStart.getTime()-current.getTime();
    var days=ms/(1000 * 3600 * 24);
    var itsDay=days-Math.floor(days);
    days=Math.floor(days);
    var hours=itsDay*24;
    var itsHours=hours-Math.floor(hours);
    hours=Math.floor(hours);

    var minutes=itsHours*60;
    var itsMinutes=minutes-Math.floor(minutes);
    minutes=Math.floor(minutes)

    var seconds=Math.floor(itsMinutes*60);

    $('.days h3').html(`${days} days`);
    $('.hours h3').html(`${hours} hours`);
    $('.minutes h3').html(`${minutes} minutes`);
    $('.seconds h3').html(`${seconds} seconds`);
}
function time(){
    timerInfo(08,11,2023);
    setTimeout(time,1000);
}
time();
$('.text-area').keyup(function(){
    
    var area=document.getElementById('Control').value.length;
    if(area>=100){
        $('#count').html('No');
    }else{
    $('#count').html(100-(area));
    }
})
