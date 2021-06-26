import { BrowserRouter as Router, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";


import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { PreLoader } from "./Components/PreLoader/PreLoader";


import Home from "./Pages/Home/Home";
import Transactions from "./Pages/Transitions/Transitions"

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000)
  }, []);

  return (
    <>
      {!ready ? (
        <PreLoader />
      ) : (
        <Router>
          <Header />
          <Switch>
            <Home exact path="/" />
            <Transactions path="/transactions" />
          </Switch>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
