import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { CityPage } from "./pages/City/CityPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/city" element={<CityPage />} />
        <Route
          path="*"
          element={
            <h1 style={{ color: "red" }}>THE PAGE WAS NOT FOUND! (404)</h1>
          }
        />
      </Routes>
    </>
  );
}

export default App;
