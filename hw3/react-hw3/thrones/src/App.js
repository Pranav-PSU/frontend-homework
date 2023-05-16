import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from './Components/NavBarComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/Home/HomeComponent';
import SearchComponent from './Components/Search/SearchComponent';
import HousesComponent from './Components/Houses/HousesComponent';

function App() {
  return (
    <Router>

  <div className='App'>
   <NavBarComponent></NavBarComponent>
   <Routes>
          <Route path="/home" exact element={<HomeComponent/>} />
          <Route path="/search" element={<SearchComponent/>} />
          <Route path="/houses" element={<HousesComponent/>} />
    </Routes>
  </div>
  </Router>
  );
}

export default App;
