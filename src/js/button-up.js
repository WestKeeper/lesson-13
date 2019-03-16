$(document).ready(function(){
  var butUp = $('#button-up');
  if(window.pageYOffset < 10){ //?????
    butUp.fadeOut();
    console.log("D " + window.pageYOffset);
  }
  $(window).scroll(function(){
    if(window.pageYOffset > 10){ //?????
      butUp.fadeIn();
      console.log("B");
    }
    if(window.pageYOffset < 10){ //?????
      butUp.fadeOut();
      console.log("M");
    }
  });
  

  butUp.on('click',function(){
    scrollTo(document.body.scrollHeight, 0);
  });




});