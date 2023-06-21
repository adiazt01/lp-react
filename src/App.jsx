import "./styles/App.scss";
import { Navbar } from "./components/navbar/navbar";
import { Welcome } from "./components/section/Welcome";
import { Benefits } from "./components/section/Benefits";
import { Package } from "./components/section/Package";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Welcome />
        <Benefits/>
        <Package/>
      </div>
    </>
  );
}

export default App;
