import { useState, useEffect } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

function MainTodo() {
  const [todos, setTodos] = useState(() => {
    return localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];
  });

  // إضافة مهمة جديدة كـ Object
  const addtodo = (toget) => {
    if (!toget.trim()) return;
    setTodos([...todos, { text: toget, completed: false }]);
  };

  // تبديل حالة المهمة (مكتملة / غير مكتملة)
  const toggleComplete = (indexToToggle) => {
    const updatedTodos = todos.map((todo, index) => {
      if (index === indexToToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // مسح المهمة
  const deleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app-card">
      <FormTodo onAddTodo={addtodo} />
      <TodoList
        todos={todos}
        onToggleTodo={toggleComplete}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default MainTodo;
