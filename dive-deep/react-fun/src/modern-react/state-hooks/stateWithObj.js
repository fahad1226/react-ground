import { useState } from "react";

const StateWithObj = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: "",
        passion: "",
    });
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>state with object</h1>
            <h3>title is {todo.title} </h3>
            <p>description is {todo.description}</p>
            <span>
                {" "}
                passion is <b>{todo.passion}</b>{" "}
            </span>{" "}
            <br />
            {/* input fields */}
            <input
                type="text"
                placeholder="title"
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />{" "}
            <br />
            <textarea
                cols="15"
                rows="6"
                placeholder="description"
                onChange={(e) =>
                    setTodo({ ...todo, description: e.target.value })
                }
            ></textarea>
            <br />
            <input
                type="text"
                placeholder="Passion"
                value={todo.passion}
                onChange={(e) => setTodo({ ...todo, passion: e.target.value })}
            />
            <br /> <br />
            <h2>{counter}</h2> <br />
            <button
                type="button"
                onClick={() => setCounter((prevState) => prevState + 1)}
            >
                Add 1
            </button>
        </div>
    );
};

export default StateWithObj;
