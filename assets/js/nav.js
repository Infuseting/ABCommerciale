const connexionButton = document.querySelector(".connexionBtn")
connexionButton.addEventListener("click", () => {
    const loginForm = document.querySelector('.login-form-container');
    loginForm.classList.remove("hidden");
})

const closeLoginForm = document.querySelector('.login-form-container .cross');
closeLoginForm.addEventListener("click", () => {
    const loginForm = document.querySelector('.login-form-container');
    loginForm.classList.add("hidden");
});