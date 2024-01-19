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

export const todosFilterState = atom({
  key: "TodosFilter",
  default: "Show All",
});

export const fileredTodosState = selector({
  key: "FileredTodos",
  get: ({ get }) => {
    const filter = get(todosFilterState);
    const list = get(todosState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
