import React, { Component } from "react";
import "./App.css";
import Services from "./components/Services";
import Schedule from "./components/Schedule";
import Review from "./components/Review";
import Booking from "./components/Booking";
import { Route, Switch } from "react-router";
import haircut from "./images/haircut.jpg";
import longhaircut from "./images/longhaircut.jpg";
import kidscut from "./images/kidscut.jpg";
import wetshave from "./images/wetshave.jpg";
import headshave from "./images/headshave.jpg";
import avi from "./images/avi.jpg";
import gabi from "./images/gabi.jpg";
import hagai from "./images/hagai.jpg";

class App extends Component {
  state = {
    services: [
      { id: 0, title: "Haircut", price: 70, image: haircut },
      { id: 1, title: "Long Haircut", price: 100, image: longhaircut },
      { id: 2, title: "Kids Cut", price: 300, image: kidscut },
      { id: 3, title: "Wet Shave", price: 50, image: wetshave },
      { id: 4, title: "Head Shave", price: 10, image: headshave },
    ],
    table: [
      { id: 0, barber: "Hagai", date: "Wednesday, April 28th", time: "14:00" },
      { id: 1, barber: "Avi", date: "Wednesday, April 28th", time: "17:00" },
      { id: 2, barber: "Hagai", date: "Thursday, April 29th", time: "13:00" },
      { id: 3, barber: "Avi", date: "Thursday, April 29th", time: "18:00" },
      { id: 4, barber: "Gabi", date: "Friday, April 30th", time: "12:00" },
      { id: 5, barber: "Gabi", date: "Friday, April 30th", time: "13:00" },
    ],

    selectedService: [],
    selectedDate: 0,
    selectedBarber: "All",
    barbers: [
      { name: "Avi", img: avi },
      { name: "Gabi", img: gabi },
      { name: "Hagai", img: hagai },
    ],
  };
  // componentDidMount() {
  //   this.setState({
  //     barbers: this.getBarbers(),
  //   });
  // }

  // getBarbers() {
  //   return [...new Set(this.state.table.map((i) => i.barber))];
  // }

  handleSelectService = (id) => {
    this.setState({ selectedService: [this.state.services[id]] });
  };
  handleSelectDate = (id) => {
    this.setState({ selectedDate: id });
    console.log(id);
  };

  handleBarberSelect = (barber) => {
    console.log(barber);
    this.setState({ selectedBarber: barber });
  };

  handleFilter = () => {
    return this.state.selectedBarber === "All"
      ? this.state.table
      : this.state.table.filter((i) => i.barber === this.state.selectedBarber);
  };

  render() {
    console.log(this.state.barbers);
    return (
      <>
        <Switch>
          <Route
            path="/schedule"
            render={(props) => (
              <Schedule
                handleFilter={this.handleFilter}
                handleSelect={this.handleSelectDate}
                barbers={this.state.barbers}
                onBarberSelect={this.handleBarberSelect}
                selectedService={this.state.selectedService}
              />
            )}
          />
          <Route
            path="/review"
            render={(props) => (
              <Review
                handleFilter={this.handleFilter}
                handleSelect={this.handleSelectDate}
                selectedService={this.state.selectedService}
                selectedDate={this.state.table[this.state.selectedDate]}
                {...props}
              />
            )}
          />
          <Route path="/booking" render={(props) => <Booking />} />
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
