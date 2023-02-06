import { Route, Routes } from "react-router-dom";
import { Preview } from "../components/Preview";
import { Home } from "../pages/Home";
import { Info } from "../pages/Info";
import { Register } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path=":id" element={<Preview />} />
    </Route>
    <Route path="/info/:id" element={<Info />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);
