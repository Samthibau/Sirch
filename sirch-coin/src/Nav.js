import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Sirch Coin</span>
        <ul className="nav nav-underline">
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Send Sirch Coin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              Check Coin Balance
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
