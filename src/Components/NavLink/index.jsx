import { NavLink as NavLinkRouter } from "react-router-dom";

const NavLink = ({ to, children, activeSyle, ...props }) => {
  return (
    <NavLinkRouter
      {...props}
      to={to}
      className={({ isActive }) => (isActive ? activeSyle : undefined)}
    >
      {children}
    </NavLinkRouter>
  );
};

export { NavLink };
