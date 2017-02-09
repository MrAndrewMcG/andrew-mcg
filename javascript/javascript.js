console.log('hello');

$(document).ready(function() {
  // Smooth Scrolling
  $('a').on('click', function() {
    if(this.hash !=='') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){
          window.location.hash = hash;
        });
      }
    });
  // Cash Money Sound
  $('.button--1').on('click', function() {
    $('audio').get(0).currentTime = 0;
    $('audio').get(0).play();
  });
  // Toggle register now button
  $('.button--2').on('click', function(){
    $('.form').slideToggle();
  });
  // Submit message
  $('.submit').on('click', function() {
    if($(this).text() == 'submit') {
      $(this).text('Thanks!');
    }
  });
  // Toggle job descriptions
  $('.job-title').on('click', function(){
    $(this).siblings('.job-description').slideToggle(200);
  });
  // Light Switch
  $('.button--3').on('click', function(){
    $('body, header').toggleClass('background-dark');
    $('p, li').toggleClass('light-text');
    $('.footer__img').toggleClass('footer__img-dark');
  });
});
