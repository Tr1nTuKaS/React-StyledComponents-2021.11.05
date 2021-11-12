import TodosHeader from "./TodoHeader";
//import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import { useState } from "react";
import TodoAddNew from "./TodoAddNew";
import css from "../Styles/TodoListPage.module.css";
const initTodos = [
  {
    id: 1,
    title: "Drink coffe",
    isDone: false,
  },
  {
    id: 2,
    title: "Go to park",
    isDone: true,
  },
  {
    id: 3,
    title: "Make a pie",
    isDone: false,
  },
];

function TodoListPage() {
  const [todosArr, setTodosArr] = useState(initTodos);
  const [todoIdCounter, setTodoIdCounter] = useState(4);

  //create state todosArr using useState
  const handleAddNewTodo = (title) => {
    console.log("add new");
    const newTodoObj = {
      id: todoIdCounter,
      title: title,
      isDone: false,
    };
    const newTodoArrState = [...todosArr, newTodoObj];
    setTodosArr(newTodoArrState);
    setTodoIdCounter(() => todoIdCounter + 1);
  };

  const handleTodoDelete = (deleteId) => {
    console.log("whant to delete todo with id", deleteId);
    // call handleTodoDelete from todo item
    //  setTodosArr with state copy without the one obj that has id === id
    // filter
    const filteredMainArr = todosArr.filter((tObj) => tObj.id !== deleteId);
    setTodosArr(filteredMainArr);
  };
  const handleUpdateTodo = (updateId, updateTitle) => {
    console.log("handleUpdateTodo", updateId, updateTitle);
    //cope todosArr
    //copy find item id===id
    // founded item update title
    //settodosArr  [padoti copy masiva]
    let cop = [...todosArr];
  };

  return (
    <div className={css.container}>
      <TodosHeader />
      <section className={css.container}>
        <TodoList
          todos={todosArr}
          onTodoDelete={handleTodoDelete}
          onEditTodo={handleUpdateTodo}
        />
        <TodoAddNew onAddNewTodo={handleAddNewTodo} />
      </section>
    </div>
  );
}

export default TodoListPage;
