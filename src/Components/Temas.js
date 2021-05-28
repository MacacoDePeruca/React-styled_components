import {
  fundoClaro,
  conteudoFundoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoFundoEscuro,
  textoFundoEscuro,
} from "./UI/Variaveis";

export const TemaClaro = {
  background: fundoClaro,
  inside: conteudoFundoClaro,
  text: textoFundoClaro,
  filter: "",
};

export const TemaEscuro = {
  background: fundoEscuro,
  inside: conteudoFundoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%);",
};
