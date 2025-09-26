import { useContext, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../style/card.css";
import { GlobalContext } from "./context";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DCCard() {
  const context = useContext(GlobalContext)

  let [acao, setAcao] = useState(() => {
    const new_value = context.porcentagem_acao
    if (new_value == null || (typeof new_value === "number" && Number.isNaN(new_value))) return 30;
    return Number(new_value)
  });
  let [fii, setFII] = useState(() => {
    const new_value = context.porcentagem_fii
    if (new_value == null || (typeof new_value === "number" && Number.isNaN(new_value))) return 30;
    return Number(new_value)
  });
  let [fixa, setFixa] = useState(() => {
    const new_value = context.porcentagem_fixa
    if (new_value == null || (typeof new_value === "number" && Number.isNaN(new_value))) return 30;
    return Number(new_value)
  });
  let [ext, setExt] = useState(() => {
    const new_value = context.porcentagem_ext
    if (new_value == null || (typeof new_value === "number" && Number.isNaN(new_value))) return 10;
    return Number(new_value)
  });

  const soma = acao + fii + fixa;
  ext = 100 - soma;

  context.porcentagem_acao = acao
  context.porcentagem_fii = fii
  context.porcentagem_fixa = fixa
  context.porcentagem_ext = ext

  localStorage.setItem("porcentagem_acao", JSON.stringify(context.porcentagem_acao))
  localStorage.setItem("porcentagem_fii", JSON.stringify(context.porcentagem_fii))
  localStorage.setItem("porcentagem_fixa", JSON.stringify(context.porcentagem_fixa))
  localStorage.setItem("porcentagem_ext", JSON.stringify(context.porcentagem_ext))

  const data = {
    labels: ['Ação', 'FII', 'Renda Fixa', 'Exterior'],
    datasets: [
      {
        label: 'Divisão da Carteira',
        data: [acao, fii, fixa, ext],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="card">
      <h2>Divisão da Carteira</h2>
      <h3 className="h3">Porcentagem da Carteira em Ações (%)</h3>
      <input
        type="number"
        value={acao}
        className="input"
        onChange={(e) => {
          const novo = Number(e.target.value);
          if (novo + fii + fixa <= 100) setAcao(novo);
        }}
        placeholder="Porcentagem da Carteira em Ações (%)"
      />
      <p className="resultado">
        Valor: <span>{(Number(context.total) * acao / 100).toFixed(2)} ({acao}%)</span>
      </p>
      <h3 className="h3">Porcentagem da Carteira em FII (%)</h3>
      <input
        type="number"
        value={fii}
        className="input"
        onChange={(e) => {
          const novo = Number(e.target.value);
          if (acao + novo + fixa <= 100) setFII(novo);
        }}
        placeholder="Porcentagem da Carteira em FII (%)"
      />
      <p className="resultado">
        Valor: <span>{(Number(context.total) * fii / 100).toFixed(2)} ({fii}%)</span>
      </p>
      <h3 className="h3">Porcentagem da Carteira em Renda Fixa (%)</h3>
      <input
        type="number"
        value={fixa}
        className="input"
        onChange={(e) => {
          const novo = Number(e.target.value);
          if (acao + fii + novo <= 100) setFixa(novo);
        }}
        placeholder="Porcentagem da Carteira em Renda Fixa (%)"
      />
      <p className="resultado">
        Valor: <span>{(Number(context.total) * fixa / 100).toFixed(2)} ({fixa}%)</span>
      </p>
      <h3 className="h3">Porcentagem da Carteira em Investimento no Exterior (%)</h3>
      <input
        type="number"
        value={ext}
        className="input"
        onChange={(e) => setExt(Number(e.target.value))}
        placeholder="Porcentagem da Carteira em Investimento no Exterior (%)"
      />
      <p className="resultado">
        Valor: <span>{(Number(context.total) * ext / 100).toFixed(2)} ({ext}%)</span>
      </p>
      <div className="chart">
        <h2>Gráfico da Divisão da Carteira</h2>
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }}/>
      </div>
    </div>
  )
}