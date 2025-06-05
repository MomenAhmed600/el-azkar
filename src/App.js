import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import ElAzkar from "./pages/ElAzkar";
import ElDaawat from "./pages/ElDaawat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="//elAzkar" element={<ElAzkar />} />
      <Route path="/elDaawat" element={<ElDaawat />} />
    </Routes>
  );
}

export default App;
