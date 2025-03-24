const TimerDisplay = ({ time }) => {
  return (
    <div className="timerDisplay">
      <span className="value">{time}</span>
      <span className="unit">초</span>
    </div>
  );
};

export default TimerDisplay;
