import "./App.css";
import Barbers from "./components/Barbers/Barbers";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="container">
      <div className="img">
        <img src="images/barbershop.jpg" alt="" />
      </div>
      <Services />
      {/* <Barbers /> */}
    </div>
  );
}

export default App;
