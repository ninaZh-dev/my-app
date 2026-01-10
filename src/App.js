import { createElement } from "react";

function logInput() {
    const input = document.getElementById("input-value")
    if(input.value ==! ""){
        adjustList();
    }
}

function adjustList(){
    const list = document.getElementById("tracker-list")

    const li = createElement("li")
    li.textContent = input.value
    list.appendChild(li)
    input.value = ""
}