import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  name: "",
  nationalId: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payloan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        name: action.payload.name,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateCustomer":
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
}

const rootreducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootreducer);

// store.dispatch({ type: "account/deposit", payload: 200 });
// console.log(store.getState());

// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 800, purpose: "Buy a car" },
// });

// console.log(store.getState());

// store.dispatch({ type: "account/payloan" });

function deposit(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

function withdraw(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
function payloan() {
  return {
    type: "account/payloan",
  };
}

store.dispatch(deposit(1000));
console.log(store.getState());

store.dispatch(withdraw(100));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a house"));
console.log(store.getState());

store.dispatch(payloan());
console.log(store.getState());

function createCustomer(name, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      name,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateCustomer(name) {
  return {
    type: "customer/updateCustomer",
    payload: {
      name,
    },
  };
}

store.dispatch(createCustomer("Michael", "82jsawya3"));
console.log(store.getState());

store.dispatch(updateCustomer("Jackson"));
console.log(store.getState());
