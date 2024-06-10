import { useEffect, useRef, useState } from "react";
import { TodoItem } from "../types/types";

const TodoList = () => {
  function getTodoList() {
    return JSON.parse(localStorage.getItem("todoList")!) || [];
  }

  const [todoList, setTodoList] = useState<TodoItem[]>(getTodoList());
  const [itemId, setItemId] = useState<number | null>(null);
  const [toggleEdit, setToggleEdit] = useState<boolean>(false);

  const name = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    const nameValue = name.current!.value;
    const descriptionValue = description.current!.value;

    if (nameValue !== "" && descriptionValue !== "") {
      const newTodo: TodoItem = {
        id: Math.random(),
        name: nameValue,
        description: descriptionValue,
      };

      setTodoList((prevTodos) => [...prevTodos, newTodo]);
      name.current!.value = "";
      description.current!.value = "";
      name.current!.focus()
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEnableEdit = (todo: TodoItem) => {
    name.current!.value = todo.name;
    description.current!.value = todo.description;
    setItemId(todo.id);
    setToggleEdit(true);
  };

  const handleEditTodo = () => {
    const nameValue = name.current!.value;
    const descriptionValue = description.current!.value;
    if (nameValue !== "" && descriptionValue !== "" && toggleEdit != false) {
      const editTask = todoList.map((todo) => {
        if (todo.id === itemId) {
          return { ...todo, name: nameValue, description: descriptionValue };
        }
        return todo;
      });

      setTodoList(editTask);
      setItemId(null);
      setToggleEdit(false);
      name.current!.value = "";
      description.current!.value = "";
    }
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <p>
          <label htmlFor="name">Task Name</label>
          <input id="name" type="text" ref={name} />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <input id="description" type="text" ref={description} />
        </p>
        <p>
          {toggleEdit ? (
            <button onClick={handleEditTodo}>Edit Task</button>
          ) : (
            <button onClick={handleAddTodo}>Add Task</button>
          )}
        </p>
      </form>

      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <article>
              <div>
                <h2>{todo.name}</h2>
                <p>{todo.description}</p>
              </div>
              <div>
                <button onClick={() => handleEnableEdit(todo)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
