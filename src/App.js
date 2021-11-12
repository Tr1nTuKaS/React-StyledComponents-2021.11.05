import "./App.css";
// import { Switch, Route } from "react-router-dom";
import TodoListPage from "./components/TodoListPage";

function App() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="App">
      <div onSubmit={handleSubmit}>
        {/* <Switch> */}
        {/* <Route path="/todos"> */}
        <TodoListPage />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
    </div>
  );
}

export default App;
