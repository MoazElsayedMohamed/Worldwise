import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="product">Product</NavLink>
        </li>
        <li>
          <NavLink to="pricing">pricing</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;