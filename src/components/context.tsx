import { createContext } from "react";

type contextType = {
  valor_mensal: Number,
  porcentagem_carteira: Number,
  total: Number,
  porcentagem_acao: Number,
  porcentagem_fii: Number,
  porcentagem_fixa: Number,
  porcentagem_ext: Number,
}

const contextObject: contextType = {
  valor_mensal: 0,
  porcentagem_carteira: 0,
  total: 0,
  porcentagem_acao: 0,
  porcentagem_fii: 0,
  porcentagem_fixa: 0,
  porcentagem_ext: 0,
}

export const GlobalContext = createContext(contextObject);