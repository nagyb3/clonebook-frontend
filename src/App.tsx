import "./index.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" Component={Main} />
        </Routes>
      </BrowserRouter>
      {/* <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1> */}
    </div>
  );
}

export default App;
