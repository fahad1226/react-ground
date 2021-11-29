/*
 * Title: DIsplay Something fun
 * Description: A ReactJS Implementation of display something fun
 * Author: Fahad Bin Munir
 * Date: 29/11/2021
 *
 */

// display using querySelector JS function
const rootContainer = document.querySelector("#root");

ReactDOM.render("Hello React", rootContainer);

// display using React function
const myElement = React.createElement("div", null, [
    React.createElement("p", null, "this is a p tag inside div"),
    React.createElement("p", null, "this is a p 2 tag inside div"),
]);
ReactDOM.render(myElement, rootContainer);
