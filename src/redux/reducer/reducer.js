import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  HANDLE_CHANGE,
  UPDATE_TODO,
} from "../actions/actionTypes";

const initialState = {
  data: [],
  disabled: true,
};

export const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TODO:
      return {
        ...state,
        data: [
          ...state.data,
          {
            works: actions.works,
            id: actions.id,
            disabled: actions.disabled,
          },
        ],
      };
    case DELETE_TODO:
      const todos = state.data.filter((todo) => todo.id !== actions.id);
      return {
        ...state,
        data: [...todos],
      };
    case EDIT_TODO:
      let newData = state.data;
      newData.forEach((item, index) => {
        if (item.id === actions.id) newData[index].disabled = false;
        newData[index] = { ...newData[index] };
      });

      return {
        ...state,
        data: [...newData],
      };
    case UPDATE_TODO:
      let updateData = state.data;
      updateData.forEach((items, index) => {
        if (items.id === actions.id) updateData[index].disabled = true;
      });
      return {
        ...state,
        data: [...updateData],
      };
    case HANDLE_CHANGE:
      const itemChangeIndex = state.data.findIndex(
        (item) => item.id === actions.id
      );
      let clonedState = [...state.data];
      clonedState[itemChangeIndex].works = actions.works;

      return {
        ...state,
        data: clonedState,
      };

    default:
      return state;
  }
};

// let dd = [...state.data];
// let clonedState = dd.map((item) =>
//   item.id === actions.id ? (item.works = actions.works) : item
// );
