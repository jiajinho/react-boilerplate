import React from "react";
import styled from "styled-components/macro";

export const Wrapper = styled.button`
  padding: 5rem 10rem;
`;

export default ({ children }: { children?: string }) => (
  <Wrapper>{children}</Wrapper>
);
