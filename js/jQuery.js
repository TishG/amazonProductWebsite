$(document).ready(function(){
  
    //navbar items highlight on scroll
    $('body').scrollspy({
        target: '#myNavbar',
        offset: 50
      });

    //fade gallery in and out
    $(".btn-secondary").click(function() {
        $("#gallery-images").fadeToggle(600);
    })

    //toggle navbar icon
    $('.navbar-toggler').click(
      function() {
          $(this).find("span").toggleClass("fa-angle-down fa-angle-up")
    });

 });
