import { useState } from "react";

const CounterController = ({ onChange }) => {
  const [step, setStep] = useState(1);

  return (
    <div className="counterController">
      <button
        onClick={() => {
          onChange(-step);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          onChange(+step);
        }}
      >
        +
      </button>
      <div className="counterStepper">
        <label>변화량</label>
        <input
          type="number"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default CounterController;
