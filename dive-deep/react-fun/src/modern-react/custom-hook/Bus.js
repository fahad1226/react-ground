import { useEffect, useState } from "react";

const Bus = () => {
    const [busName, setBusName] = useState("Soudi");
    const [screenSize, setScreenSize] = useState(false);

    const checkScreenSize = () => {
        setScreenSize(window.innerWidth > 700);
    };

    useEffect(() => {
        checkScreenSize();

        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);
    return (
        <div>
            <h1>
                if screen size is {screenSize ? "large" : "small"} then it is a
                bus
            </h1>
            <p>{busName}</p>
            <button onClick={() => setBusName("Shamoli")}>
                Change bus name
            </button>
        </div>
    );
};

export default Bus;
