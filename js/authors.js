$(document).ready(function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 8,
    });
    
    $('.swiper-slide a').click(function(){
        $('.swiper-slide a').removeClass('active');
        $(this).addClass('active');
    });
    
    $.ajax({
        url: '../js/authors.json',
        dataType: 'json',
        success: function(data){
            var data01 = data.g;
            var data02 = data.n;
            var data03 = data.d;
            var data04 = data.l;
            var data05 = data.m;
            var data06 = data.b;
            var data07 = data.s;
            var data08 = data.a;
            var data09 = data.j;
            var data10 = data.ch;
            var data11 = data.k;
            var data12 = data.t;
            var data13 = data.p;
            var data14 = data.h;
            
            var allData = data01.concat(data02).concat(data03).concat(data04).concat(data05).concat(data06).concat(data07).concat(data08).concat(data09).concat(data10).concat(data11).concat(data12).concat(data13).concat(data14);
          
            var dataArray = [allData, data01, data02, data03, data04, data05, data06, data07, data08, data09, data10, data11, data12, data13, data14];
            
            function dataPrint(index){
                if(dataArray[index].length > 0){
                    
                    var ul = $('<ul />');
                    
                    for(var i in dataArray[index]){
                        var li = $('<li />');
                        
                        var $name = dataArray[index][i].name;
                        
                        
                        li.append(
                            $('<a href="#detail" />').text($name)
                        );
                        
                        
                        ul.append(li);
                    }
                    
                    $('.author_list').append(ul);
                }
                
               
                }
            
            dataPrint(0);
            
            var num = 9;
            
            $('.author_list').find('li:gt(' + (num - 1) + ')').slideUp(0);
            
            var pack = 1;
            $('.author_list').next().click(function(){
                pack++;
                var listLength = $('.author_list li').length;
                var lastNum = Math.floor(listLength / num) + 1;
                if(listLength != num){
                    if(pack > lastNum){
                    alert('마지막입니다.');
                    }else{
                        $('.author_list').find('li:lt(' + (num * pack) + ')').slideDown(200);
                    }
                }else{
                    alert('마지막입니다.');
                }
            });
            
            $('.swiper-slide a').click(function(e){
                e.preventDefault();
                
                $('.swiper-slide a').removeClass('active');
                $(this).addClass('active');
                
                var index = $(this).parent().index();
                
                $('.author_list').find('ul').remove(0);
                
                dataPrint(index);
                $('.author_list').find('li:gt(' + (num - 1) + ')').slideUp(0);
                pack = 1;
            });
        },
        error: function(){
            $('.author_list').append('<p>데이터를 읽어오는 데 실패하였습니다.</p>');
        }
    });
});

// interview
$(document).ready(function(){
    var num = $('.interview > div').length;
    $('.total').html(num);
    
    $('.interview > div p').each(function(){
        var contents = $(this).text();

        if($(window).width() <= 320){
            if(contents.length > 100){
            var newText = contents.substr(0, 100) + ' · · · ';
            $(this).text(newText);
            }
        }else{
            if(contents.length > 105){
            var newText = contents.substr(0, 105) + ' · · · ';
            $(this).text(newText);
            }
        }
    });
});