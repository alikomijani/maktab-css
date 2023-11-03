import React from "react";
import styled from "styled-components";

const StyledTD = styled.td`
  padding: 15px;
  border: 1px solid black;
`;

export function TableCell({ children, ...props }) {
  return <StyledTD {...props}>{children}</StyledTD>;
}
