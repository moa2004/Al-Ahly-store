function redirectToGoogleLogin() {
    var google_login_url = "https://accounts.google.com";
    window.location.href = google_login_url;
}
document.getElementById("loginWithGoogle").addEventListener("click", redirectToGoogleLogin);
function contactUsByEmail() {
    var email = "Alahlystore@gmail.com";
    var subject = "Regarding AL-Ahly Store";
    var body = "Dear AL-Ahly Store Team,\n\nI would like to get in touch with you regarding...\n\nSincerely, [Your Name]";
    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
}
document.getElementById("contactUs").addEventListener("click", contactUsByEmail);
let a=document.getElementById("As").onclick=()=>{
    window.location.href="About Us.html";
}
let b=document.getElementById("register").onclick=()=>{
    window.location.href="register.html";
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    window.location.href = "Al-ahly store.html";
});
const modeToggle = document.getElementById('mode');
let darkMode = false;

modeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    updateMode();
});

function updateMode() {
    const body = document.body;
    if (darkMode) {
        body.style.backgroundColor = '#34495e'; 
        modeToggle.textContent = 'Back to Light Mode';
    } else {
        body.style.backgroundColor = '#1a1a1b'; 
        modeToggle.textContent = 'Toggle Dark Mode';
    }
}


