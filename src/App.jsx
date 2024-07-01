import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import NotFound from "./components/notFound/NotFound";
import BlogDetails from "./pages/BlogDetails";
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
        <Route element={<BlogDetails />} path="/blog/:id"></Route>
        <Route element={<LoginPage />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<NotFound />} path="*"></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
