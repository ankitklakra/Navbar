import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
// NavBar and Home Components
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );
}
