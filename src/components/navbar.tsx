import { Link } from "react-router-dom";
import "../style/nav.css"

export function NavBar() {
  return (
    <div>
        <ul className="navbar">
        <li className="item">
          <Link to="/" className="link">Início</Link>
        </li>
        <li className="item">
          <Link to="/PTCard" className="link">Patrimônio Total</Link>
          {" | "}
          <Link to="/DCCard" className="link">Divisão da Carteira</Link>
          {" | "}
          <Link to="/DPCard" className="link">Dividendos Projetados</Link>
        </li>
        <li className="item">
          <Link to="/IMCard" className="link">Cálculo de Investimento Mensal</Link>
          {" | "}
          <Link to="/CRCard" className="link">Analise de Inflação e Crescimento Real</Link>
          {" | "}
          <Link to="/PPCard" className="link">Projeção do Patrimonio para o Proximo Ano</Link>
        </li>
        <li className="item">
          <Link to="/RACard" className="link">Relatório para Análise</Link>
        </li>
      </ul>
    </div>
  )
}