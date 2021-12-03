/*
 * Title: Change Name Script File
 * Description: A vanilla JS Implementation of a simple Counter that adds 1 to each user click
 * Author: Fahad Bin Munir
 * Date: 29/11/2021
 *
 */

let name = "";

let nameHeader = document.querySelector("#name");

nameHeader.addEventListener("mouseenter", () => {
    name = "Fahad Bin Munir";
    nameHeader.textContent = name;
});

nameHeader.addEventListener("mouseleave", () => {
    name = "Fahad";
    nameHeader.textContent = name;
});
