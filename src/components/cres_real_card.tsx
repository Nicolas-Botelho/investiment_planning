import { useContext } from "react";
import "../style/card.css";
import { GlobalContext } from "./context";

export function CRCard() {
  const context = useContext(GlobalContext)

  console.log(context.total)

  return (
    <div className="card">
      <h2>Analise de Inflação e Crescimento Real</h2>
      <h2>WIP</h2>
    </div>
  )
}