import "./App.css";

import Services from "./components/Services";
import Schedule from "./components/Schedule";
import Review from "./components/Review";
import Booking from "./components/Booking";
import { Route, Switch } from "react-router";

function App() {
  return (
    <Switch>
      <Route path="/schedule" component={Schedule} />
      <Route path="/review" component={Review} />
      <Route path="/booking" component={Booking} />
      <Route path="/" component={Services} />
    </Switch>
  );
}

export default App;
