import React from "react";
import HeaderStyle from "./Header.module.scss";
import { ReactComponent as NavToggle } from "../icons/toggle.svg";
import { ReactComponent as Cart } from "../icons/cart.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as Moon } from "../icons/moon.svg";

const Header = () => {
  return (
    <>
      <header className={HeaderStyle.siteHeader}>
        {/* navbar-toggle */}
        <div className={HeaderStyle.headerContainer}>
          <NavToggle className={`cursorPointer`} />

          <nav className={HeaderStyle.navbarMenu}>
            <ul
              className={`${HeaderStyle.navList} ${HeaderStyle.navItem} mr-auto`}
            >
              <li className={HeaderStyle.navItem}>
                <a className={HeaderStyle.navLink} href="#">
                  男款
                </a>
              </li>
              <li className={HeaderStyle.navItem}>
                <a className={HeaderStyle.navLink} href="#">
                  女款
                </a>
              </li>
              <li className={HeaderStyle.navItem}>
                <a className={HeaderStyle.navLink} href="#">
                  最新消息
                </a>
              </li>
              <li className={HeaderStyle.navItem}>
                <a className={HeaderStyle.navLink} href="#">
                  客製商品
                </a>
              </li>
              <li className={HeaderStyle.navItem}>
                <a className={HeaderStyle.navLink} href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <Search />
              </li>
              <li>
                <Cart />
              </li>
              <li>
                <Moon />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={HeaderStyle.colorBlock}>hello</div>
      <div className={HeaderStyle.colorBlock}>hello</div>
      <div className={HeaderStyle.colorBlock}>hello</div>
      <div className={HeaderStyle.colorBlock}>hello</div>
      <div className={HeaderStyle.colorBlock}>hello</div>
      <div className={HeaderStyle.colorBlock}>hello end</div>
    </>
  );
};

export default Header;
