// import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Main from './components/Main';
import { Height } from '@mui/icons-material';
import ScrollTop from './components/ScrollTop'; // ScrollTop 컴포넌트 임포트
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <div style={{height: '16px'}} id="back-to-top-anchor"></div>
      <Main />
      <ScrollTop>
        <Fab sx={{color: 'navy', backgroundColor: 'white'}} size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <div style={{height: '80px'}}></div>
    </div>
  );
}

export default App;
