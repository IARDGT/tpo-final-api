import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={require('../assets/logo.png')} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
        </a>
        <form class="d-flex me-auto p-2" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="d-flex flex-row mb-1" id="navbarSupportedContent">
          <button type="button" class="btn btn-outline-primary">Log in</button>
          <button type="button" class="btn btn-primary" style={{marginLeft: 10 + 'px',marginRight: 10 + 'px'}}>Register</button>
        </div>
      </div>
    </nav>
  );
}