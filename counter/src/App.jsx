import { useState } from "react";
import "./App.css";
const App = () => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const Steps = (e) => {
    setStep(Number(e.target.value));
  };
  const Increase = () => {  
    setValue(value + step);
  };
  const Decrease = () => {
    setValue(value - step);
  };
  const Reset = () => {
    setValue(0);
  };
  return (
    <div>
      <h2>{value}</h2>
      <section>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
      </section>
      <section>
        <span>Incement/Decrement by</span>
        <input type="number" defaultValue={step} onChange={Steps}></input>
      </section>
      <section>
        <button onClick={Reset}>Reset</button>
      </section>
    </div>
  );
};

export default App;
