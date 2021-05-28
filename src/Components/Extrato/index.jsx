import React from "react";
import { Botao, Box } from "../UI/Index";
import { extratoLista } from "../../info";
import Itens from "../Itens";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, value, date, from }) => {
        return (
          <Itens key={id} type={type} from={from} value={value} date={date} />
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
