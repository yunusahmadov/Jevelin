$(window).scroll(function () {
    var $this = $(this),
        $head = $('#head');
    if ($this.scrollTop() > 20) {
    $('.header_container').css("background-color", "white")
    $('.header_container_logo').css("background-image","url(./img/Jevelin_logo_dark.png)")
    $('nav ul').css("color","#2B2B2B")
    $('.fa-cart-shopping').css("color","black")
    }
    else if($this.scrollTop() < 20){
        $('.header_container').css("background-color", "#2B2B2B")
        $('.header_container_logo').css("background-image","url(./img/Jevelin_logo_light.png)")
        $('nav ul').css("color","white")
        $('.fa-cart-shopping').css("color","white")
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
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

