

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