$(document).ready(function(){

    $('table td a').each(function(){
        var title = $(this).text();
        if(title.length > 10){
            if($(window).width() > 320){
                var newTitle = title.substr(0, 10) + ' · · · ';
                $(this).text(newTitle);
            }else{
                var newTitle = title.substr(0, 9) + ' · · · ';
                $(this).text(newTitle);
            }
        }
    });
});