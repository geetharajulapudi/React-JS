export default function OpenAccount({ dispatch, disabled }) {
  return (
    <div>
      <button
        onClick={() => dispatch({ type: "openAccount" })} disabled = {disabled}
      >
        OpenAccount
      </button>
    </div>
  );
}
