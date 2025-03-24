const CounterHistories = ({ histories }) => {
  return (
    <div>
      <h2>변경 내역</h2>
      {histories.length === 0 && <div>변경 내역이 없습니다.</div>}
      <ul>
        {histories.map((history, index) => (
          <li key={index}>{history}</li>
        ))}
      </ul>
    </div>
  );
};

export default CounterHistories;
