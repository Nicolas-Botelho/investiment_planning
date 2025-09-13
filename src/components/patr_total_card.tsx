import "../style/card.css"

import { useState } from "react";

export default function PTCard() {
  const [valor_mensal, setValorMensal] = useState(8000);
  const [porcentagem, setPorcentagem] = useState(2.4);

  let r: number
  if (porcentagem == 0) {
    r = 0
  }
  else {
    r = (valor_mensal * 12) / (porcentagem / 100)
  }
  const rStr: string = r.toFixed(2)

  return (
    <div className="card">
      <h2>Calculo de Patrimonio Necessario</h2>
      <h3 className="h3">Valor que desejo Ganhar mensalmente no futuro (R$)</h3>
      <input
        type="number"
        value={valor_mensal}
        className="input"
        onChange={(e) => setValorMensal(Number(e.target.value))}
        placeholder="Digite o valor que desejo Ganhar mensalmente no futuro (R$)"
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
        Resultado: <span>{rStr}</span>
      </p>
    </div>
  );
}