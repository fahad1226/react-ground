import React from "react";

const EventHandling = () => {
    function sayHi(...name) {
        console.log("Hii " + name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handling the form submission in REACT");
    };

    return (
        <div>
            <h1>This is a event handling page</h1>
            <button onClick={() => sayHi("fahad", "Hello", "JS")}>Click</button>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="your name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventHandling;
