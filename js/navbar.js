
$(()=>{
    //Initialize dropdown
    $('.ui.left.pointing.dropdown').dropdown({
        transition: 'drop',
        on: 'hover',
        duration: 300
    });
    $('#dropdown').dropdown({
        transition: 'drop',
        on: 'hover',
        duration: 300
    });
    $('#dropdown1').dropdown({
        transition: 'drop',
        on: 'hover',
        duration: 300
    });


    $('.slider').glide({
        type:'carousel',
        autoplay: 1000,
        arrowsWrapperClass: 'slider-arrows',
        arrowRightText: '',
        arrowLeftText: '',
        animationDuration:500
    });



});
