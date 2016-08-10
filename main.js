(function(){

  document.querySelectorAll('.select section').forEach(function(button){
    button.addEventListener('click',function(e){
      
      document.querySelector('.button-active').classList = 'button';
      e.target.classList = 'button-active';
      
      document.querySelector('.show').classList = 'no-show';
      let showID = e.target.attributes[1].value;
      document.querySelector(`#${showID}`).classList = 'show';

    })
  })

})();