export default function CloseAccount({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "closeAccount" })}>Close Account</button>
    </div>
  );
}
