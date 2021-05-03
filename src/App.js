import React, { Component } from "react";
import "./App.css";
import Services from "./components/Services";
import Schedule from "./components/Schedule";
import Review from "./components/Review";
import Booking from "./components/Booking";
import { Route, Switch } from "react-router";

class App extends Component {
  state = {
    services: [
      { id: 0, title: "Haircut", price: 70 },
      { id: 1, title: "Long Haircut", price: 100 },
      { id: 2, title: "Kids Cut", price: 120 },
      { id: 3, title: "Wet Shave", price: 50 },
      { id: 4, title: "Head Shave", price: 60 },
    ],
    table: [
      { id: 0, barber: "Avi", date: "Wednesday, April 28th", time: "17:00" },
      { id: 1, barber: "Avi", date: "Thursday, April 29th", time: "18:00" },
      { id: 2, barber: "Gabi", date: "Friday, April 30th", time: "12:00" },
      { id: 3, barber: "Gabi", date: "Friday, April 30th", time: "13:00" },
      { id: 4, barber: "Hagai", date: "Wednesday, April 28th", time: "14:00" },
      { id: 5, barber: "Hagai", date: "Thursday, April 29th", time: "13:00" },
    ],
    selectedService: 0,
    selectedDate: 0,
  };

  handleSelectService = (id) => {
    this.setState({ selectedService: id });
  };
  handleSelectDate = (id) => {
    this.setState({ selectedDate: id });
    // console.log(id);
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/schedule"
            render={(props) => (
              <Schedule
                table={this.state.table}
                handleSelect={this.handleSelectDate}
              />
            )}
          />
          <Route
            path="/review"
            render={(props) => (
              <Review
                selectService={this.state.services[this.state.selectedService]}
                selectedDate={this.state.table[this.state.selectedDate]}
                {...props}
              />
            )}
          />
          <Route path="/booking" component={Booking} />
          <Route
            path="/"
            render={(props) => (
              <Services
                services={this.state.services}
                handleSelect={this.handleSelectService}
                {...props}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;

// function App() {
//   return (
//     <Services />
//     // <Switch>
//     //   <Route path="/schedule" component={Schedule} />
//     //   <Route path="/review" component={Review} />
//     //   <Route path="/booking" component={Booking} />
//     //   <Route path="/" component={Services} />
//     // </Switch>
//   );
// }

// export default App;
