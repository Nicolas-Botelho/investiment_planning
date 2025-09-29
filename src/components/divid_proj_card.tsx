import { useContext, useState } from "react";
import "../style/card.css";
import { GlobalContext } from "./context";

export function DPCard() {
  const context = useContext(GlobalContext)

  let [dividendo_acao, setDividendo_acao] = useState(() => {
    const new_value = context.dividendo_acao
    if (new_value == null ||
      (typeof new_value === "number" && Number.isNaN(new_value)) ||
      Number(new_value) < 100) return 9
    return Number(new_value)
  })
  let [dividendo_fii, setDividendo_fii] = useState(() => {
    const new_value = context.dividendo_fii
    if (new_value == null ||
      (typeof new_value === "number" && Number.isNaN(new_value)) ||
      Number(new_value) < 100) return 12
    return Number(new_value)
  })
  let [dividendo_fixa, setDividendo_fixa] = useState(() => {
    const new_value = context.dividendo_fixa
    if (new_value == null ||
      (typeof new_value === "number" && Number.isNaN(new_value)) ||
      Number(new_value) < 100) return 12
    return Number(new_value)
  })
  let [dividendo_ext, setDividendo_ext] = useState(() => {
    const new_value = context.dividendo_ext
    if (new_value == null ||
      (typeof new_value === "number" && Number.isNaN(new_value)) ||
      Number(new_value) < 100) return 14
    return Number(new_value)
  })

  context.dividendo_acao = dividendo_acao
  context.dividendo_fii = dividendo_fii
  context.dividendo_fixa = dividendo_fixa
  context.dividendo_ext = dividendo_ext

  localStorage.setItem("dividendo_acao", JSON.stringify(context.dividendo_acao))
  localStorage.setItem("dividendo_fii", JSON.stringify(context.dividendo_fii))
  localStorage.setItem("dividendo_fixa", JSON.stringify(context.dividendo_fixa))
  localStorage.setItem("dividendo_ext", JSON.stringify(context.dividendo_ext))

  return (
    <div className="card">
      <h2>Dividendos Projetados</h2>
      
      <h3 className="h3">Ações (%)</h3>
      <input
        type="number"
        value={dividendo_acao}
        className="input"
        onChange={(e) => {
          const novo = Number(e.target.value)
          if (novo <= 100) setDividendo_acao(novo)
        }}
      />
      <p className="resultado">
        Dividendo em Ações: R$ <span>{(Number(context.total) * (Number(context.porcentagem_acao)/100) * (dividendo_acao/100)).toFixed(2)}</span>
      </p>

      <h3 className="h3">FII (%)</h3>
      <input
        type="number"
        value={dividendo_fii}
        className="input"
        onChange={(e) => {
          const novo = Number(e.target.value)
          if (novo <= 100) setDividendo_fii(novo)
        }}
      />
      <p className="resultado">
        Dividendo em FIIs: R$ <span>{(Number(context.total) * (Number(context.porcentagem_fii)/100) * (dividendo_fii/100)).toFixed(2)}</span>
      </p>
      
      <h3 className="h3">Renda Fixa (%)</h3>
      <input
        type="number"
        value={dividendo_fixa}
        className="input"
        onChange={(e) => {
          const novo = Number(e.target.value)
          if (novo <= 100) setDividendo_fixa(novo)
        }}
      />
      <p className="resultado">
        Dividendo em Renda Fixa: R$ <span>{(Number(context.total) * (Number(context.porcentagem_fixa)/100) * (dividendo_fixa/100)).toFixed(2)}</span>
      </p>
      
      <h3 className="h3">Investimentos Internacionais (%)</h3>
      <input
        type="number"
        value={dividendo_ext}
        className="input"
        onChange={(e) => {
          const novo = Number(e.target.value)
          if (novo <= 100) setDividendo_ext(novo)
        }}
      />
      <p className="resultado">
        Dividendo em Investimentos no Exterior: R$ <span>{(Number(context.total) * (Number(context.porcentagem_ext)/100) * (dividendo_ext/100)).toFixed(2)}</span>
      </p>

    </div>
  )
}