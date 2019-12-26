import { INCREMENT, DECREMENT } from "./constant";

function reducer(state = { num: 1000 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        num: state.num + action.step
      };
    case DECREMENT:
      return {
        ...state,
        num: state.num - action.step
      };
    default:
      return state;
  }
}

export default reducer;
