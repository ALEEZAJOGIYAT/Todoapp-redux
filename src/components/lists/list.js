import React from "react";
import { useDispatch, connect } from "react-redux";

import {
  deleteToDo,
  editToDo,
  updateToDo,
  handleChange,
} from "../../redux/actions/actions";

const List = ({ todoos }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {todoos.map((todo, index) => (
        <div className="list" key={index}>
          <input
            className="editinput"
            type="text"
            name="edit"
            key={index}
            value={todo.works}
            disabled={todo.disabled}
            onChange={(e) => {
              let item = e.target.value;
              dispatch(handleChange(todo.id, item));
            }}
          ></input>
          <button
            className="btndelete"
            type="button"
            onClick={() => dispatch(deleteToDo(todo.id))}
          >
            DELETE
          </button>
          <button
            className="btncreate"
            type="button"
            onClick={() => dispatch(editToDo(todo.id))}
          >
            EDIT
          </button>
          <button
            className="btnupdate"
            type="button"
            onClick={() => dispatch(updateToDo(todo.id))}
          >
            UPDATE
          </button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoos: state.data,
  };
};
export default connect(mapStateToProps)(List);
