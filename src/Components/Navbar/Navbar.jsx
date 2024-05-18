import React, { useState } from "react";
import styles from "./Navbar.module.css";
import closeIcon from "../../../assets/nav/closeIcon.png";
import menuIcon from "../../../assets/nav/menuIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          aria-pressed={menuOpen}
          style={{
            background: `url(${
              menuOpen ? closeIcon : menuIcon
            }) no-repeat center/cover`,
            border: "none",
            cursor: "pointer",
            width: "40px",
            height: "40px",
          }}
        >
          <span className="sr-only"></span>
        </button>
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
        >
          {["About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
