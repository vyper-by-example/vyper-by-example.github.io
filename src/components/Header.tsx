import React from "react"
import { useAppContext } from "../contexts/AppContext"
import Hamburger from "./svg/Hamburger"
import styles from "./Header.module.css"
import DarkMode from "./svg/DarkMode"
import LightMode from "./svg/LightMode"
import Vyper from "./svg/Vyper"
import PoweredByCyfrinLogo from "./PoweredByCyfrinLogo"

function Header() {
  const { state, setTheme, toggleSideNav } = useAppContext()

  function onClickTheme() {
    setTheme(state.theme == "light" ? "dark" : "light")
  }

  return (
    <div className={styles.component}>
      <Hamburger size={20} className={styles.hamburger} onClick={toggleSideNav} />
      <div className={styles.center}>
        <div className={styles.centerInner}>
          <a href="/" className={styles.a}>
            <Vyper
              className={styles.logo}
              size={30}
              fill="#9F4CF2"
            />
          </a>
          <h3 className={styles.header}>
            <a href="/" className={styles.a}>
              Vyper by Example
            </a>
          </h3>
        </div>
        <PoweredByCyfrinLogo />
      </div>
      <button className={styles.mode} onClick={onClickTheme}>
        {state.theme == "dark" ? <DarkMode size={20} /> : <LightMode size={20} />}
      </button>
    </div>
  )
}

export default Header
