import React from 'react';
import styled from 'styled-components';
import { ChipComponentProps } from './chip.component.props';

const Close = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.error};
  height: 2rem;
  width: 2rem;
  border-radius: 1rem;
  padding: 4px;
  display: none;
  font-weight: bold;
  margin: 5px;
  text-align: center;
`;

const ChipBody = styled.div<{ index: number }>`
  background-color: #eeeeff;
  border-radius: 5px;
  color: #5c5af6;
  padding: 10px;
  margin: 5px;
  margin-left: ${({ index }) => (index === 0 || index === 6 ? '0' : '10px')};
  position: relative;

  &:hover ${Close} {
    cursor: pointer;
    display: block;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Chip = ({ label, index, onRemove }: ChipComponentProps) => {
  return (
    <ChipBody index={index}>
      <h1
        style={{ fontSize: '1.6rem', fontWeight: 'bold', textAlign: 'center' }}>
        {label}
      </h1>
      <Close onClick={() => onRemove(index)}>X</Close>
    </ChipBody>
  );
};

export default Chip;
