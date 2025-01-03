import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <Router>
    <Layout>
      <Routes>
        {/* <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  </Router>
);

export default AppRoutes;