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
      { id: 6, barber: "Hagai", date: "Saturday, May 1th", time: "11:00" },
      { id: 7, barber: "Avi", date: "Saturday, May 1th", time: "12:00" },
      { id: 8, barber: "Hagai", date: "Saturday, May 1th", time: "14:00" },
      { id: 9, barber: "Avi", date: "Saturday, May 1th", time: "15:00" },
      { id: 10, barber: "Gabi", date: "Saturday, May 1th", time: "15:00" },
      { id: 11, barber: "Gabi", date: "Saturday, May 1th", time: "16:00" },
      { id: 12, barber: "Avi", date: "Saturday, May 1th", time: "16:00" },
    ],

    barbers: [
      { name: "Avi", img: avi },
      { name: "Gabi", img: gabi },
      { name: "Hagai", img: hagai },
    ],
    selectedService: [],
    selectedDate: [],
    itemsToShowDate: 4,
    stepToShowDate: 43,
    selectedBarber: "All",
  };
  // componentDidMount() {
  //   this.setState({
  //     barbers: this.getBarbers(),
  //   });
  // }

  // getBarbers() {
  //   return [...new Set(this.state.table.map((i) => i.barber))];
  // }

  handleDateShowMore = () => {
    let items = this.state.itemsToShowDate + this.state.stepToShowDate;
    this.state.table.length <= items
      ? this.setState({ itemsToShowDate: this.state.table.length })
      : this.setState({ itemsToShowDate: items });
    // console.log(this.state.itemsToShowDate);
  };

  handleSelectService = (id) => {
    this.setState({ selectedService: [this.state.services[id]] });
  };
  handleSelectDate = (id) => {
    this.setState({ selectedDate: [this.state.table[id]] });
  };

  handleSelectBarber = (barber) => {
    console.log(barber);
    this.setState({ selectedBarber: barber });
  };

  handleFilter = () => {
    return this.state.selectedBarber === "All"
      ? this.state.table
      : this.state.table.filter((i) => i.barber === this.state.selectedBarber);
  };

  render() {
    return (
      <>
        <Switch>
          <Route
            path="/schedule"
            render={(props) => (
              <Schedule
                handleDateShowMore={this.handleDateShowMore}
                handleFilter={this.handleFilter}
                handleSelect={this.handleSelectDate}
                onSelectBarber={this.handleSelectBarber}
                selectedService={this.state.selectedService}
                selectedBarber={this.state.selectedBarber}
                barbers={this.state.barbers}
                itemsToShowDate={this.state.itemsToShowDate}
              />
            )}
          />
          <Route
            path="/review"
            render={(props) => (
              <Review
                handleFilter={this.handleFilter}
                handleSelect={this.handleSelectDate}
                barbers={this.state.barbers}
                selectedService={this.state.selectedService}
                selectedDate={this.state.selectedDate}
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
