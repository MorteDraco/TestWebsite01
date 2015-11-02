$('.vote').click(function () {
  $(this).toggleClass('on');
});

$('.vote2').click(function () {
  $(this).toggleClass('on');
});

var likes = 0;
    var dislikes = likes;

    function IncreaseLikes()
    {
        likes++;
        document.getElementById("likes").innerHTML = likes + ' voted up';

    }

    function DecreaseLikes()
    {
        dislikes++;
        document.getElementById("dislikes").innerHTML = dislikes + ' voted down';
    }
