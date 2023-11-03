import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem;
`;
const StyledInput = styled.input.attrs({ type: "search" })`
  padding: 0.5rem;
`;
export function Search() {
  return (
    <form>
      <StyledInput type="text" />
      <StyledButton>search</StyledButton>
    </form>
  );
}
