$(document).ready(function() {
    function playMusic(card) {
        var musicSrc = $(card).data('music');
        var audio = new Audio(musicSrc);
        audio.play();
    }

    $('.card').hover(function() {
        playMusic(this);
    }, function() {
        var audio = $(this).find('audio')[0];
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});
  