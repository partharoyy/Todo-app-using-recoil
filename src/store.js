import { atom, selector } from "recoil";

export const titleState = atom({
  key: "Title",
  default: "",
});

export const descriptionState = atom({
  key: "Description",
  default: "",
});

export const searchState = atom({
  key: "Search",
  default: "",
});

export const todosState = atom({
  key: "Todos",
  default: [],
});

export const fileredTodosState = selector({
  key: "FileredTodos",
  get: ({ get }) => {
    const todos = get(todosState);
    const filter = get(searchState);

    return todos.filter(
      (item) => item.title.includes(filter) || item.desc.includes(filter)
    );
  },
});
