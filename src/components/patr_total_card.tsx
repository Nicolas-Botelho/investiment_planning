import "../style/card.css"

import { useContext, useState } from "react";
import { GlobalContext } from "./context";

export default function PTCard() {
  const context = useContext(GlobalContext)

  const [valor_mensal, setValorMensal] = useState(() => {
    const new_value = context.valor_mensal
    if (new_value == null || (typeof new_value === "number" && Number.isNaN(new_value))) return 8000;
    return Number(new_value)
  });
  const [porcentagem, setPorcentagem] = useState(() => {
    const new_value = context.porcentagem_carteira
    if (new_value == null || (typeof new_value === "number" && Number.isNaN(new_value))) return 2.4;
    return Number(new_value)
  });

  let r: number
  if (porcentagem == 0) {
    r = 0
  }
  else {
    r = (valor_mensal * 12) / (porcentagem / 100)
  }

  context.valor_mensal = valor_mensal;
  context.porcentagem_carteira = porcentagem;
  context.total = r

  localStorage.setItem("valor_mensal", JSON.stringify(context.valor_mensal))
  localStorage.setItem("porcentagem_carteira", JSON.stringify(context.porcentagem_carteira))
  localStorage.setItem("total", JSON.stringify(context.total))

  return (
    <div className="card">
      <h2>Calculo de Patrimonio Necessario</h2>
      <h3 className="h3">Valor que deseja ganhar mensalmente no futuro (R$)</h3>
      <input
        type="number"
        value={valor_mensal}
        className="input"
        onChange={(e) => setValorMensal(Number(e.target.value))}
        placeholder="Digite o valor que deseja ganhar mensalmente no futuro (R$)"
      />
      <h3 className="h3">Porcentagem do Patrimonio Total (%)</h3>
      <input
        type="number"
        value={porcentagem}
        className="input"
        onChange={(e) => setPorcentagem(Number(e.target.value))}
        placeholder="Digite a porcentagem do Patrimonio Total (%)"
      />
      <p className="resultado">
        Resultado: <span>{r.toFixed(2)}</span>
      </p>
    </div>
  );
}