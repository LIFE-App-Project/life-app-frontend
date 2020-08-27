import React, { Component } from "react";
import "./Header.css";
import Logo from "./Logo.png";
import User from "./user.png";
import Profile from "./user.svg";

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = { onClick: false };
      this.handleClick = this.handleClick.bind(this);

      this.state = { openMenu: false };
      this.handleOpenMenu = this.handleOpenMenu.bind(this);
   }

   handleClick() {
      this.setState((prevState) => ({
         onClick: !prevState.onClick,
      }));
   }

   handleOpenMenu() {
      this.setState((prevState) => ({
         openMenu: !prevState.openMenu,
      }));
   }

   render() {
      return (
         <div className="header_div">
            <div className="logo_div">
               <div className="menu_icon_div" onClick={this.handleOpenMenu}>
                  <div className="menu_icon"> </div>
                  <div className="menu_icon"> </div>
                  <div className="menu_icon"> </div>
                  {this.state.openMenu ? (
                     <div className="openMenu">
                        <div className="menu_user">
                           <img
                              src={Profile}
                              style={{ height: "50px", marginLeft: "20px" }}
                              alt="user"
                           />
                           <p style={{ color: "black", marginLeft: "20px" }}>
                              DeSaint
                           </p>
                        </div>
                        <div className="mobile_ul_div">
                           <ul className="mobile_ul">
                              <a href="Home">
                                 <li style={{ color: "black" }}>HOME</li>
                              </a>
                              <a href="Home">
                                 <li style={{ color: "black" }}>DASHBOARD</li>
                              </a>
                              <a href="Home">
                                 <li style={{ color: "black" }}>PROFILE</li>
                              </a>
                           </ul>
                        </div>
                     </div>
                  ) : null}
               </div>
               <img className="logo" src={Logo} alt="Logo" />
            </div>

            <div className="ul_div">
               <ul
                  className="ul"
                  style={{
                     display: "inline-flex",
                  }}
               >
                  <a className="header_a" href="Home">
                     <li className="header_li"> HOME </li>
                  </a>
                  <a className="header_a2" href="Home">
                     <li className="header_li"> DASHBOARD </li>
                  </a>
                  <a className="header_a" href="Home">
                     <li className="header_li"> PROFILE </li>
                  </a>
               </ul>
               <div className="pgh_div">
                  <img src={User} className="User" alt="user" />
                  <p className="header_p">DeSaint</p>
                  <div className="arrow_div" onClick={this.handleClick}></div>
                  {this.state.onClick ? (
                     <div className="onclick">
                        <p>Change Password</p>
                        <p>LogOut</p>
                     </div>
                  ) : null}
               </div>
            </div>
            <div></div>
         </div>
      );
   }
}

export default Header;
