const rating_buttons = document.querySelectorAll(".rate_nums > span");
const thank_you = document.querySelector("#selected_x_out_of_five");
const submit_button = document.querySelector("#submit");
const rate_card = document.querySelector(".rating_state");
const thanks_card = document.querySelector(".thank_you_state");

let selected = 0;

rating_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        rating_buttons.forEach((button) => {
            button.classList.remove("chosen");
        })
        button.classList.add("chosen");
        selected = button.getAttribute("data-value");
    });
})

submit_button.addEventListener("click", () => {
    if (selected != 0){
        rate_card.style.visibility = "hidden";
        thanks_card.style.visibility = "visible";
        let text = document.createTextNode(`You selected ${selected} out of 5`);
        thank_you.appendChild(text);
    } else {
        let alert_para = document.createElement("p");
        alert_para.classList.add("alert");
        let alert_text = document.createTextNode("Please, select a number 🙏");
        alert_para.appendChild(alert_text);
        rate_card.appendChild(alert_para);
    }
})