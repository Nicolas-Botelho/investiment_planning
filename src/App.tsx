import './style/App.css'
import Header from './components/header'
import Card from './components/card'

const card_4_rule_title: string = "A Regra dos 4%"
const card_4_rule_descr: string = `
A Regra dos 4% é um conceito fundamental no mundo da independência financeira. Ela sugere que, para um patrimônio que está sendo investido, a retirada anual de até 4% desse valor pode ser feita de forma sustentável, sem esgotar o capital ao longo do tempo.

A regra foi popularizada pelo Trinity Study, um estudo que analisou o desempenho de portfólios de investimento ao longo de décadas. O estudo concluiu que, com uma alocação de ativos diversificada, uma taxa de retirada de 4% ao ano tinha uma alta probabilidade de sucesso (ou seja, o dinheiro não acabaria) por 30 anos ou mais.

A importância de manter os gastos abaixo desse limite é que os 6% restantes (assumindo um retorno médio de 10% do mercado, por exemplo) permitem que seu capital continue crescendo e se ajuste à inflação, garantindo que o seu "salário" proveniente dos investimentos se mantenha relevante e duradouro. Isso é o que permite a verdadeira independência financeira, onde você vive da renda gerada pelo seu patrimônio, sem a necessidade de trabalhar.`

function App() {

  return (
    <div>
      <Header/>
      <Card title={card_4_rule_title} description={card_4_rule_descr}/>
    </div>
  )
}

export default App
