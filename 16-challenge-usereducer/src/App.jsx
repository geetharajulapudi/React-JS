import "./index.css";
import OpenAccount from "./components/OpenAccount";
import Withdraw from "./components/Withdraw";
import Deposit from "./components/Deposit";
import RequestLoan from "./components/RequestLoan";
import PayLoan from "./components/PayLoan";
import CloseAccount from "./components/CloseAccount";
import MainScreen from "./components/MainScreen";
import { useReducer } from "react";

const minBalance = 500;
const depositAmount = 150;
const withdrawAmount = 50;
const requestloanAmount = 5000;
const intialState = {
  status: "loading",
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        isActive: true,
        balance: state.balance + minBalance,
        status: "openAccount",
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + depositAmount,
        status: "deposit",
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - withdrawAmount,
        status: "withdraw",
      };

    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: requestloanAmount,
        balance: state.balance + requestloanAmount,
        status: "requestLoan",
      };
    case "payLoan":
      if (state.loan === 0 || state.balance <= state.loan) return state;
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        status: "payLoan",
      };
    case "closeAccount":
      return {
        ...intialState,
        status: "loading,",
      };
    default:
      throw new Error("unknown action)");
  }
}

function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    intialState
  );
  return (
    <>
      <div className="App">
        <MainScreen balance={balance} loan={loan} />
        <div className="button">
          <OpenAccount dispatch={dispatch} disabled={isActive} />
          {isActive && (
            <>
              {balance >= withdrawAmount ? (
                <Withdraw dispatch={dispatch} />
              ) : (
                "No sufficient balance"
              )}
              <Deposit dispatch={dispatch} />

              <RequestLoan dispatch={dispatch} />
              <PayLoan dispatch={dispatch} balance={balance} loan={loan} />
              <CloseAccount dispatch={dispatch} />
            </>
          )}
          {/* <OpenAccount />
          <Withdraw /> */}
        </div>
      </div>
    </>
  );
}

export default App;
