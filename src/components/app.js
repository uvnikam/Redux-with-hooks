import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { INCREMENT, DECREMENT } from "../constant";

const App = () => {
  const counter = useSelector(state => state); //useSelector === mapStateToProps
  const dispatch = useDispatch(); //use for dispatching the actions

  return (
    <>
      <h1>{counter.num}</h1>
      <button
        onClick={() =>
          dispatch({
            type: INCREMENT,
            step: 1
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: DECREMENT,
            step: 1
          })
        }
      >
        Decrement
      </button>
    </>
  );
};

export default App;
