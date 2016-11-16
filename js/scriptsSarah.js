(function(){

  //listen for when a tile is clicked
  //based on the type of page, add corresponding class to page and fade the dashboard
  $('.tile').each(function(){
    var $this= $(this),
        page = $this.data('page-name');

    $this.on('click',function(){
      $('.'+page).addClass('openpage');
    });
  });

  //when a close button is clicked:
  //close the page
  //wait till the page is closed and fade dashboard back in
  $('.r-close-button').click(function(){
      $(this).parent().addClass('slidePageLeft')
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
              if ($(this).hasClass('slidePageLeft')) { // Petit test pour éviter la fermeture intempestive de la tile si trop d'appels de l'événement animationend. (?)
                $(this).removeClass('slidePageLeft').removeClass('openpage');
                }
              });
  });

})();
