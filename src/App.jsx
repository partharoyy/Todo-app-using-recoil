import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import {
  descriptionState,
  titleState,
  todosState,
  searchState,
  fileredTodosState,
} from "./store";
import "./App.css";

export default function App() {
  const [title, setTitle] = useRecoilState(titleState);
  const [desc, setDesc] = useRecoilState(descriptionState);
  const [search, setSearch] = useRecoilState(searchState);
  const [todos, setTodos] = useRecoilState(todosState);
  const filteredTodosList = useRecoilValue(fileredTodosState);

  const addTodoHandler = () => {
    setTodos((prev) => [...prev, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const onDeleteHandler = (title) => {
    const filteredTodos = todos.filter((item) => title !== item.title);
    setTodos(filteredTodos);
  };

  const RenderTodos = ({ todosToRender }) => {
    return todosToRender.map((item) => (
      <div key={item.title} className="todo">
        <div className="todo-text-container">
          <h3>{item.title}</h3>
          <h4>{item.desc}</h4>
        </div>
        <div
          onClick={() => onDeleteHandler(item.title)}
          className="todo-button"
        >
          X
        </div>
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      <input
        title="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Search"
      />
      <input
        title="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Title"
      />
      <input
        title="desc"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}
        placeholder="Description"
      />
      <button onClick={addTodoHandler} className="main-button">
        Add todo
      </button>
      {search === "" ? (
        <RenderTodos todosToRender={todos} />
      ) : (
        <RenderTodos todosToRender={filteredTodosList} />
      )}
    </div>
  );
}
