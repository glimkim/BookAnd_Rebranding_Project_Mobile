//panel & account
$(document).ready(function(){
    var panel_btn = '.body_wrap .panel_icon';
    var panel = '.panel';
    
    var main_nav = '.main_nav';
    var sub_nav = '.sub_nav';
    
    var account_btn = '.body_wrap .account_icon';
    var account = '.account';
    
    $(account_btn).click(function(e){ 
        e.preventDefault();
        
        $(account + ', html, body, header').addClass('active');
        $(panel_btn).addClass('active');
        
    });
    
    $(panel_btn).click(function(e){ 
        e.preventDefault();
        
        var has = $(this).hasClass('active');
        
        if(has){
            $(panel + ', html, body, header').removeClass('active');
            $(this).removeClass('active');
            
            if($('.account').hasClass){
                $(account + ', html, body, header').removeClass('active');
                $(this).removeClass('active');
            }
        }else{
            $(panel + ', html, body, header').addClass('active');
            $(this).addClass('active');
        }
        
        $(main_nav).removeClass('active');
        $(sub_nav).slideUp(0);
        
    });
    
    $(main_nav).click(function(e){
        e.preventDefault();
        
        var has = $(this).hasClass('active');
        
        if(has){ 
            $(this).removeClass('active'); 
            $(this).next().stop().slideUp('fast');
        }else{
            $(main_nav).removeClass('active'); 
            $(this).addClass('active'); 
            
            $(sub_nav).stop().slideUp('fast'); 
            $(this).next().stop().slideDown('400'); 
        }
    });
    
   $('.f_nav li:first a').click(function(e){
       e.preventDefault();
       $(account_btn).trigger('click');
   }); 
    

    
});

