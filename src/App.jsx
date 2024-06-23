import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import CreateBlog from "./pages/CreateBlog";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route element={<PrivateRoute />}>
          <Route element={<ProfilePage />} path="/profile"></Route>
          <Route element={<CreateBlog />} path="/create-blog"></Route>
        </Route>
        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
