/*
  index.init.js
  Initializes the settings on the index.html page (Homepage)
  (c) Donald Leung.  All rights reserved.
*/

function notificationsInit() {
  var notifications = localStorage.getItem("notification-type");
  if (notifications === "personal") {
    if (document.getElementsByClassName("personal-notifications").length > 0) {
      document.getElementById("no-notifications").style.display = "none";
      for (i = 0; i < document.getElementsByClassName("personal-notifications").length; i++) {
        document.getElementsByClassName("personal-notifications")[i].style.display = "block";
      }
      for (i = 0; i < document.getElementsByClassName("website-notifications").length; i++) {
        document.getElementsByClassName("website-notifications")[i].style.display = "none";
      }
    } else {
      document.getElementById("no-notifications").style.display = "block";
      for (i = 0; i < document.getElementsByClassName("website-notifications").length; i++) {
        document.getElementsByClassName("website-notifications")[i].style.display = "none";
      }
    }
  } else if (notifications === "website") {
    if (document.getElementsByClassName("website-notifications").length > 0) {
      document.getElementById("no-notifications").style.display = "none";
      for (i = 0; i < document.getElementsByClassName("website-notifications").length; i++) {
        document.getElementsByClassName("website-notifications")[i].style.display = "block";
      }
      for (i = 0; i < document.getElementsByClassName("personal-notifications").length; i++) {
        document.getElementsByClassName("personal-notifications")[i].style.display = "none";
      }
    } else {
      document.getElementById("no-notifications").style.display = "block";
      for (i = 0; i < document.getElementsByClassName("personal-notifications").length; i++) {
        document.getElementsByClassName("personal-notifications")[i].style.display = "none";
      }
    }
  } else if (notifications === "none") {
    document.getElementById("no-notifications").style.display = "block";
    for (i = 0; i < document.getElementsByClassName("website-notifications").length; i++) {
      document.getElementsByClassName("website-notifications")[i].style.display = "none";
    }
    for (i = 0; i < document.getElementsByClassName("personal-notifications").length; i++) {
      document.getElementsByClassName("personal-notifications")[i].style.display = "none";
    }
  } else {
    return undefined;
  }
}

notificationsInit();
