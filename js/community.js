$(document).ready(function(){
    var contents = $('.concert > p');
    $.ajax({
        url: '../js/community.json',
        dataType: 'json',
        success: function(data){
            var validData = data.concert;
            if(validData.length > 0){
                var ul = $('<ul />');
                
                for(var i in validData){
                    var li = $('<li />');
                    
                    var $url = validData[i].url;
                    var $title = validData[i].title;
                    var $date = validData[i].date;
                    
                    var img = $('<img >').attr({
                        src: $url,
                        alt: '북콘서트 이미지' + (Number(i) + 1),
                        onerror: 'javascript:this.src="images/error.jpg"'
                    });
                    
                    var a = $('<a />');
                    
                    a.append(
                        img,
                        $('<h4 />').text($title),
                        $('<p />').text($date)
                    );
                    
                    li.append(a);
                    
                    ul.append(li);
                    
                }
                
                contents.after(ul);
            }
            $('.concert .total').text(validData.length);
        },
        error: function(){
            $(contents).after('<p>데이터를 불러오는 데 실패하였습니다.</p>');
        }
    });
});

$(document).ready(function(){
    var contents = $('.event > p');
    $.ajax({
        url: '../js/community.json',
        dataType: 'json',
        success: function(data){
            var validData = data.event;
            if(validData.length > 0){
                var ul = $('<ul />');
                
                for(var i in validData){
                    var li = $('<li />');
                    
                    var $url = validData[i].url;
                    var $title = validData[i].title;
                    var $date = validData[i].date;
                    
                    var img = $('<img >').attr({
                        src: $url,
                        alt: '북콘서트 이미지' + (Number(i) + 1),
                        onerror: 'javascript:this.src="images/error.jpg"'
                    });
                    
                    var a = $('<a />');
                    
                    a.append(
                        img,
                        $('<h4 />').text($title),
                        $('<p />').text($date)
                    );
                    
                    li.append(a);
                    
                    ul.append(li);
                    
                }
                
                contents.after(ul);
            }
            $('.event .total').text(validData.length);
        },
        error: function(){
            $(contents).after('<p>데이터를 불러오는 데 실패하였습니다.</p>');
        }
    });
});