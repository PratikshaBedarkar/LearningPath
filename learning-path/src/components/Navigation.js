import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <ul className="list-unstyled overflow-hidden p-3 navlink">
      <li className="float-left">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? "active" : "")}
          end
        >
          Courses
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
