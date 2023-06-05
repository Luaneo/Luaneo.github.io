let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF0000";

let actions = [];

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        } else {
            button.classList.add("active");
        }
        actions.push(button.innerHTML);
    });
});

Telegram.WebApp.onEvent('mainButtonClicked', () => {
    for (const action of actions) {
        tg.sendData(action)
    }
})
