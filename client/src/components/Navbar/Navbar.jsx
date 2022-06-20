import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./style.module.css";
import { Button, Input } from "@chakra-ui/react";
import ToggleColor from "../ToggleColor";
import { useContext } from "react";
import FilterContext from "../Context/FilterContext";
function Navbar() {
  const { setResult } = useContext(FilterContext);

  const handleChange = (e) => {
    setResult(e.target.value);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <Link to="/">
          <div className={styles.logo}>Etkinliğini Bul</div>
        </Link>
        {/* <ul className={styles.menu}>
          <li>Süresi bitmiş</li>
        </ul> */}
      </div>
      <div className={styles.middle}>
        <Input placeholder="Search" onChange={handleChange}></Input>
      </div>
      <div className={styles.right}>
        <ToggleColor />
      </div>
    </nav>
  );
}

export default Navbar;
