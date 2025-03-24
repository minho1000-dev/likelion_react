const TimerController = ({ isRunning, onStart, onPause }) => {
  return (
    <div className="timerController">
      {isRunning ? (
        <button onClick={onPause} className="stopButton">
          일시정지
        </button>
      ) : (
        <button onClick={onStart} className="startButton">
          시작
        </button>
      )}
    </div>
  );
};

export default TimerController;
