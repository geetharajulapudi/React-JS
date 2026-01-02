export default function PayLoan({ dispatch, balance, loan }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "payLoan" })} >Pay Loan</button>
    </div>
  );
}
