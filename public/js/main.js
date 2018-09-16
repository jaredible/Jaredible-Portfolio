$(function() {
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });

    $('.level-label').tooltip();

    var modal = document.getElementById('myModal');
    var btn = document.getElementById('myBtn');
    var span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
        console.log('Testing - btn onclick');
    }

    span.onclick = function() {
        modal.style.display = 'none';
        console.log('Testing - span onclick');
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            console.log('Testing - window onclick');
        }
    }
});