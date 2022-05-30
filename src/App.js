
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
import Dashboard from "./components/Dashboard/Dashboard";
import MyOrders from "./components/Dashboard/MyOrders";
import AddaReview from "./components/Dashboard/AddaReview";
import MyProfile from "./components/Dashboard/MyProfile";
import NotFound from "./components/NotFound/NotFound";
import MyPortfilio from "./components/MyPortfolio/MyPortfilio";
import EditProfile from "./components/Dashboard/EditProfile";

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
      <Route
            path="/dashboard"
            element={
              <RequireAuth>
             <Dashboard/>
              </RequireAuth>
            }
          >

          <Route path="myorders" element={<MyOrders />} />
          <Route path="add-review" element={<AddaReview />} />
          <Route path="profile" element={<MyProfile />} />


          </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/my-portfolio" element={<MyPortfilio/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
