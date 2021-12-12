import { useState } from "react";
import "./assets/css/global.css";
import Logo from "./modern-react/react-css/Logo";

function App() {
    const [show, setShow] = useState(true);

    return (
        <div className="App">
            <h1>Learn React!</h1>
            <Logo />

            {/* <div> {show && <Effect />}</div>

            <p>
                <button
                    type="button"
                    onClick={() => setShow((preState) => !preState)}
                >
                    {show ? "Hide Post" : "Show Post"}
                </button>
            </p> */}
            {/* <Clock /> */}

            {/* <Clock locale="bn-BD">
                <div>
                    <h1>this is child for Clock components</h1>
                </div>
            </Clock> */}

            {/* <Form />

            <Calclator /> */}
        </div>
    );
}

export default App;
