/*
 * Title: Display Something fun
 * Description: A ReactJS Implementation of display something fun
 * Author: Fahad Bin Munir
 * Date: 29/11/2021
 *
 */

// display using querySelector JS function
const rootContainer = document.querySelector("#root");

// ReactDOM.render("Hello React", rootContainer);

// display using React function
// const myElement = React.createElement("div", null, [
//     React.createElement("p", null, "this is a p tag inside div"),
//     React.createElement("p", null, "this is a p 2 tag inside div"),
// ]);
// ReactDOM.render(myElement, rootContainer);

// I've written above code using React function, thanks to React Team that we don't have write code like this.
// Let's use JSX to write more beutiful and declartive React code that excatly look like HTML

const myJSXElement = (
    /*
        now this will cause a syntyax error because this is invalid javascript for the browser.
        to resolve this we have to use a transpiler that can translate this code to browser readable code
    */
    <div className="container">
        <div>
            <h2 id="name">Fahad</h2>
            <h1 id="display">0</h1>
            <div>
                <button id="button">Increment +</button>
            </div>
        </div>
    </div>
);

/* now let's solve this using more React way */

const MyReactElement = () => {
    return (
        <div className="container">
            <div>
                <h2 id="name">Fahad</h2>
                <h1 id="display">0</h1>
                <div>
                    <button id="button">Increment +</button>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<MyReactElement />, rootContainer);

/* 
    if we put the JS abobe the render function the it won;t work, cause rendering is happening before the execution of JS code.
    that's why we have to put this after the render function of React.
    
    
    ** although we don;t havre to write our JS code like this, there's no point to write this kinda code if you're using React or any frontend framework.
    cause we don't have to access DOM directlty, Luckily, we won't have to anymore. React will use somekinda virtual DOM to manipulate DOM for us. That's the beuty of React.
*/

let number = 0;
let name = "";

let nameHeader = document.querySelector("#name");
let display = document.querySelector("#display");
let button = document.querySelector("#button");

button.addEventListener("click", () => {
    number += 1;
    display.textContent = number;
});

nameHeader.addEventListener("mouseenter", () => {
    name = "Fahad Bin Munir";
    nameHeader.textContent = name;
});

nameHeader.addEventListener("mouseleave", () => {
    name = "Fahad";
    nameHeader.textContent = name;
});
