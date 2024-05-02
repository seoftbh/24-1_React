// import logo from './logo.svg';
import './App.css';
import Stopwatch from './Stopwatch';
import { SimpleForm } from './SimpleForm';
import NumberForm from './NumberForm';
import MultiForm from './MultiForm';

function App() {
  return (
    <div className="App">
      {/* <h3>스톱워치</h3>
      <Stopwatch />       */}
      <h3>간단한 입력 양식</h3>
      <SimpleForm />
      
      <hr></hr>
      <h3>숫자만 입력받는 텍스트박스</h3>
      <NumberForm />

      <hr></hr>
      <h3>여러 개의 항목을 가진 입력 양식</h3>
      <MultiForm /> 
    </div>
  );
}

export default App;
