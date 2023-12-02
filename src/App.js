import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
