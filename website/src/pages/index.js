import React from "react"
import NavBar from "../components/NavBar/NavBar"
import SideDrawer from "../components/SideDrawer/SideDrawer"
import BackDrop from "../components/BackDrop/BackDrop"

const home = props => (
  <div className="page" style={{height: "100%", fontFamily: "Roboto"}}>
    <NavBar/>
    <SideDrawer/>
  </div>
)

export default home