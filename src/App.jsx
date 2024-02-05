import "./App.css";

import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
// import Footer from './Components/Footer'
import Homepage from "./Pages/Homepage";

function App() {
  return (
    // <Footer/>
    // <HomeLayout/>

    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
