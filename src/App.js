import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Card/Cards'
import MainBox from './components/SearchBox/MainBox/MainBox'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sell from './components/Sell/Sell';
import Favs from './components/Favs/Favs';
import Buy from './components/Buy/Buy';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<MainBox />}>
            Rent
          </Route>
          <Route path='/Buy' element={<Buy />}>
            Buy
          </Route>
          <Route path='/Sell' element={<Sell />}>
            Sell
          </Route>
          <Route path='/Favs' element={<Favs />}>
            Fav          
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
