import React from "react";
import Loading from "./components/Loading";
import router from "./routes/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/styles.scss";
import { useGlobalContext } from "./utils/context";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        {router.map((route, index) => {
          const { path, component, exact } = route;
          return <Route key={index} path={path} component={component} exact={exact} />;
        })}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
