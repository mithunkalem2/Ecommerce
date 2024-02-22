import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import "./Card.css";

const Header = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch=useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleclick = (event) => {
    setAnchorEl(event.CurrentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ fontSize: "15px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#Categories" style={{ fontSize: "15px" }}>
              Categories
            </Nav.Link>
            <Nav.Link href="#Account" style={{ fontSize: "15px" }}>
              Account
            </Nav.Link>
          </Nav>

          <Navbar.Brand
            className="Megha"
            style={{ fontSize: "30px", color: "pink" }}
          >
            Meghato
          </Navbar.Brand>

          <Badge
            badgeContent={"3"}
            id="basic-button" color="secondary"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleclick}
          >
            <i
              class="fa-solid fa-shopping-cart"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
