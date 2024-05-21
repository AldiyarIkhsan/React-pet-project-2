import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <h2 style={{ color: "white" }}>Static Pages</h2>
      <NavLink
        style={({ isActive }) =>
          isActive ? { color: "lightyellow", textDecoration: "none" } : {}
        }
        to=""
        end
      >
        All
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="quotes/star-wars"
      >
        Star Wars
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="quotes/famous-people"
      >
        Famous People
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="quotes/saying"
      >
        Saying
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="quotes/humour"
      >
        Humour
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="quotes/motivational"
      >
        Motivational
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="new"
      >
        Submit new Quotes
      </NavLink>

    </nav>
  );
};

export default Menu;
