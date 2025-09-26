import { useContext } from "react";
import "../style/card.css";
import { GlobalContext } from "./context";

export function IMCard() {
  const context = useContext(GlobalContext)

  console.log(context.total)

  return (
    <div className="card">
      <h2>Cálculo de Investimento Mensal</h2>
      <h2>WIP</h2>
    </div>
  )
}