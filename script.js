$(window).scroll(function () {
    var $this = $(this),
        $head = $('#head');
    if ($this.scrollTop() > 20) {
    $('.header_container').css("background-color", "white")
    $('.header_container_logo').css("background-image","url(./img/Jevelin_logo_dark.png)")
    $('nav ul').css("color","#2B2B2B")
    $('.fa-cart-shopping').css("color","black")
    $('.to_top').show()
    }
    else if($this.scrollTop() < 20){
        $('.header_container').css("background-color", "#2B2B2B")
        $('.header_container_logo').css("background-image","url(./img/Jevelin_logo_light.png)")
        $('nav ul').css("color","white")
        $('.fa-cart-shopping').css("color","white")
        $('.to_top').hide()
    }
});


$('.multiple-items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( 300, function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( 300, function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
    });

