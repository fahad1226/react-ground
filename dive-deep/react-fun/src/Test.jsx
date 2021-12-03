import React from "react";

const Test = () => {
    function testJSX(name) {
        if (name === "fahad") {
            return <h1>Hello {name}, it's bloddy React! </h1>;
        } else {
            return (
                <h1>
                    Ohh, Name shold be <b>Fahad</b>{" "}
                </h1>
            );
        }
    }

    return (
        <div>
            <h1>Welcome Fahad, It's react {testJSX("fahad")} </h1>
        </div>
    );
};

export default Test;
