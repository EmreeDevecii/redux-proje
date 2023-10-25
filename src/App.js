import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/BookList";
import BookList from "./components/Cart";

function App() {
  return (
    <div className="root">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
