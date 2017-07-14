

$(document).ready(function() {

    $("#newUser_button").click(function() {

    });


    $("#login_button").click(function() {

    });
 

  
  $(document).on("submit", "#login-form", handleFormSubmit);
 
  // A function to handle what happens when the form is submitted
  function handleFormSubmit(event) {
    event.preventDefault();

    var username = $("#username").val().trim();
    var password = $("#password").val().trim();
    
    authenUser({
      "username": username,     
      "password": password
      
    });
  }

  // A function for authentication
  function authenUser(userData) {
    console.log(userData);
    $.post("/api/users/login", userData)
      .then(function() {
        getToRedirect();
      });
  };

  function getToRedirect() {
    $.get("/redirect").then(function(results) {

      console.log(results);

    }); 

   // window.location.replace("/redirect");
  }
});
