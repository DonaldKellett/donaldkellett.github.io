/*
  search.js
  A simple Javascript file that makes use of Google Search to perform site-specific searches
  N.B. I did not use Google Custom Search Engine because it does not display properly when used in conjunction with Skel
*/

function googleSearch() {
  window.location = "https://google.com.hk/search?q=" + document.getElementById("search").value + " site:donaldkellett.github.io";
}

document.onkeydown = function() {
  if (event.keyCode == 13) {
    googleSearch();
  }
}
