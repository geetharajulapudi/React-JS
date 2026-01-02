import { useState } from "react";

function App() {
  return (
    <div className="App">
      <HandleClick />
    </div>
  );
}
export default App;

function HandleClick() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("May 24, 2025");
  date.setDate(date.getDate() + 1);

  return (
    <>
      <div className="setStep">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span> step : {step}</span>
        <button onClick={() => setStep((c) => c  + 1)}>+</button>
      </div>
      <div className="setCount">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? `today is`
            : count > 0
            ? `${count} days from today`
            : `${count} days ago from today`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}


