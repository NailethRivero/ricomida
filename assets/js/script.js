$(function () {
    //Tooltip
    $('[data-toggle="tooltip"]').tooltip()
  
    //Alert 
    $('.btn-mail').click(function(){
      alert("El correo fue enviado correctamente...");
    });
  
    //Changing color
    $('body').on('dblclick','.title', function(){
      $(this).css("color","red");
    });
  
    //Hide & show text
    $('.titles').click(function(){
      $('.content').toggle();
    });
  });