
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Blogs from "./components/Blogs/Blogs";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Purchase from "./components/Purchase/Purchase";

function App() {
  return (
    <div className="App ">
      <Header />
    
      <Routes> 
        
      <Route
            path="/purchase/:id"
            element={
              <RequireAuth>
             <Purchase/>
              </RequireAuth>
            }
          ></Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
