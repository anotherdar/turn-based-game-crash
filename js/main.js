const actions = document.querySelectorAll(".action-btn");

actions.dataset.attack; // "3"
actions.dataset.defend; // "12314"
actions.dataset.heal; // "cars"


const attk_btn = document.querySelector("[data-action='attack']");
const skill_1_btn = document.querySelector("#skill-1-btn");
const skill_2_btn = document.querySelector("#skill-2-btn");
const defend_btn = document.querySelector("#defend-btn");


function handle_action(action) {
    console.log(action);
}

const AMBIENT_VOLUME = 0.08;
