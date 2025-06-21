import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom"; // 👈 for routing
import "./Navbar.css";
import logo from "/assets/image/sambhaar.png";

function Topbar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  return (
    <section className="sticky-top" style={{ zIndex: 999 }}>
      <marquee className="marquee">
        <span style={{ marginLeft: "8px" }}>
          Enjoy Same Day Delivery* across Thoraipakkam! ❤️
        </span>
        <span style={{ marginLeft: "20px" }}>
          Get Extra 10% Off* on Your 1st Order 🤯
        </span>
        <span style={{ marginLeft: "8px" }}>
          FREE* SHIPPING🚚 above 495₹ for all orders - BUY NOW
        </span>
      </marquee>

      <Navbar expand="md" bg="light" variant="light">
        <Container fluid>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <Navbar.Brand as={Link} to="/" className="m-0">
                <Box
                  component="img"
                  src={logo}
                  alt="Sambhaar"
                  sx={{
                    height: "50px",
                    width: {
                      xs: "160px",
                      sm: "200px",
                      md: "220px",
                      lg: "250px",
                    },
                  }}
                />
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ border: "none" }}
            />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center d-flex flex " style={{ gap: "20px" }}>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/shop/grocery-essentials">Products</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

              <div className="d-flex align-items-center ms-2">
                <IconButton
                  onClick={handleSearchToggle}
                  style={{ color: "#EA580C" }}
                >
                  <SearchIcon />
                </IconButton>

                {showSearch && (
                  <Form className="d-flex align-items-center ms-2">
                    <FormControl
                      type="search"
                      placeholder="Search..."
                      className="me-2"
                      aria-label="Search"
                      style={{ width: "180px" }}
                    />
                  </Form>
                )}
              </div>

              <Button
                className="ms-2"
                style={{
                  backgroundColor: "#EA580C",
                  color: "#fff",
                  border: "none",
                  width: "100px",
                }}
                as={Link}
                to="/login"
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Topbar;
