var selfDestructTime = new Date(2014, 10, 7, 23, 59, 59, 0);

function updateCountdown() {
    cd = countdown(selfDestructTime);
    $("#clock").html(('00'+cd.hours).slice(-2)
                     +":"+('00'+cd.minutes).slice(-2)
                     +":"+('00'+cd.seconds).slice(-2));
}


function load() {
    $("#leftlink").fadeOut(1);
    $("#rightlink").fadeOut(1);
    $.get("/send-temp.php", function( data ) {
        d = jQuery.parseJSON(data);
        $("#leftimg").attr("src", d.pic1);
        $("#rightimg").attr("src",d.pic2);
        $("#leftimg").load(loadedLeft);
        $("#rightimg").load(loadedRight);
    });
}

function loadedLeft() {
    $("#whois").html("who's hotter ??");
    $("#leftlink").fadeIn();
}

function loadedRight() {
    $("#whois").html("who's hotter ??");
    $("#rightlink").fadeIn();
}