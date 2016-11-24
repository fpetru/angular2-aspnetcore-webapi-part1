
+function ($) {
  $(function(){ 	
    var $window = $(window);

      // mobile layout
    var mobile = function(option) {
        if(option === 'reset'){
            $('[data-toggle^="shift"]').shift('reset');
            return true;
        }
        $('[data-toggle^="shift"]').shift('init');
      return true;
    };

    // undo mobile layout
    $window.width() < 768 && mobile();

    // resize
    var $resize, $width = $window.width();
    $window.resize(function() {
      if($width !== $window.width()){
        clearTimeout($resize);
        $resize = setTimeout(function(){
          setHeight();
          $window.width() < 768 && mobile();
          $window.width() >= 768 && mobile('reset') && fixVbox();
          $width = $window.width();
        }, 500);
      }
    });

    // fluid layout
    var setHeight = function(){
      $('.app-fluid #nav > *').css('min-height', $(window).height());
      return true;
    }

    setHeight();
  });
}(jQuery);
