const TodoListItems = ({ todos, onToggle, onDelete }) => {
  return (
    <div className="todoListItems">
      <h3>할 일 목록</h3>
      {todos.length === 0 && <div className="noItems">할 일이 없습니다.</div>}
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  onToggle(todo.id);
                }}
              />
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
              <button
                onClick={() => {
                  onDelete(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoListItems;
