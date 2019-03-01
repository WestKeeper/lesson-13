$(document).ready(function(){
  var butUp = $('#button-up');

  butUp.on('click',function(){
    scrollTo(document.body.scrollHeight, 0);
  });




});