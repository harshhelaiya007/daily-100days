/* DAY 1 FUNCTAIONALITY HERE */
window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    const signUpBtn = document.querySelector('.signup-text a');
    const signUpSection = document.querySelector('.signupSection');
    const loginSection = document.querySelector('.loginSection');
    signUpBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // Login
        if (loginSection.classList.contains('dsp-none')) {
            loginSection.classList.remove('dsp-none')
        } else {
            loginSection.classList.add('dsp-none')
        }
        // Login
        // signup
        if (signUpSection.classList.contains('dsp-none')) {
            signUpSection.classList.remove('dsp-none')
        } else {
            signUpSection.classList.add('dsp-none')
        }
        // signup
    })
});
/* DAY 1 FUNCTAIONALITY HERE */