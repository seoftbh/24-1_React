import React from 'react'
import NavBar from './NavBar'
import './Header.css'

function Header({ theme, toggleTheme }) {
  const lightThemeBtn = {
    backgroundColor: 'DodgerBlue',
  }
  const darkThemeBtn = {
    backgroundColor: 'MediumSlateBlue',
  }

  return (
    <header>
        <div className='title'>
          <h1 style={{ color: theme === 'light' ? 'navy' : 'white'}}>추천 사이트</h1>
          <button onClick={toggleTheme} style={theme === 'light' ? lightThemeBtn : darkThemeBtn}>
          {theme === 'light' ? '☀️' : '🌙'}
          </button>
        </div>
        <NavBar></NavBar>
    </header>
  )
}

export default Header
