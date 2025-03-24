import { useState } from "react";
import "./App.css";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clickedPositions, setClickedPositions] = useState([]);

  /**
   * 개발에서 오프셋은 일반적으로 동일 오브젝트 안에서
   * 오브젝트 처음부터 주어진 요소나 지점까지의 거리를 나타내는 단어.
   */

  const getOffsetInfo = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    return { x: offsetX, y: offsetY };
  };

  return (
    <>
      <h1>마우스 트래커</h1>
      <div className="trackerInfo">
        <div>
          현재 위치 x: {position.x}, y: {position.y}
        </div>
      </div>
      <div
        className="trackerArea"
        onClick={(e) => {
          const { x: offsetX, y: offsetY } = getOffsetInfo(e);

          setClickedPositions([
            ...clickedPositions,
            { x: offsetX, y: offsetY },
          ]);
        }}
        onMouseMove={(e) => {
          const { x: offsetX, y: offsetY } = getOffsetInfo(e);

          setPosition({ x: offsetX, y: offsetY });
        }}
      >
        마우스 트래킹 하는 공간
        <div
          className="trackerBall"
          style={{ left: position.x, top: position.y }}
        />
        {clickedPositions.map((pos, index) => (
          <div
            key={index}
            className="clickedBall"
            style={{ left: pos.x, top: pos.y }}
          />
        ))}
      </div>
    </>
  );
}

export default App;
