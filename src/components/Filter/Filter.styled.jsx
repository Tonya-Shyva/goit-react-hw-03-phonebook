import styled from 'styled-components';

export const FilterWrap = styled.div`
  width: 400px;
`;

export const FilterInput = styled.input`
  display: flex;
  margin-top: 10px;

  &:focus,
  &:hover {
    border: 2px solid #46add9a7;
    border-radius: 2px;
    outline: 2px solid #21aeeab5;
  }
`;
