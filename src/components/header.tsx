import logo from "../../imgs/calculator.png"
import "../style/header.css"

function Header(){
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