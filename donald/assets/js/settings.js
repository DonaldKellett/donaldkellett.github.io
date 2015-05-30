/*
  settings.js
  Uses local storage to save personal settings within the visitor's computer
  (c) Donald Leung.  All rights reserved.
*/

function setSearchEngine() {
  localStorage.removeItem("search-engine");
  localStorage.setItem("search-engine", document.getElementById("search-engine").value);
  location.reload();
}

function setNotificationTypes() {
  localStorage.removeItem("notification-type");
  localStorage.setItem("notification-type", document.getElementById("notification-type").value);
  location.reload();
}

function restoreDefaults() {
  localStorage.clear();
  location.reload();
}
