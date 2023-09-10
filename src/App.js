import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/search/:searchquery" element={<SearchResult/>}/>
      <Route path="/video/:id" element={<Video/>}/>
    </Routes>
  </>
  );
}

export default App;
