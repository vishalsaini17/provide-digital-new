

$('#slider').cardSlider({
    slideTag: 'div',
    slideClass: 'slide',
    current: 2,
    followingClass: 'slider-content'
})


$('#slider').cardSlider({
    slideTag: 'div',
    slideClass: 'slide',
    onBeforeMove: function (slider, onMove) {
        console.log('onBeforeMove')
        // $(this).prev().css({ "background-color": "yellow", "left": "0px", "transition": "none" });
        onMove()
    },
    onMove: function (slider, onAfterMove) {
        onAfterMove()
    },
    onAfterMove: function () {
        console.log('onAfterMove')
    },
    onAfterTransition: function () {
        console.log('onAfterTransition')
    },
    onCurrent: function () {
        console.log('onCurrent')
    }
})


// window.slider = $('#slider').cardSlider({
//     slideTag: 'div'
//     , slideClass: 'slide'
//     , current: 1
//     , followingClass: 'slider-content-6'
//     , delay: 300
//     , transition: 'ease'
//     , onBeforeMove: function (slider, onMove) {
//         console.log('onBeforeMove')
//         onMove()
//     }
//     , onMove: function (slider, onAfterMove) {
//         onAfterMove()
//     }
//     , onAfterMove: function () {
//         console.log('onAfterMove')
//     }
//     , onAfterTransition: function () {
//         console.log('onAfterTransition')
//     }
//     , onCurrent: function () {
//         console.log('onCurrent')
//     }
// })

$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 2, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: false, // Adds the dots on the bottom
    responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });


  wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'rotateInDownLeft', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )

  wow.init();

