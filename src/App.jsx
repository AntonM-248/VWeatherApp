import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
