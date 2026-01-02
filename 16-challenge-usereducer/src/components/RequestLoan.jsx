export default function RequestLoan({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "requestLoan" })}>
        Request Loan 5000
      </button>
    </div>
  );
}
