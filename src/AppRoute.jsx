import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RootLayout from "./RootLayout"  // Header 포함된 레이아웃

export default function AppRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}