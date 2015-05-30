/*
  search.js
  Powers the search feature of donaldkellett.github.io
  Uses the following search engines: Google/DuckDuckGo
  (c) Donald Leung.  All rights reserved.
*/

function conductSearch() {
  var question = document.getElementById("search-keywords").value;
  if (localStorage.getItem("search-engine") === "Google") {
    window.location = "https://google.com.hk/search?q=" + question + " site:donaldkellett.github.io";
  } else if (localStorage.getItem("search-engine") === "DuckDuckGo") {
    window.location = "http://duckduckgo.com/?q=" + question + " site:donaldkellett.github.io";
  } else {
    window.location = "https://google.com.hk/search?q=" + question + " site:donaldkellett.github.io";
  }
}
