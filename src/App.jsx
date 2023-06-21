import "./styles/App.scss";
import { Navbar } from "./components/navbar/navbar";
import { Welcome } from "./components/section/Welcome";
import { Benefits } from "./components/section/Benefits";
import { Package } from "./components/section/Package";
import { Footer } from "./components/section/Footer"

function App() {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <Welcome />
        <Benefits/>
        <Package />
      </div>
      <Footer />
    </>
  );
}
export default App;
