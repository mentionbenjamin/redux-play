import {createStore} from "redux";

const reducer = function (state, action) {
 if(action.type === "INCREMENT") {
   return state + 1;
 }
 if(action.type === "DECREMENT") {
   return state - 1;
 }
 return state;
}


const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch({type: "INCREMENT", payload: 1 })
store.dispatch({type: "INCREMENT", payload: 1 })
store.dispatch({type: "INCREMENT", payload: 1 })
store.dispatch({type: "INCREMENT", payload: 1 })
store.dispatch({type: "INCREMENT", payload: 1 })
store.dispatch({type: "DECREMENT", payload: 1 })
store.dispatch({type: "DECREMENT", payload: 1 })
store.dispatch({type: "DECREMENT", payload: 1 })
store.dispatch({type: "DECREMENT", payload: 1 })
