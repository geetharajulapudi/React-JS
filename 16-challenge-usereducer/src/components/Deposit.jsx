export default function Deposit({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "deposit" })}>Deposit 150</button>
    </div>
  );
}
