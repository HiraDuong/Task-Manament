import logo from './logo.svg';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
    <div className='app-side-bar'>
    <SideBar/>
    </div>
    <div className='app-body'>
    <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/login' element={<Login/>} />


         
    </Routes>
    </div>
    </div>
  );
}

export default App;
