$(document).ready(function(){
  
    $('body').scrollspy({
        target: '#myNavbar',
        offset: 50
      });

    $(".btn-secondary").click(function() {
        $("#gallery-images").toggle();
    })

 });
