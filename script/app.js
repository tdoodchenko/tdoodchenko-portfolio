$( document ).ready(function() {
    console.log( "ready!" );


$('#js-btn').click(() => {
    console.log('click');
    $('html, body').animate({
        scrollTop: $('.js-section').offset().top
    }, 200);
});

$('#js-btn0').click(() => {
    console.log('click');
    $('html, body').animate({
        scrollTop: $('.js-section').offset().top
    }, 200);
});

$('#js-btn2').click(() => {
    console.log('click');
    $('html, body').animate({
        scrollTop: $('.js-section2').offset().top
    }, 200);
});

$('#js-btn3').click(() => {
    console.log('click');
    $('html, body').animate({
        scrollTop: $('.js-section3').offset().top
    }, 200);
});

var dropdown = $("#menu-list");
dropdown.hide();

$("#menu-icon").click(function(){
    console.log("this is clicked")

     dropdown.toggle(500); 


});








});