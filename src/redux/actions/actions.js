import {
  ADD_TODO,
  DELETE_TODO,
  HANDLE_CHANGE,
  EDIT_TODO,
  UPDATE_TODO,
} from "./actionTypes";

export const addToDo = (works) => {
  return {
    type: ADD_TODO,
    works,
    id: new Date().getTime().toString(),
    disabled: true,
  };
};

export const deleteToDo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const handleChange = (id, works) => {
  return {
    type: HANDLE_CHANGE,
    works,
    id,
  };
};
export const editToDo = (id) => {
  return {
    type: EDIT_TODO,
    id,
  };
};

export const updateToDo = (id) => ({
  type: UPDATE_TODO,
  id,
});
