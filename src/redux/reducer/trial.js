import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  HANDLE_CHANGE,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  disabled: true,
};

export const reducer = (state = initialState, actions) => {
  console.log("actions", actions.type.EDIT_TODO);
  switch (actions.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          {
            works: actions.works,
            id: actions.id,
          },
        ],
      };
    case DELETE_TODO:
      const todos = state.data.filter((todo) => todo.id !== actions.id);
      //todos.splice(todos, 1);
      return {
        ...state,
        data: [...todos],
      };
    case EDIT_TODO:
      const todoo = [...state.data];
      return {
        ...state,
        data: [...todoo],
        disabled: false,
      };
    case HANDLE_CHANGE:
      const change = [...state.data];
      // change[index] = { ...change[index], works };
      return {
        ...state,
        data: [
          ...change,
          (change[actions.id] = {
            ...change[actions.id],
            works: actions.works,
          }),
        ],
      };
    default:
      return state;
  }
};
