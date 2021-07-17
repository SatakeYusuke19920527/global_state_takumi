import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link, Route, Switch } from 'react-router-dom'
import SecondPage from "../pages/SecondPage"



const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <h3>GlobalState</h3>
        <Link to="/SecondPage" >SecondPage</Link>
      </Toolbar>
    </AppBar>
  );
}
export default Header