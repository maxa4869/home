$(function(){
  $('.qa-content p').each(function(){
    $(this).on('click', function(){
      let $answer = $(this).parent().find('.answer');
      $answer.slideToggle();
      $answer.toggleClass('change');
      let $span2 = $(this).parent().find('.span2');
      if($answer.hasClass('change')){
        $span2.css('transform', 'rotate(0deg)');
      }else{
        $span2.css('transform', 'rotate(90deg)');
      }
    });
  });

    //googleform
    let $form = $( '#js-form' )
    $form.submit(function(e) { 
      $.ajax({ 
       url: $form.attr('action'), 
       data: $form.serialize(), 
       type: "POST", 
       dataType: "xml", 
       statusCode: { 
          0: function() { 
            //送信に成功したときの処理
            $form.slideUp()
            $( '#js-success' ).slideDown()
          }, 
          200: function() { 
            //送信に失敗したときの処理
            $form.slideUp()
            $( '#js-error' ).slideDown()
          }
        } 
      });
      return false; 
    })

    // form clearbutton
    $('#clear-button').on('click', function(){
      $('.contact-row').each(function(){
        $(this).find('input').val('');
        $(this).find('textarea').val('');
      })
    })

    // 実績画像サイズ
    $('.jisseki-img').each(function(){
      let width = $(this).css('width');
      $(this).css('height', width);
    })

    // menuスクロール
    $('.menu li').each(function(){
      $(this).on('click', function(){
        let data = $(this).attr('data');
        let scrollTop = $('#' + data).offset().top;
        scrollTop += -80;
        $('html').animate({
          scrollTop : scrollTop
        },1000)
      })
    })

    // menu open
    $('.menu-open').on('click', function(){
      $('.menu').slideToggle();
      // humbergar
      $('.menu-bar1').toggleClass('change-bar1');
      $('.menu-bar2').toggleClass('change-bar2');
      $('.menu-bar3').toggleClass('change-bar3');
    })
});