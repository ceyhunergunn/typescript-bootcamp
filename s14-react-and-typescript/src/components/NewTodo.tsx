import React, {
  // useRef,
  useState,
} from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  //   const textInputRef = useRef<HTMLInputElement>(null);

  const [textInput, setTextInput] = useState<string>("");
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = textInputRef.current!.value;
    // console.log(enteredText);
    onAddTodo(textInput);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        {/* <input type="text" id="todo-text" ref={textInputRef} /> */}
        <input
          type="text"
          id="todo-text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
