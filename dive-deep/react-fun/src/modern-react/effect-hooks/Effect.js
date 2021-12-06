import { useEffect, useState } from "react";

const Effect = () => {
    const [name, setName] = useState("");

    const [age, setAge] = useState(23);

    useEffect(() => {
        // I should use this hook only when name is update, not on the initial page load
        console.log("compoment mounte if update the name");
    }, [name]);

    useEffect(() => {
        // I should use this hook only initial page load, cause i want this hook to be run once
        let intervel = setInterval(() => {
            console.log("watch is ticking");
        }, 2000);
        console.log("component mount on the firt load of the page");

        return () => {
            console.log(
                "component will unmount here because of the return statement"
            );
            clearInterval(intervel);
        };
    }, []);

    return (
        <div>
            <h1>Learning use effect in React!</h1>
            <p>
                name is: <b>{name}</b>{" "}
            </p>

            <p>
                <input
                    maxLength="20"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </p>

            <p>{age}</p>
            <span>
                <button type="button" onClick={() => setAge(70)}>
                    change age
                </button>
            </span>
        </div>
    );
};

export default Effect;
