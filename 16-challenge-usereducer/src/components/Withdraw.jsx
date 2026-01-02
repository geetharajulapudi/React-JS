export default function Withdraw({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "withdraw" })}>withdraw 50</button>
    </div>
  );
}
