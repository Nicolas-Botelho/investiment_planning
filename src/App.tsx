import './style/App.css'
import Header from './components/header'
import Card from './components/textcard'
import PTCard from './components/patr_total_card'
import DCCard from './components/div_cart_card'
import { useState } from 'react'
import { GlobalContext } from './components/context'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import { DPCard } from './components/divid_proj_card'
import { IMCard } from './components/inv_mes_card'
import { CRCard } from './components/cres_real_card'
import { PPCard } from './components/proj_patr_card'
import { RACard } from './components/rel_card'
import { NavBar } from './components/navbar'

const card_4_rule_title: string = "A Regra dos 4%"
const card_4_rule_descr: string = `
A Regra dos 4% é um conceito fundamental no mundo da independência financeira. Ela sugere que, para um patrimônio que está sendo investido, a retirada anual de até 4% desse valor pode ser feita de forma sustentável, sem esgotar o capital ao longo do tempo.

A regra foi popularizada pelo Trinity Study, um estudo que analisou o desempenho de portfólios de investimento ao longo de décadas. O estudo concluiu que, com uma alocação de ativos diversificada, uma taxa de retirada de 4% ao ano tinha uma alta probabilidade de sucesso (ou seja, o dinheiro não acabaria) por 30 anos ou mais.

A importância de manter os gastos abaixo desse limite é que os 6% restantes (assumindo um retorno médio de 10% do mercado, por exemplo) permitem que seu capital continue crescendo e se ajuste à inflação, garantindo que o seu "salário" proveniente dos investimentos se mantenha relevante e duradouro. Isso é o que permite a verdadeira independência financeira, onde você vive da renda gerada pelo seu patrimônio, sem a necessidade de trabalhar.`

function App() {
    const [context] = useState({
    valor_mensal: Number(localStorage.getItem("valor_mensal")) ?? 8000,
    porcentagem_carteira: Number(localStorage.getItem("porcentagem_carteira")) ?? 2.4,
    total: Number(localStorage.getItem("total")) ?? 0,
    porcentagem_acao: Number(localStorage.getItem("porcentagem_acao")) ?? 30,
    porcentagem_fii: Number(localStorage.getItem("porcentagem_fii")) ?? 30,
    porcentagem_fixa: Number(localStorage.getItem("porcentagem_fixa")) ?? 30,
    porcentagem_ext: Number(localStorage.getItem("porcentagem_ext")) ?? 10,
    dividendo_acao: Number(localStorage.getItem("dividendo_acao")) ?? 9,
    dividendo_fii: Number(localStorage.getItem("dividendo_fii")) ?? 12,
    dividendo_fixa: Number(localStorage.getItem("dividendo_fixa")) ?? 12,
    dividendo_ext: Number(localStorage.getItem("dividendo_ext")) ?? 14,
  });

  localStorage.setItem("valor_mensal", JSON.stringify(context.valor_mensal))
  localStorage.setItem("porcentagem_carteira", JSON.stringify(context.porcentagem_carteira))
  localStorage.setItem("total", JSON.stringify(context.total))
  localStorage.setItem("porcentagem_acao", JSON.stringify(context.porcentagem_acao))
  localStorage.setItem("porcentagem_fii", JSON.stringify(context.porcentagem_fii))
  localStorage.setItem("porcentagem_fixa", JSON.stringify(context.porcentagem_fixa))
  localStorage.setItem("porcentagem_ext", JSON.stringify(context.porcentagem_ext))
  localStorage.setItem("dividendo_acao", JSON.stringify(context.dividendo_acao))
  localStorage.setItem("dividendo_fii", JSON.stringify(context.dividendo_fii))
  localStorage.setItem("dividendo_fixa", JSON.stringify(context.dividendo_fixa))
  localStorage.setItem("dividendo_ext", JSON.stringify(context.dividendo_ext))

  return (
    <GlobalContext.Provider value={context}>
      <BrowserRouter>
        <div>
          <Header/>
          
          <NavBar/>

          <Routes>
            <Route path='/' element={<Card title={card_4_rule_title} description={card_4_rule_descr}/>} />
            <Route path='/PTCard' element={<PTCard/>} />
            <Route path='/DCCard' element={<DCCard/>} />
            <Route path='/DPCard' element={<DPCard/>} />
            <Route path='/IMCard' element={<IMCard/>} />
            <Route path='/CRCard' element={<CRCard/>} />
            <Route path='/PPCard' element={<PPCard/>} />
            <Route path='/RACard' element={<RACard/>} />
          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
