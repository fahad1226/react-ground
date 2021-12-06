import { useState } from "react";

const UseState = () => {
    const [name, setName] = useState("React!");
    const [stack, setStack] = useState("");

    

    const handleStackChange = (e) => {
        setStack(e.target.value);
        if (e.target.value.includes(".js")) {
            setName("do not put extension here");
        } else {
            setName("");
        }
    };

    return (
        <div>
            <h1>Hello Modern React!</h1>
            <span>what are you cyrrently learning?</span>
            <p>you're currently learning {stack} </p>
            <input
                value={stack}
                onChange={handleStackChange}
                cols="30"
                rows="10"
            />
            <p>{name}</p>
        </div>
    );
};

export default UseState;
