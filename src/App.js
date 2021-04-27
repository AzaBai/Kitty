import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Breeds from "./pages/Breeds";
import Home from "./pages/Home";
import RandomKitty from "./pages/RandomKitty";
import Header from "./pages/Header";
import BreedDetails from "./pages/BreedDetails";

function App() {
  return (
      <Router>
          <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/breeds/" component={Breeds}/>
        <Route exact path="/breeds/:id" component={BreedDetails}/>
        <Route exact path="/random" component={RandomKitty}/>
      </Router>
  );
}

export default App;
