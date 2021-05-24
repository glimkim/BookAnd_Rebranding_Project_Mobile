//main & pop_up
$(window).load(function(){
    
    $(window).resize(function(){
        var deviceHeight = $(window).height();
        var minHeight = 608; 
        var maxHeight = 736;      
        
        if(deviceHeight >= maxHeight){
            $('main').height(maxHeight - 68);
        }else if(deviceHeight > minHeight){
            $('main').height(deviceHeight - 68);
        }else{ 
            $('main').height(minHeight - 68);
        }
    }); 
    
        
    $(window).trigger('resize');
    
    var swiper = new Swiper('main .swiper-container',{
        pagination: {
        el: 'main .swiper-pagination',
        clickable: 'true'
        },
        autoplay: {
            delay:7000
        },
        loop: true
    });
    
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.pop_up';
    var chkbox = '#not_today';
    
    $(popup).find('form a').click(function(e){
        e.preventDefault();
        
        var chk = $(chkbox).prop('checked');
        
        if(chk){ 
            setCookie('exCookie','done',1); 
        }
        
        $(popup).stop().fadeOut(0);
        $('html, body').removeClass('active');
        swiper.autoplay.start();
    });
    var chk = $(chkbox).prop('checked');
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').addClass('active');
        swiper.autoplay.stop();
    }else{
        $(popup).fadeOut(0);
        $('html, body').removeClass('active');
        swiper.autoplay.start();
    }
    
});

//best_sellers
$(document).ready(function(){
     var swiper = new Swiper('#best_sellers .swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 15,
  
    });

});

//book_of_month
$(window).load(function(){

    
    $(window).resize(function(){
        $('.summary').each(function(){
        
            var pText = $(this).text();
            var deviceHeight = $(window).height();

            if(pText.length > 64){
                if(deviceHeight >= 730){
                    var newText = pText.substr(0, 58);
                    $(this).text(newText + '···');
                }else if(deviceHeight > 568){
                    var newText = pText.substr(0, 63);
                    $(this).text(newText + '···');
                }else{
                    var newText = pText.substr(0, 54);
                    $(this).text(newText + '···');
                }
            
            }

        });
        
    });
    
    $(window).trigger('resize');
   
    var imgHeight = $('#book_of_month .swiper-slide > img').height() -2;
    $('#book_of_month .swiper-slide').height(imgHeight);
   
    var textWidth = $('#book_of_month .swiper-slide').width() - $('#book_of_month .swiper-slide > img').width() - 10;
    console.log(textWidth);
    $('#book_of_month .swiper-slide .text_box').css('width',textWidth);
    
    var swiper = new Swiper('#book_of_month .swiper-container',{
        loop: true,
        spaceBetween: 8,
        centeredSlides: true,
        
    });
});

//event
$(document).ready(function(){
    var swiper = new Swiper('#event .swiper-container',{
        pagination: {
        el: '#event .swiper-pagination',
        type: 'progressbar',
        },
    });
});

//new_books
$(document).ready(function(){
    var swiper = new Swiper('#new_books .swiper-container',{
        slidesPerView: 'auto',
        spaceBetween: 15,
  
    });
});

//podcast
$(document).ready(function(){
    $('#podcast .play_btn').click(function(){
        $(this).fadeOut('fast');
        $('#podcast iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });
});


//notice
$(document).ready(function(){
     var swiper = new Swiper('#notice .swiper-container', {
      direction: 'vertical',
      loop: true,
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
      },
    });
});


