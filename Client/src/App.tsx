import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Pages/Auth";
import FirstPage from "./Pages/FirstPage";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/noteit/*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
