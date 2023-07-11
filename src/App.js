import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import CardPage from "./pages/CardPage";
import PlanPage from "./pages/PlanPage";
import LoginPage from "./pages/LoginPage";
import RouteGuard from "./components/RouteGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/plan/:id" element={<PlanPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <RouteGuard path="/" component={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
