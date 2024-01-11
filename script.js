
$(document).ready(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#topbutton').fadeIn();
        }else{
            $('#topbutton').fadeOut();
        } 
    });

    $("#topbutton").click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });
});





var button = document.getElementById('rightside');

    function Togglebar(){
        button.style.top ="80px";
    } 
    function Hidemenu(){
        button.style.top = "-500px";
        
    }

    function Viewport(element) {
        const fade = element.getBoundingClientRect();
        return (
          fade.top >= 0 &&
          fade.left >= 0 &&
          fade.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          fade.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      
      function fadeIn() {
        const fadeText = document.querySelectorAll('.fade-in');
      
        fadeText.forEach((element) => {
          if (Viewport(element)) {
            element.classList.add('active');
          }
        });
      }
      
      function checkAndFadeIn() {
        fadeIn();
        window.addEventListener('scroll', fadeIn); 
      }
      
      
      window.addEventListener('load', checkAndFadeIn);
      
      $(document).ready(function(){
        $("#hover").hover(function(){
          $("#appear").fadeIn();     
          
        });
      });
      $(document).ready(function(){
        $("#hover1").hover(function(){
          $("#appear1").fadeIn();     
          
        });
      });
      $(document).ready(function(){
        $("#hover2").hover(function(){
          $("#appear2").fadeIn();     
          
        });
      });
      $(document).ready(function(){
        $("#hover3").hover(function(){
          $("#appear3").fadeIn();     
          
        });
      });
      $(document).ready(function(){
        $("#hover4").hover(function(){
          $("#appear4").fadeIn();     
          
        });
      });
      $(document).ready(function(){
        $("#hover5").hover(function(){
          $("#appear5").fadeIn();     
          
        });
      });
      $(document).ready(function(){
        $("#hover6").hover(function(){
          $("#appear6").fadeIn();     
          
        });
      });
      $(document).ready(function(){
        $("#hover7").hover(function(){
          $("#appear7").fadeIn();     
          
        });
      });
    