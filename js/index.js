'use strict';


window.addEventListener('load', function () {
    $('#carouselSimple').carousel({
        interval: 5000,
        keyboard: false,
        ride: "carousel",
        pause: false
    })

    $('.carousel-control-prev').click(function(){
        $('#carouselSimple').carousel('prev')
    })

    $('.carousel-control-next').click(function(){
        $('#carouselSimple').carousel('next')
    })

    var forms = $('.needs-validation');

    var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
  })
