import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ImageUpload from "./components/ImageUpload";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<ImageUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
