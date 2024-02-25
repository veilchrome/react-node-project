import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./context/todoSlicer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
