$(window).scroll( function(){
    var sc = $(window).scrollTop(),
        divOffset = $('#secondsec').offset().top-400;
    if( sc >= divOffset )
    {
        console.log(divOffset,sc)
        $('#navigation').css('background-color' , 'rgba(222, 225, 228, 1.5)');
    }
    else
    {
        $('#navigation').css('background-color' , 'rgba(0, 0, 0, 0)');
    }
 });