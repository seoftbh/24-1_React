// import logo from './logo.svg';
import './App.css';
// import Header from './funcComp/Header';
// import Main from './funcComp/Main';
// import Footer from './funcComp/Footer';
// import Header from './classComp/Header';
// import Main from './classComp/Main';
// import Footer from './classComp/Footer';
import MyComponent from './MyComponent';

function App(props) {
  return(
    <div>
      <MyComponent name="HTML" />
      <MyComponent name="React" />
      <MyComponent name="Javascript" />
      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  )
}

export default App;
