/*
  settings.init.js
  Autofills previously saved settings on the Settings Page
  (c) Donald Leung.  All rights reserved.
*/

function autofill() {
  document.getElementById("search-engine").value = localStorage.getItem("search-engine");
  document.getElementById("notification-type").value = localStorage.getItem("notification-type");
}

autofill();
