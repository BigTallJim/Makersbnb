$(document).ready(function() {
  $("#submit").click(function() {
    var username = $('#username').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (password === confirmPassword) {
      user1 = new User(username, email, password);
      $("#login-confirmation").text("Logged in as: " + username);
      sessionStorage.setItem('userName', username);
      window.location.href = "./menu.html";
    } else {
      alert("Password doesn't match");
    };
  });
});