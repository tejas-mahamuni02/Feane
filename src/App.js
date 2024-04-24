import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Booking from './components/Booking';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Signout from './components/Signout';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Menu' element={<Menu />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Booking' element={<Booking />}></Route>
          <Route path='/Signin' element={<Signin />}></Route>
          <Route path='/Signup' element={<Signup />}></Route>
          <Route path='/Signout' element={<Signout />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/Search' element={<Search />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter >
    </div >
  );
}

export default App;
