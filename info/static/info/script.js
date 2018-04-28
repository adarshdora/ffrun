$(window).ready(function(){
  $(".h").css('background','transparent');
})
$(".videos").on("click",function(){
  $(".tab-content").scrollTop(0);
   $(".tab-content").css('overflow-y','auto');
   $("path").css('fill','#ab99c6');
 /* $(".scrolltop").css('display','none');
  $(".scrolltop").css('z-index','997');
  $(".scrolltop1").css('z-index','1');
  $(".tab-content").on("scroll",function(){
  $(".scrolltop").css('display','block');
})*/
   $(".h").css('background','#424242');
   $(".v").css('background','transparent');
  $(".at").css('background','#424242');
  $(".po").css('background','#424242');
  $(".tab-content").css('background','url(https://images.unsplash.com/photo-1465080207318-3de7361f84e7?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ%3D%3D&s=ab3f6f72581f72c6dce7529b12d2696f)');
  $(".tab-content").css('background-size','100% 100%');
  $(".tab-content").css('background-repeat','no-repeat');
})
$(".atheletes").on("click",function(){
  $(".tab-content").scrollTop(0);
  $("path").css('fill','#ab99c6');
 /* $(".scrolltop1").css('display','none');
  $(".scrolltop1").css('z-index','997');
  $(".scrolltop").css('z-index','1');
  $(".tab-content").on("scroll",function(){
  $(".scrolltop1").css('display','block');
})*/
   $(".h").css('background','#424242');
  $(".v").css('background','#424242');
  $(".at").css('background','transparent');
   $(".po").css('background','#424242');
  $(".tab-content").css('background','url(https://images.unsplash.com/photo-1461601462549-b78477faef93?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ%3D%3D&s=ea1ab8ca8c47f12b2fcd286460634eac)');
  $(".tab-content").css('background-size','100% 100%');
  $(".tab-content").css('background-repeat','no-repeat');
  $(".tab-content").css('overflow-y','auto');

})
$(".post").on("click",function(){
  $(".tab-content").scrollTop(0);
  /*$(".scrolltop").css('display','none');
  $(".scrolltop").css('z-index','997');
  $(".scrolltop1").css('z-index','1');
  $(".tab-content").on("scroll",function(){
  $(".scrolltop").css('display','block');
})*/
   $.ajax({
    method:"GET",
    url:"views.py"
  })
  $(".tab-content").css('overflow-y','auto');
   $(".h").css('background','#424242');
  $("path").css('fill','#424242');
  $(".v").css('background','#424242');
   $(".po").css('background','transparent');
  $(".at").css('background','#424242');
  $(".tab-content").css('background','url(https://images.unsplash.com/photo-1456437340567-faf782b404e7?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=eff38bf9b9eee3091213998959562617)');
  $(".tab-content").css('background-size','100% 100%');
  $(".tab-content").css('background-repeat','no-repeat');
})
$(".active").on("click",function(){
   $(".h").css('background','transparent');
  $(".v").css('background','#424242');
  $("path").css('fill','#ab99c6');
  $(".at").css('background','#424242');
   $(".po").css('background','#424242');
  $(".tab-content").css('background','url(http://moziru.com/images/fist-clipart-fist-punch-4.png)');
  $(".tab-content").css('background-size','100% 100%');
  $(".tab-content").css('background-repeat','no-repeat');
  $(".tab-content").css('overflow','hidden');

})

/*$(".videos").on("click",function(){
  if($(window).width()<1000){
  $(".tab-content").css('overflow','scroll');
  }
})*/


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

/*$(".tab-content").on("scroll",function(){
  $(".scrolltop,.scrolltop1").css('display','block');
 hide();
})
function hide(){
  $(".scrolltop").removeClass("invisible");
  $(".scrolltop").addClass("visible");
}
$(".scrolltop").on("click",function(){
   $(".tab-content").animate({scrollTop : 0},800);
   $(".scrolltop").addClass("invisible");
})
$(".scrolltop1").on("click",function(){
  $(".tab-content").animate({scrollTop : 0},800);
})*/


function func(){
  $("iframe.image2")[0].src="";
}
var name1,msg;
$(".pb").on("click",function(){
  name1=$('#post input').val();
  msg=$('#post textarea').val();
   $(".view").prepend("<div class='views'><p><span>#"+name1+"#</span>  "+msg+"</p></div>");
  $.ajax({
    method:"POST",
    url:"views.py",
    data:{
      data1:name1,
      data2:story1
    }
  })
})
$(".post").on("click",function(){
  $(".scrolltop3").css('z-index','999');
  $(".tab-content").on("scroll",function(){

   if($(".tab-content").scrollTop()>=70)
    {
      $(".scrolltop3").css('display','block');
    }
    else
    {
       $(".scrolltop3").css('display','none');
    }
      })

})
$(".scrolltop3").on("click",function(){
  $(".tab-content").animate({scrollTop : 0},800);
})