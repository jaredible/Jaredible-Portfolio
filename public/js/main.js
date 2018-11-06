$(function () {
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function () {
        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });

    $('.level-label').tooltip();

    $('#contact-modal-close').click(function () {
        console.log('Close');
        // TODO: clear contents
    });

    $('#contact-modal-send').click(function () {
        console.log('Send');
        // TODO: send contents to back-end
    });
});