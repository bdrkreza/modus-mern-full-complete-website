import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from "./Users/SignUp/SignUp";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import FeatureProduct from "./Pages/FeatureProduct/FeatureProduct";
import Home from "./Pages/Home/Home";
import Shops from "./Pages/Shops/Shops";
import Admin from "./Dashboard/Admin/Admin";
import CheckOutCart from "./Pages/CheckOut/CheckOutCart";
import SignIn from './Users/SignIn/SignIn'
import { AuthProvider, PrivateRoute } from "./Users/lib/Auth";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/shops" component={Shops} />
            <Route path="/feature" component={FeatureProduct} />
            <Route path="/blog" component={Blogs} />
            <PrivateRoute path="/checkout" component={CheckOutCart} />
            <Route path="/about" component={About} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/contact" component={Contact} />
            <Route path="/dashboard" component={Admin} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;