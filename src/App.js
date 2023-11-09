import Footer from "./Footer";
import Navbar from "./Navbar";
import "./style.css";
import Main from "./Main";
import Login from "./Login";
import Register from "./Register";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
