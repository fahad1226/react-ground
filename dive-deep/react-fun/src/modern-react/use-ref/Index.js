import { useEffect, useRef } from "react";

export default function Form() {
    // using ref to autofocus the input box when page loads
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <p>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="enter something"
                />
            </p>
        </div>
    );
}
