import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlansPage from "./pages/PlansPage";
import ProfilePage from "./pages/ProfilePage";
import CardPage from "./pages/CardPage";
import PlanPage from "./pages/PlanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plan/:id" element={<PlanPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
