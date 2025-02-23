import { useDispatch, useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import { logout } from "../redux/slices/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo-black.png";

export function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <section>
      <div className="p-2 d-flex justify-content-center fw-bolder p-2 align-items-center">
        <span>
          <FontAwesomeIcon icon={faFire} className="text-warning" /> Free
          shipping on all U.S. orders $50+
        </span>
        <a
          href="#"
          className="btn btn-outline-success mx-4 fw-bolder rounded-2"
        >
          Shop Now
        </a>
      </div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} className="img-fluid" alt="TeeSpace" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>

              {user ? (
                <>
                  <span className="nav-link fw-bold text-success">
                    Welcome, {user.username}!
                  </span>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </Nav>
            <div className="d-flex align-items-center">
              <div className="mx-5">
                <span className="text-black-50">HOTLINE:</span>
                <br />
                00 1900 8188
              </div>
              {!user && <button className="btn btn-dark">Sign Up</button>}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}
