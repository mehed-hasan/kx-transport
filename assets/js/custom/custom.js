    // Code for preloader will be disappeared after all contents being loaded 
    $(window).on('load', function () {
        $("#preloader").fadeOut("slow",function(){
          $("body").css({'overflow':'unset'}); 
        });

        tab_action();
        $('select').select2();

    });
    // Code for preloader will be disappeared after all contents being loaded -------------------------- Ended 


    // Js code by Mehedi HAsan 


    window.addEventListener("resize", tab_action);

    function tab_action(){
      if(screen.width < 768){  
        $(".tab_btns button").each(function(){
          $(this).attr({'data-bs-target':'#exampleModal', 'data-bs-toggle': 'modal'})
        });

      }else{

        $(".tab_btns button").each(function(){
          $id = "#"+$(this).attr("data-desktop");
          $(this).attr({'data-bs-target': $id, 'data-bs-toggle': 'tab'});
        });

       
      }


      if(screen.width < 992){
        $(".navbar-light .dropdown-menu").hide();

      }else{
        $(".navbar-light .dropdown-menu").show();
      }
    }

    $(".navbar-light .nav-item.dropdown").click(function(){
      if(screen.width < 992){
        $(this).find("svg").toggleClass("arrow_rotate");
        $(this).find(".dropdown-menu").slideToggle("slow");

      }
    });

    $(".navbar-toggler").click(function(){
      $(".navbar-collapse").toggleClass("expand");
      $(".navbar-light .dropdown-menu").slideUp("slow");
    });


