/*
	404.js
	The countdown redirect JS file for the 404 page
	(c) Donald Leung.  All rights reserved.
*/

var seconds = 60;

function timedRedirect() {
	if (seconds > 0) {
		document.getElementById("redirect").innerHTML = "If you do nothing, you will be redirected to <strong>Donald Leung - Home</strong> in " + seconds + " seconds.";
	} else {
		document.getElementById("redirect").innerHTML = "You will now be redirected to <strong>Donald Leung - Home</strong>."
		window.location = "http://donaldkellett.github.io";
	}
	seconds--;
	setTimeout("timedRedirect()", 1000);
}

timedRedirect();