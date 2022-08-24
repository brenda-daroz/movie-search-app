
import './App.css';
import Header from './components/header/Header';
import Home from './home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CardDetails from './components/cardDetails/cardDetails';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:movieId' element={<CardDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
