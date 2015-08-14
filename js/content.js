/* 
  Loads in all the conent when button is pressed in naviation bar 
*/


$(function () {

    $(".welcome-content").show(); // start by showing welcome
    // start by hiding the rest
    $(".about-content, .we-content, .accommodations-content, .registry-content, .photos-content, .wp-content").hide(); 
    
    $(".welcome-link, .about-link, .we-link, .accommodations-link, .registry-link, .photos-link, .wp-link").bind("click", function () {

      $(".welcome-content, .about-content, .we-content, .accommodations-content, .registry-content, .photos-content, .wp-content").hide();        
          
      if ($(this).attr("class") == "welcome-link") {
        $(".welcome-content").show();
        // make active & remove others from being active
        $("#welcome").addClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
        $("#photos").removeClass('active');
        $("#weddingparty").removeClass('active');
      }
      else if ($(this).attr("class") == "about-link") { 
        $(".about-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").addClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
        $("#photos").removeClass('active');
        $("#weddingparty").removeClass('active');
      }
      else if ($(this).attr("class") == "we-link") { 
        $(".we-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").addClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
        $("#photos").removeClass('active');
        $("#weddingparty").removeClass('active');
      }
      else if ($(this).attr("class") == "accommodations-link") { 
        $(".accommodations-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").addClass('active');
        $("#registry").removeClass('active');
        $("#photos").removeClass('active');
        $("#weddingparty").removeClass('active');
      }
      else if ($(this).attr("class") == "registry-link") { 
        $(".registry-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").addClass('active');
        $("#photos").removeClass('active');
        $("#weddingparty").removeClass('active');
      }
      else if ($(this).attr("class") == "photos-link") { 
        $(".photos-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
        $("#photos").addClass('active');
        $("#weddingparty").removeClass('active');
      }
      else if ($(this).attr("class") == "wp-link") { 
        $(".wp-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
        $("#photos").removeClass('active');
        $("#weddingparty").addClass('active');
      }
      else {
        $(".welcome-content").show();
      }

    });

});