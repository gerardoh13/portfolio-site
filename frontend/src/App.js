import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import PDFViewer from "./components/PDFViewer";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<PDFViewer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
