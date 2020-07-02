import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import "./App.css";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// const Homepage1 = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// };
// const TopicList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>TOPIC List</h1>
//     </div>
//   );
// };
// const TopicDetail = () => {
//   return (
//     <div>
//       <h1>TOPIC DETAIL</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
