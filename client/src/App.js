import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import About from './pages/About'
import History from './pages/History'
import "./App.css";
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />        
        <Route exact path='/buy' element={<Buy />} />        
        <Route exact path='/sell' element={<Sell />} />
        <Route exact path='/history' element={<History />} />
        <Route exact path='/about' element={<About />} />
        
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
