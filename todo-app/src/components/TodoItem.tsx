import React from "react";
import tick from "../assets/tick.png";
import nottick from "../assets/not_tick.png";
import deleteicon from "../assets/delete.png";

type TodoItemProps = {
  text: string;
  id: number;
  isComplete: boolean;
  deleteTodo: (id: number) => void;
  toggle: (id: number) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : nottick} alt="" className="w-7" />
        <p
          className={`ml-4 text-[17px] ${
            isComplete ? "line-through text-slate-500" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={deleteicon}
        alt=""
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItem;
