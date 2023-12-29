import logo from './logo.svg';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

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
    <Footer/>
    </div>
    </div>
  );
}

export default App;
