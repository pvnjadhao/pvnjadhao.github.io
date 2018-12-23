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

    animateSlideA();

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

    // Init typewritter
    var TxtType = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('typewrite');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
    }; // End of typewritter js
  }); // End of document ready
})(jQuery); // end of jQuery name space
