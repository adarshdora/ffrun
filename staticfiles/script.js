$(window).ready(function(){
  $(".h").css('background','transparent');
})
$(document).ready(function() {
    $(".videos").on("click", function () {
        $(".tab-content").scrollTop(0);
        $(".tab-content").css('overflow-y', 'auto');
        $("path").css('fill', '#ab99c6');
        $(".post:hover path").css('fill','white');
        $(".h").css('background', '#424242');
        $(".v").css('background', 'transparent');
        $(".at").css('background', '#424242');
        $(".po").css('background', '#424242');
        $(".tab-content").css('background', 'url(https://images.unsplash.com/photo-1465080207318-3de7361f84e7?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ%3D%3D&s=ab3f6f72581f72c6dce7529b12d2696f)');
        $(".tab-content").css('background-size', '100% 100%');
        $(".tab-content").css('background-repeat', 'no-repeat');
    })
})
$(document).ready(function() {
    $(".atheletes").on("click", function () {
        $(".tab-content").scrollTop(0);
        $("path").css('fill', '#ab99c6');
        $(".post:hover path").css('fill','white');
        $(".h").css('background', '#424242');
        $(".v").css('background', '#424242');
        $(".at").css('background', 'transparent');
        $(".po").css('background', '#424242');
        $(".tab-content").css('background', 'url(https://images.unsplash.com/photo-1461601462549-b78477faef93?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ%3D%3D&s=ea1ab8ca8c47f12b2fcd286460634eac)');
        $(".tab-content").css('background-size', '100% 100%');
        $(".tab-content").css('background-repeat', 'no-repeat');
        $(".tab-content").css('overflow-y', 'auto');

    })
})
$(document).ready(function () {
    $(".post").on("click", function () {
        $(".tab-content").scrollTop(0);
        $.ajax({
         method:"GET",
         url:"/user/create/",
            success: function(data){
             console.log(data);
        }
       })
        $(".tab-content").css('overflow-y', 'auto');
        $(".h").css('background', '#424242');
        $("path").css('fill', '#424242');
        $(".v").css('background', '#424242');
        $(".po").css('background', 'transparent');
        $(".at").css('background', '#424242');
        $(".tab-content").css('background','url(https://images.unsplash.com/photo-1456437340567-faf782b404e7?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=eff38bf9b9eee3091213998959562617)');
        $(".tab-content").css('background-size','100% 100%');
        $(".tab-content").css('background-repeat','no-repeat');
    })
})
$(document).ready(function() {
    $(".active").on("click", function () {
        $(".h").css('background', 'transparent');
        $("path").css('fill', '#ab99c6');
        $(".post:hover path").css('fill','white');
        $(".v").css('background', '#424242');
        $(".at").css('background', '#424242');
        $(".po").css('background', '#424242');
        $(".tab-content").css('background', 'url(http://moziru.com/images/fist-clipart-fist-punch-4.png)');
        $(".tab-content").css('background-size', '100% 100%');
        $(".tab-content").css('background-repeat', 'no-repeat');
        $(".tab-content").css('overflow', 'hidden');

    })
})

$(document).ready(function(){
    $(".y").mouseover(function(){
        $(this).css("background", "red");
      $(".icon").css("border-left-color","white");
      $(this).css("cursor", "pointer");
      $(".icon").css("cursor", "pointer");
        });
        $(".y").mouseout(function(){
        $(this).css("background", "#c60712");
          $(".icon").css("border-left-color","white");
          $(this).css("cursor", "arrow");
      $(".icon").css("cursor", "arrow");
        });
});
function func(){
  $("iframe.image2")[0].src="";
}
$(document).ready(function() {
    var name1, story1;
    $(".pb").on("click", function () {
        name1 = $('#post input').val();
        story1 = $('#post textarea').val();
        $(".view").prepend("<div class='views'><p><span>#" + name1 + "#</span>  " + story1 + "</p></div>");
        $.ajax({
          method:'POST',
          url:'/user/create/',
          data:{
            data1:name1,
            data2:story1,
              csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val()
          }
        })
    })
})
$(document).ready(function() {
    $(".post").on("click", function () {
        $(".scrolltop3").css('z-index', '999');
        $(".tab-content").on("scroll", function () {

            if ($(".tab-content").scrollTop() >= 70) {
                $(".scrolltop3").css('display', 'block');
            }
            else {
                $(".scrolltop3").css('display', 'none');
            }
        })

    })
    $(".scrolltop3").on("click", function () {
        $(".tab-content").animate({scrollTop: 0}, 800);
    })
})
