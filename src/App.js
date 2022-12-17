import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// NavBar and Home Components
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}
