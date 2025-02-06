import { useReducer } from "react";

const initialState = { count: 0 };

type CoutnerState = {
  count: number;
};

type CounterAction = {
  type: "increment" | "decrement" | "reset"; //string
  payload?: number;
};

function reducer(state: CoutnerState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload ?? 0) };
    case "decrement":
      return { count: state.count - (action.payload ?? 0) };
    case "reset":
      return { count: initialState.count };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Counter {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        reset
      </button>
    </>
  );
};
