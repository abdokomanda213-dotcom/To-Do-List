import Buttom from "./Buttom";

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-msg">لا توجد مهام حالياً!</p>
      ) : (
        todos.map((todo, index) => {
          const todoText = typeof todo === "string" ? todo : todo.text;
          const isDone = typeof todo === "object" ? todo.completed : false;

          return (
            <div key={index} className="todo-item">
              <p
                className="todo-text"
                style={{
                  textDecoration: isDone ? "line-through" : "none",
                  opacity: isDone ? 0.5 : 1,
                }}
              >
                {todoText}
              </p>
              <Buttom
                index={index}
                isCompleted={isDone}
                onToggle={onToggleTodo}
                onDelete={onDeleteTodo}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default TodoList;
