


$(function () {

    $(".welcome-content").show(); // start by showing welcome
    // start by hiding the rest
    $(".about-content, .we-content, .accommodations-content, .registry-content").hide(); 
    
    $(".welcome-link, .about-link, .we-link, .accommodations-link, .registry-link").bind("click", function () {

      $(".welcome-content, .about-content, .we-content, .accommodations-content, .registry-content").hide();        
          
      if ($(this).attr("class") == "welcome-link") {
        $(".welcome-content").show();
        // make active & remove others from being active
        $("#welcome").addClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
      }
      else if ($(this).attr("class") == "about-link") { 
        $(".about-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").addClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
      }
      else if ($(this).attr("class") == "we-link") { 
        $(".we-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").addClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").removeClass('active');
      }
      else if ($(this).attr("class") == "accommodations-link") { 
        $(".accommodations-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").addClass('active');
        $("#registry").removeClass('active');
      }
      else if ($(this).attr("class") == "registry-link") { 
        $(".registry-content").show();
        // make active & remove others from being active
        $("#welcome").removeClass('active');
        $("#about").removeClass('active');
        $("#weddingevents").removeClass('active');
        $("#accommodations").removeClass('active');
        $("#registry").addClass('active');
      }
      else {
        $(".welcome-content").show();
      }

    });

});