$(function() {
    "use strict";

    $('.toggle_hide').click(function(e) {
        e.preventDefault();
        var $this = $(this);

        $this.hide();
        $this.closest('div').find('.hide').css({ display: 'block', opacity: 0 }).animate({ opacity: 1 }, 250, 'swing');
    });

});