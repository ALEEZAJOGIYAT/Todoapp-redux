import React from "react";
import { addToDo } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const ToDoos = () => {
  const dispatch = useDispatch();
  return (
    <reactFragments>
      <h1 className="heading"> TO DO APP </h1>
      <form
        className="formcontrol"
        onSubmit={(e) => {
          e.preventDefault();
          let input = e.target.userInput.value;
          dispatch(addToDo(input));
        }}
      >
        <input type="text" name="userInput"></input>
        <button className="btn">ADD!!</button>
      </form>
    </reactFragments>
  );
};

export default ToDoos;
