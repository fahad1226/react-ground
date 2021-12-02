/*
 * Title: Increament Script File
 * Description: A vanilla JS Implementation of a simple Counter that adds 1 to each user click
 * Author: Fahad Bin Munir
 * Date: 29/11/2021
 *
 */

let number = 0; // we cannot use const here, as we are literally changing the value inside the listener

let display = document.querySelector("#display");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
    number += 1;
    display.textContent = number;
});
