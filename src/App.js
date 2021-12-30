import React from "react";
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          {/* SearchPage (the list of search results) */}
          <Route path="/search" element={<SearchPage />}>
          </Route>
         

          {/* Home (the page with the search) */}
          <Route path="/" element={<Home />}>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
