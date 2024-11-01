$(document).ready(function() {

  $('.test-popup-link').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    },
    callbacks: {
    change: function() {
        if (this.isOpen) {
            this.wrap.addClass('mfp-open');
        }
    }
}
  });

});
