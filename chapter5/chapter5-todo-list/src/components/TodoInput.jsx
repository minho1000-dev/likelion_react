import { useState } from "react";

const TodoInput = ({ onCreate }) => {
  const [text, setText] = useState("");

  return (
    <div className="todoInput">
      <input
        placeholder="할 일을 입력해주세요."
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (text === "") {
            alert("할 일은 비워둘 수 없습니다.");

            return;
          }

          onCreate({
            id: Math.random(),
            text,
            completed: false,
          });

          setText("");
        }}
      >
        추가
      </button>
    </div>
  );
};

export default TodoInput;
