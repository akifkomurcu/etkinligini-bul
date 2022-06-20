import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button } from "@chakra-ui/react";
import ToggleColor from "../ToggleColor";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/">
          <div className="logo">Etkinliğini Bul</div>
        </Link>
        <ul className={styles.menu}>
          <li>Products</li>
        </ul>
      </div>
      <div className={styles.right}>
        <ToggleColor />
      </div>
    </nav>
  );
}

export default Navbar;
