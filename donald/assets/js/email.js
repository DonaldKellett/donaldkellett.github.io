/*
  email.js
  A script responsible for sending emails
  (c) Donald Leung.  All rights reserved.
*/

function sendEmail() {
  var subject = document.getElementById("email-subject").value,
      body = document.getElementById("email-body").value;
  window.location = "mailto:i.donaldl@me.com?subject=" + subject + "&body=" + body;
}

function resetEmailForm() {
  document.getElementById("email-subject").value = "";
  document.getElementById("email-body").value = "";
}
