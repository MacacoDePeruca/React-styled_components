import React from "react";

import alimentacao from "./assets/images/alimentacao.svg";
import outros from "./assets/images/outros.svg";
import saude from "./assets/images/saude.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";
import { IconeTema } from "./Components/UI/Index";

export default (type) => {
  const images = {
    Restaurante: <IconeTema src={alimentacao} alt="" />,
    Default: <IconeTema src={outros} alt="" />,
    Saude: <IconeTema src={saude} alt="" />,
    Transporte: <IconeTema src={transporte} alt="" />,
    Utilidades: <IconeTema src={utilidades} alt="" />,
  };
  return images[type] || images.Default;
};
