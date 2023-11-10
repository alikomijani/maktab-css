import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem;
`;
const StyledInput = styled.input.attrs({ type: "search" })`
  padding: 0.5rem;
`;
export function Search({ onSubmit }) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <StyledInput type="text" value={search} onChange={handleSearch} />
      <StyledButton onClick={() => onSubmit(search)}>search</StyledButton>
    </div>
  );
}
