import { useCallback, useState } from "react";
import Button from "./Button";
import Dummy from "./Dummy";
import ShowCount from "./ShowCount";

const Father = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // we have to pass an anonymous function to the first parameter of the useCallback hook
    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    /** In React if the props or state changes then the component will re render itself, it's the protocol of ReactJS.
     *  But here we can see that <Title /> component should not re render because the changes of the state or prop should not bother *
     *  this Title component, it has nothing to do with It. as well as Button component. they're are really unnecessary re rendering.
     *  and we should take care of them. we shoud not re-render them unless it's necessary.
     *
     * to solve this problem React provise us @memo function from react library
     */

    /** By using @memo function from React we can cached those component. So if the data of that particular component change then only
     *  the component will re render. in this case Title, Button and ShowComponent. (they will be cached for now)
     *
     *  But here we also can see that both @Button components are re-rendering althogh they should not (we did use @memo )
     *  the reason they're re rendering is beacuse of these functions (incrementByOne & incrementByOne). as the component re render
     *  the functions are changed the're refernces (address), so as the refence changed @memo function consider this as the change of
     *  state or something, so the component will re render. But we don't want that, we want those component to stop rendering
     *  themselves unless it's necessary.
     *  To solve that problem, we can use the @useCallback hook from React library.
     *
     */

    return (
        <div className="app">
            <Dummy />
            <ShowCount count={count1} title="Counter 1" />
            <Button handleClick={incrementByOne}>Increment by one</Button>
            <hr />
            <ShowCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive}>Increment by five</Button>
        </div>
    );
};

export default Father;
