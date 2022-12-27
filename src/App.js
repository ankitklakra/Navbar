import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Aavartan from "./components/Aavartan/Aavartan";
import Timeline from "./components/Timeline/Timeline";
// NavBar and Home Components
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Aavartan/>
      <Timeline/>
    </div>
  );
}
