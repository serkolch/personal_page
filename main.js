$(document).ready(function(){

  $('.select section').on('click',function(){
    $('.button-active').toggleClass('button button-active')
    $(this).toggleClass('button button-active')
    $('.show').toggleClass('show no-show')
    $('#'+$(this).attr('data-name')).toggleClass('show no-show')
  });

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  canvas.addEventListener('mousemove',function(event){
    var x = event.layerX;
    var y = event.layerY;
    var pixel = ctx.getImageData(x,y,1,1);
    pixel.data = [255,255,255,0];
  })

})