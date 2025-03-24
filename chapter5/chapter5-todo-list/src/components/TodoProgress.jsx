const TodoProgress = ({ todos }) => {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const allCount = todos.length;
  const progress = Math.floor((completedCount / allCount) * 100);

  if (allCount === 0) {
    return null;
  }

  return (
    <div className="todoProgress">
      <div>{`${completedCount} / ${allCount}`}</div>
      <progress value={progress} max="100" />
      <div>{`${Math.floor(progress)}%`}</div>
    </div>
  );
};

export default TodoProgress;
