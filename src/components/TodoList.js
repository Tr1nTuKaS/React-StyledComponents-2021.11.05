import css from "../Styles/TodoList.module.css";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  // console.log(props.todos);
  //generate todos
  return (
    <ul id="list" className={css.list}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          isDone={todo.isDone}
          id={todo.id}
          onTodoDelete={props.onTodoDelete}
          onEditTodo={props.onEditTodo}
        />
        // <TodoItem key={todo.id} />
      ))}
    </ul>
  );
}
