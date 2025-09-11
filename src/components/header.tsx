import logo from "../../imgs/calculator.png"
import React from "react"
import "../style/header.css"

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Calculator Logo" className="logo"/>
      <h1>
        Calculadora de Patrimônio
      </h1>
    </header>
  );
};

export default Header;