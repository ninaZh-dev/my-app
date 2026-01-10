import { createElement } from "react";

function logInput() {
    const input = document.getElementById("input-value")
    if(input.value !== ""){
        adjustList();
    }
}

function adjustList(){
    const list = document.getElementById("tracker-list")

    const li = document.createElement("li")
    li.textContent = value
    list.appendChild(li)
}