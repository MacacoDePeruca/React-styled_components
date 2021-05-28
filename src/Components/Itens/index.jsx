import React from "react";
import styled from "styled-components";
import ImageFilter from "../../ImageFilter";
import Item from "../Item/index";

const Itens = styled.div`
  box-shadow: 4px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-itens: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

export default (props) => {
  return (
    <Itens>
      {ImageFilter(props.type)}
      <Item {...props} />
      <span>{props.date}</span>
    </Itens>
  );
};
