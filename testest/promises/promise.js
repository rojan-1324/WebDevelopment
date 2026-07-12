const button = document.getElementById("loginbutton");
const message = document.getElementById("message");

button.addEventListener("click", async () => {
    button.disabled = true;
    message.textContent = "Logging in...";

    await new Promise((resolve) => {
        setTimeout(resolve, 1500);
    });

    message.textContent = "Welcome back!";
    button.disabled = false;
});