import "../style/card.css"

import { useState } from "react";

export default function PTCard() {
  const [num1, setNum1] = useState(8000);
  const [num2, setNum2] = useState(2.4);

  const value = Number(num1);
  const percent = Number(num2);
  let r: number
  if (percent == 0) {
    r = 0
  }
  else {
    r = (value * 12) / (percent / 100)
  }
  const rStr: string = r.toFixed(2)

  return (
    <div className="card">
      <h2>Calculo de Patrimonio Necessario</h2>
      <h3 className="h3">Valor que desejo Ganhar mensalmente no futuro (R$)</h3>
      <input
        type="number"
        value={num1}
        className="input"
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Digite o valor que desejo Ganhar mensalmente no futuro (R$)"
      />
      <h3 className="h3">Porcentagem do Patrimonio Total (%)</h3>
      <input
        type="number"
        value={num2}
        className="input"
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Digite a porcentagem do Patrimonio Total (%)"
      />
      <p className="resultado">
        Resultado: <span>{rStr}</span>
      </p>
    </div>
  );
}