$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
  }
  else{
    $('header').removeClass("sticky");
  }
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('logo').addClass("sticky");
  }
  else{
    $('logo').removeClass("sticky");
  }
});