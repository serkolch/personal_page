$(document).ready(function(){

  $('.select section').on('click',function(){
    $('.button-active').toggleClass('button button-active');
    $(this).toggleClass('button button-active');
    $('.show').toggleClass('show no-show');
    $('#'+$(this).attr('data-name')).toggleClass('show no-show');
  });

});