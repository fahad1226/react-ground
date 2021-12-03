import React from "react";

const One = ({ locale, country = "Bangldesh", children }) => {
    return (
        <div>
            <h1>My Clock {children}wee</h1>
            <span>
                Hello From <b>{country}</b> and the Time is{" "}
                <h1> {new Date().toLocaleTimeString(locale)}</h1>{" "}
            </span>
        </div>
    );
};

export default One;
