import logo from './logo.svg';
import './App.css';
import EventButton from './EventButton';
import EventButtonFn from './EventButtonFn';
import Area from './Area';

function App() {
  return (
    <div className="App">
      <h3>이벤트 문법을 이용한 버튼 클릭 구현</h3>
      <EventButton />
      <h3>함수를 직접 선언해 구현한 방법</h3>
      <EventButtonFn />
      
      <hr></hr>
      <h3>너비와 높이 증가 시키기</h3>
      <Area />
    </div>
  );
}

export default App;
