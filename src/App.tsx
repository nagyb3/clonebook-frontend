import "./index.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    document.title = "clonebook";
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
