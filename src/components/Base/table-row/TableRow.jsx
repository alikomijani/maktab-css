import React from "react";
import styled, { css } from "styled-components";

const StyledTr = styled.tr`
  background-color: ${(props) => (props.$dark ? "black" : "white")};
  color: ${(props) => (props.$dark ? "white" : "black")};
  &:hover {
    color: ${(props) => (props.$dark ? "black" : "white")};
    background-color: ${(props) => (props.$dark ? "white" : "black")};
  }
`;

export function TableRow({ children, ...props }) {
  return <StyledTr {...props}>{children}</StyledTr>;
}
