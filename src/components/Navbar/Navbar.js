import { Component } from "react";
import { MenuData } from "./MenuData";
import "./NavbarStyles.css";
import logo from "../../images/tcLogo.png";


class Navbar extends Component {
  //initializing and handling click when user has pressed ham burger icon
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    return (
      <nav className="NavbarItems">
        {/* logo */}
        <h2 className="logo">
        <img src={logo} width="100%" height="100%" alt="logo"/>
        </h2>
        {/* Ham burger icon handling onclick event */}
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        {/* Mapping data from MenuData.js */}
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "} >
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>)
          })}
        </ul>
      </nav>
    );

  }
}
export default Navbar;