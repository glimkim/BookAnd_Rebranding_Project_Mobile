// submission
$(document).ready(function(){
    $('.submission > div > a').click(function(){
        
        $(this).next().slideToggle('fast');
        $(this).find('h3').toggleClass('active');
    });
});

// prize
$(document).ready(function(){
    var menu = $('.prize .contents_nav');
    var contents = $('.prize > div');
    
    $(contents).eq(0).fadeIn(0);
    
    $(menu).find('a').click(function(){
        $(menu).find('a').removeClass('active');
        $(this).addClass('active');
        
        var index = $(this).parent().index();
        $(contents).fadeOut('fast');
        $(contents).eq(index).fadeIn('fast');
    });
    
});
