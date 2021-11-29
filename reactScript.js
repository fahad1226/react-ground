const MyElement = () => {
    /**  
        this is state functionality that React gives us to manage ourt application state.
        the number state is an @array we can destructure the array to initialize the value and set the value.
    */
    const [number, setNumber] = React.useState(0);
    return (
        <div>
            <h2 id="name">Fahad</h2>
            <h1 id="display">{number}</h1>
            <div>
                {/* if we call the function like this onClick={setNumber(number + 1)} this will call himself in the runtime, we don't want that, we want the function to be called when the button is clicked. that's why we have to make it as an arrow function */}
                <button id="button" onClick={() => setNumber(number + 1)}>
                    Increment +
                </button>
            </div>
        </div>
    );
};

/**
 * now we can have as many counter as we want without worrying about anything
 * that we did before while we wrote Vanilla JS code to solve this problem.
 */
ReactDOM.render(
    <div className="container">
        <MyElement />,
        <MyElement />,
        <MyElement />,
        <MyElement />
    </div>,
    document.querySelector("#root")
);
