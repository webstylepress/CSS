$(document).ready(function(){
  $('.page-name .content h2').click(function(){

    if( $(this).hasClass('opened') ) {
    
      $('.page-name .content h2').removeClass('opened');
      $('.page-name .content li').removeClass('opened');  
      $(this).removeClass('opened');
      $(this).closest('li').next('li').removeClass('opened');
    
    } else {

      $('.page-name .content h2').removeClass('opened');
      $('.page-name .content li').removeClass('opened');
        $(this).toggleClass('opened');
      $(this).closest('li').next('li').addClass('opened');

    }

  });
});