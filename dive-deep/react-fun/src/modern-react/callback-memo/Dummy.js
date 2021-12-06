import React from "react";

const Dummy = () => {
    console.log("rendering title...");
    return (
        <div>
            <h1>just to see you're rendering or not</h1>
        </div>
    );
};

export default React.memo(Dummy);
