import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import "./App.css";

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
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
