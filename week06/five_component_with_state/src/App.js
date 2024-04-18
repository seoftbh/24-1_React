import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Main from './Main';
import Quotes from './Quote';

function App() {
  // state 정의
  const [ theme, setTheme ] = useState('light');
   // 토글
   const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  const lightThemeBg = {
    backgroundImage: 'linear-gradient(to right, #ada6ff, #99ccff)',
    // height: 'inherit',
    padding: '36px',
    boxSizing: 'border-box'
  }
  const darkThemeBg = {
    backgroundImage: 'linear-gradient(to right, #57537f, #516b86)',
    // height: 'inherit',
    padding: '36px',
    boxSizing: 'border-box'
  }

  return (
    <div className='App' style={theme === 'light' ? lightThemeBg : darkThemeBg}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Main />
      <Quotes />
    </div>
  );
}

export default App;
