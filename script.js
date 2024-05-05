document.getElementById("registrationForm").onsubmit = function(event) {
    event.preventDefault(); 
    window.location.href = "index.html";
  };
  window.onload = function() {
    const logo = document.querySelector('.logo');
    const form = document.getElementById('loginForm');
      logo.classList.add('animated');
    form.classList.add('animated');
  };
  