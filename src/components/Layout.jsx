import { Outlet, NavLink, useNavigate } from "react-router-dom";
import '../style/components/layout.css';
import logo from "../assets/gcb-17.png";

const Layout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');

  };
  return (
    <>
      <nav>
        <img src={logo} alt="" className="logo" onClick={handleClick}/>
        <ul className="ul-layout">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "links active-link" : "links")}
              to="/actualites"
            >
              Actualites
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "links active-link" : "links")}
              to="/compagnie"
            >
              Compagnie
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "links active-link" : "links")}
              to="/creations"
            >
              Créations
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "links active-link" : "links")}
              to="/agenda"
            >
              Agenda
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "links active-link" : "links")}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;