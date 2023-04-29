import React from 'react';
import Navbar from "./Component/Navbar/Navbar";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import Home from "./Component/Pages/Home";
import Items2 from "./Component/Pages/Items2";
function App() {
  return (
    <div className="bg-maincolor">

        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route  path="/" index element={<Home />}></Route>
                <Route  path="/Items2" index element={<Items2 />}></Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
