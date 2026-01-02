import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

const rootreducer = combineReducers({
  account: accountReducer,
  customer: customerReducer, 
});
const store = createStore(rootreducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;  

/*
store.dispatch({ type: "account/deposit", payload: 200 });
console.log(store.getState());

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 800, purpose: "Buy a car" },
});

console.log(store.getState());

store.dispatch({ type: "account/payloan" });



store.dispatch(deposit(1000));
console.log(store.getState());

store.dispatch(withdraw(100));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a house"));
console.log(store.getState());

store.dispatch(payloan());
console.log(store.getState());


store.dispatch(createCustomer("Michael", "82jsawya3"));
console.log(store.getState());

store.dispatch(updateCustomer("Jackson"));
console.log(store.getState()); */
