$(document).ready(function () {

    $.get('http://localhost:3000/home',(data)=>{
      $('.banner_item').append(template('banner_nav',{data:data}))
      $('.main').append(template('main',{data:data}))
        $(".banner_item li:has(ul)").hover(function() {
          let top = $(this).position().top
          $(this).find("ul").css({"display":"block","top":-top});  
          $(this).find(".arrowRight").hide()  
          $(this).find(".arrowLeft").show()
        },function() {
          $(this).find("ul").css("display","none"); 
          $(this).find(".arrowRight").show()  
          $(this).find(".arrowLeft").hide()
        }); 
       
    })
  
      new Swiper ('.swiper-container', {
        // direction: 'horizontal',
        effect : 'fade',
        loop: true,
        autoplay: {
          delay: 3000,//1秒切换一次
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      });      
})

