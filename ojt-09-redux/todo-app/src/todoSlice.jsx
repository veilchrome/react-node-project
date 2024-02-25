import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        isEditing: false,
      };
      state.push(newTodo);
    },

    toggleComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    toggleEdit: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isEditing = !todo.isEditing;
      }
    },

    saveEdit: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
        todo.isEditing = false; 
      }
    },

    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo, toggleEdit, saveEdit } =
  todoSlice.actions;
export default todoSlice.reducer;
