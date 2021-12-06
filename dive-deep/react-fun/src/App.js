import { useState } from "react";
import "./App.css";
import Father from "./modern-react/callback-memo/Father";
function App() {
    const [show, setShow] = useState(true);

    return (
        <div className="App">
            <Father />

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
