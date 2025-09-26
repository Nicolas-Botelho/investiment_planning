import { useContext } from "react";
import "../style/card.css";
import { GlobalContext } from "./context";

export function PPCard() {
  const context = useContext(GlobalContext)

  console.log(context.total)

  return (
    <div className="card">
      <h2>Projeção do Patrimonio para o Proximo Ano</h2>
      <h2>WIP</h2>
    </div>
  )
}