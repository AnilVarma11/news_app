import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Sports from './Pages/Sports';
import Bussiness from './Pages/Bussiness';
import Tech from './Pages/Tech';
import Catagory from './Pages/Catagory';

function App() {
  return (
       <Router>
        <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/sports' element={<Sports/>}/>
            <Route path='/bussiness' element={<Bussiness/>} />
            <Route path='/tech' element={<Tech/>}/>
            <Route path='/categories' element={<Catagory/>}/>
         </Routes>
       
       </Router>
  );
}

export default App;
