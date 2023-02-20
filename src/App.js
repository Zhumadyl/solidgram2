import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PostDetailPage from "./components/postDetailPage/PostDetailPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import ChatPage from "./pages/chatPage/ChatPage";
import HomePage from "./pages/homePage/HomePage";
import Interesting from "./pages/interesting/Interesting";
import LoginPage from "./pages/loginPage/LoginPage";

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="App">
      <Routes>
        {/* TODO: protect our routes */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isAuth}>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<PostDetailPage/>} />
        <Route path="/interesting2" element={<Interesting />} />
        <Route path="/reels" element={<HomePage />} />
        <Route
          path="/chat"
          element={
            <PrivateRoute isAuth={isAuth}>
              <ChatPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute isAuth={isAuth}>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/interesting2"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Interesting />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;