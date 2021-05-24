//booksection
$(document).ready(function(){
    var menu = '.contents_nav';
    var contents = '.booksection .contents_wrap';
    
    $(menu).find('li:first a').addClass('active');
    $(contents).find('div:first').fadeIn(0);
    
    $.ajax({
        url: "../js/section.json",
        dataType: "json",
        success: function(data){
            var data01 = data.literature;
            var data02 = data.humanities;
            var data03 = data.essay;
            var data04 = data.art;
           
            var allData = data04.concat(data01).concat(data03).concat(data02);
          
            var dataArray = [allData, data01, data02, data03, data04];
            
            function dataPrint(index){
                if(dataArray[index].length > 0){
                    
                    var ul = $('<ul />');
                    
                    for(var i in dataArray[index]){
                        var li = $('<li />');
                        
                        var $book = dataArray[index][i].book;
                        var $url = dataArray[index][i].url;
                        
                        var title = $('<h5 class="title" />');
                        
                        var a = $('<a href="#bookmark" />');
                        var figure = $('<figure />');
                        
                        var img = $('<img />').attr({src:$url, alt:"분야별 도서 이미지" + (Number(i) + 1), onerror: 'javascript:this.src="images/error.jpg"'});
                        
                        a.append(
                            figure,
                            title.text($book)
                        );
                        
                        figure.append(
                            img
                        );
                        
                        li.append(
                            a
                        );
                        
                        
                        ul.append(li);
                    }
                    
                    $(contents).find('> div').append(ul);
                }
                
               
                }
            
            dataPrint(0);
            
            var num = 6;
             
            $(contents).find('li:gt(' + (num - 1) + ')').slideUp(0);
            
            var pack = 1;
            
            $(contents).find('.more_btn').click(function(){
                var listLength = $(contents).find('li').length;
                var lastNum = Math.floor(listLength / num) + 1;
                pack++;
                if(listLength != num){
                    if(pack > lastNum){
                        alert('마지막입니다');
                    }else{
                        $(contents).find('li:lt(' + (num * pack) + ')').slideDown(300); 
                    }
                }else{
                    alert('마지막입니다');
                }
            });
            
            
            $(menu).find('a').click(function(e){
                e.preventDefault();
                $(menu).find('a').removeClass('active');
                $(this).addClass('active');
                
                var index = $(this).parent().index();
                $(contents).find('ul').remove(0);
                
                dataPrint(index);
                
                $(contents).find('li:gt(' + (num - 1) + ')').slideUp(0);
                pack = 1;
            });
            
           
            
        },
        error: function(){
            contents.after('<p>데이터를 가져오는 데 실패하였습니다.</p>');
        }
    });
});

//newbooks
$(document).ready(function(){
      var contents = '.newbooks .book_list';
    
    $.ajax({
        url: '../js/books.json',
        dataType: 'json',
        success: function(data){
            var validData = data.newbooks;
            
           function dataPrint(){
                if(validData.length > 0){
                    var ul = $('<ul />');
                    
                    for(var i in validData){
                        var li = $('<li />');
                        
                        var $book = validData[i].book;
                        var $url = validData[i].url;
                        
                        var title = $('<div class="title" />')
                        
                        var title = $('<h5 class="title" />');
                        
                        var a = $('<a href="#bookmark" />');
                        var figure = $('<figure />');
                        
                        var img = $('<img />').attr({src:$url, alt:"분야별 도 이미지" + (Number(i) + 1), onerror: 'javascript:this.src="images/error.jpg"'});
                        
                        a.append(
                            figure,
                            title.text($book)
                        );
                        
                        figure.append(
                            img
                        );
                        
                        li.append(
                            a
                        );
                        
                        
                        ul.append(li);
                    }
                    
                    $(contents).append(ul);
                    
                }
                
            }
            
            dataPrint();
            
        },
        error: function(){
            $(contents).after('<p>데이터를 읽어오는 데 실패하였습니다.</p>');
        }
    });

});

//bestsellers
$(document).ready(function(){
      var contents = '.bestsellers .book_list';
    
    $.ajax({
        url: '../js/books.json',
        dataType: 'json',
        success: function(data){
            var validData = data.bestsellers;
            
           function dataPrint(){
                if(validData.length > 0){
                    var ul = $('<ul />');
                    
                    for(var i in validData){
                        var li = $('<li />');
                        
                        var $book = validData[i].book;
                        var $url = validData[i].url;
                        
                        var title = $('<div class="title" />')
                        
                        var title = $('<h5 class="title" />');
                        
                        var a = $('<a href="#bookmark" />');
                        var figure = $('<figure />');
                        
                        var img = $('<img />').attr({src:$url, alt:"분야별 도 이미지" + (Number(i) + 1), onerror: 'javascript:this.src="images/error.jpg"'});
                        
                        a.append(
                            figure,
                            title.text($book)
                        );
                        
                        figure.append(
                            img
                        );
                        
                        li.append(
                            a
                        );
                        
                        
                        ul.append(li);
                    }
                    
                    $(contents).append(ul);
                    
                }
                
            }
            
            dataPrint();

        },
        error: function(){
            $(contents).after('<p>데이터를 읽어오는 데 실패하였습니다.</p>');
        }
    });

});

//bookofmonth
//bestsellers
$(document).ready(function(){
      var contents = '.bookofmonth .book_list';
    
    $.ajax({
        url: '../js/books.json',
        dataType: 'json',
        success: function(data){
            var validData = data.bookofmonth;
            
           function dataPrint(){
                if(validData.length > 0){
                    var ul = $('<ul />');
                    
                    for(var i in validData){
                        var li = $('<li />');
                        
                        var $book = validData[i].book;
                        var $url = validData[i].url;
                        
                        var title = $('<div class="title" />')
                        
                        var title = $('<h5 class="title" />');
                        
                        var a = $('<a href="#bookmark" />');
                        var figure = $('<figure />');
                        
                        var img = $('<img />').attr({src:$url, alt:"분야별 도 이미지" + (Number(i) + 1), onerror: 'javascript:this.src="images/error.jpg"'});
                        
                        a.append(
                            figure,
                            title.text($book)
                        );
                        
                        figure.append(
                            img
                        );
                        
                        li.append(
                            a
                        );
                        
                        
                        ul.append(li);
                    }
                    
                    $(contents).append(ul);
                    
                }
                
            }
            
            dataPrint();
        },
        error: function(){
            $(contents).after('<p>데이터를 읽어오는 데 실패하였습니다.</p>');
        }
    });

});