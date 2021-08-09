$(function(){
    $('#test').click(function(){
      $('body').css("background","linear-gradient( 90deg,  navy 0%, tomato 100% )no-repeat");
      $('body').fadeOut('slow'); 
      $('body').fadeIn('slow');
      $('strong').css("background","#d9d9d9");
      $('header div').css("background","#b3b3b3")
      $('#bodyimg').css("background","#b3b3b3")
      $('html').css("background","#b3b3b3")

      
    
    });

    $('#test1').click(function(){
      $('body').css("background","linear-gradient( 90deg,  rgb(18, 138, 218) 0%,rgb(187, 2, 187) 100%)no-repeat");
      $('body').fadeOut('slow'); 
      $('body').fadeIn('slow');
      $('strong').css("background","white");
      $('header div').css("background","white")
      $('#bodyimg').css("background","white")
      $('html').css("background","White")

      
    
    });
});