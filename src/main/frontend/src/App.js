import logo from './logo.svg';
// import { Route, BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import RestaurentDetails from "./Components/restaurentDetails";
import Location from "./Components/location";
import Navbar from './Components/Navbar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={<RestaurentDetails />} />

    //     </Routes>
    // </Router>
  //   <div className="App">
  //     <RestaurentDetails />
  // </div>
  
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route exact path="/dashboard" element={<RestaurentDetails />} />
      <Route exact path="/location" element={<Location />} />
      <Route exact path="/" element={<Location />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
