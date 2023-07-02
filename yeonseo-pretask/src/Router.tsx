import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carousel" element={<Carousel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
