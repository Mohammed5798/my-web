import './style/main.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './components/navbar';
import HomePage from './pages/home';
import WebDesign from './pages/webDesign';
import WebDev from './pages/webDev';
import Contact from './pages/contact';
import Footer from './components/footer';


function App() {

  return (

    <div className="app">

    <Router>
      <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/webDesign' element={<WebDesign/>}/>
          <Route path='/webDev' element={<WebDev/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer></Footer>
      </Router>

    </div>
    
  )
}

export default App;
