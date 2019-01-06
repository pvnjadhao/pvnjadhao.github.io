(function ($) {
  $(function () {
    // init sidenav for small devices
    $('.sidenav').sidenav();

    // Init technology carousel
    $(".carousel").carousel({
      duration: 200,
      dist: -50,
      padding: 40,
      indicators: true,
      numVisible: 6
    });

    // Auto start carousel
    autoplay();

    function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 1500);
    }

    // Init intro section
    var slide = $('.slide'),
      slideAelements = $('.slide-a-child'),
      slideBelements = $('.slide-b-child'),
      slideCelements = $('.slide-c-child'),
      slideDelements = $('.slide-d-child'),
      replay = $('button.replay');

    slide.each(function (i) {
      if (i < 3) {
        setTimeout(function () {
          slide.eq(i).fadeOut();
        }, 5000 * (i + 1));
      }
    });

    function animateSlideA() {
      slideAelements.each(function (i) {
        setTimeout(function () {
          slideAelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
      });
    }

    function animateSlideB() {
      slideBelements.each(function (i) {
        setTimeout(function () {
          slideBelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
      });
    }

    function animateSlideC() {
      slideCelements.each(function (i) {
        setTimeout(function () {
          slideCelements.eq(i).addClass('is-visible');
        }, 150 * (i + 1));
      });
    }

    function animateSlideD() {
      slideDelements.each(function (i) {
        setTimeout(function () {
          slideDelements.eq(i).addClass('is-visible');
        }, 300 * (i + 1));
      });
    }

    animateSlideA()

    setTimeout(function () {
      animateSlideB();
    }, 5000);

    setTimeout(function () {
      animateSlideC();
    }, 10000);

    setTimeout(function () {
      animateSlideD();
    }, 15000);

    replay.on('click', function () {
      location.reload(true);
    }); // End of intro section

    // Contact form
    $("#contactForm").on('submit', function (e) {
      console.log(e);
    });

    // Freedom countdown
    // Set the date we're counting down to
    var countDownDate = new Date("Jul 1, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      //   + minutes + "m " + seconds + "s ";
      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "You are free!";
      }
    }, 1000); // Freedom countdown end
  }); // End of document ready
  // @ts-ignore
})(jQuery); // end of jQuery name space
