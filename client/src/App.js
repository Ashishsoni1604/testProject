import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/Login";
import ProductDedicatedPage from "./pages/ProductDedicatedPage";
import loginCheck from "./actions/loginCheck";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  useEffect(() => {
    loginCheck().then((isLoggedIn) => {
      setIsLoggedIn(isLoggedIn);
    });
  }, []);

  return (
    <BrowserRouter>
      <nav className="nav-bar">
        <Link to="/">HOME</Link>
        <h3>B2B Mart</h3>
        {isLoggedIn ? (
          <div
            class={"logout-btn"}
            onClick={() => {
              window.localStorage.removeItem("auth-token");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </div>
        ) : (
          <div />
        )}
      </nav>
      {isLoggedIn ? (
        <div className="App">
          <Routes>
            <Route exact path="/" element={<SearchPage />} />
            <Route path="/product/:id" element={<ProductDedicatedPage />} />
          </Routes>
        </div>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;
