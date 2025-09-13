import { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import "../style/card.css";
import "../style/colors.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DCCard() {
  let [acao, setAcao] = useState(30);
  let [fii, setFII] = useState(30);
  let [fixa, setFixa] = useState(30);
  let [ext, setExt] = useState(10);

  const soma = acao + fii + fixa;
  ext = 100 - soma;

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
      <h3 className="h3">Porcentagem da Carteira em Investimento no Exterior (%)</h3>
      <input
        type="number"
        value={ext}
        className="input"
        onChange={(e) => setExt(Number(e.target.value))}
        placeholder="Porcentagem da Carteira em Investimento no Exterior (%)"
      />
      <div className="chart">
        <h2>Gráfico da Divisão da Carteira</h2>
        <Pie data={data} options={{ responsive: true, maintainAspectRatio: false }}/>
      </div>
    </div>
  )
}