$(function(){
    
    $('#header__icon').click(function(e){
        e.preventDefault();
        $('body').toggleClass('with--sidebar'); 
    })
    
    $('#site-cache').click(function(){
        $('body').removeClass('with--sidebar'); 
    })
    
   //alert('jQuery est mega !');
   
    
    
    
});
