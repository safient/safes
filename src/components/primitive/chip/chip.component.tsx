import React from 'react';
import styled from 'styled-components';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';
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
  margin: 5px;
  text-align: center;
`;

const ChipBody = styled(Box)<{ index: number }>`
  margin-left: ${({ index }) => (index === 0 || index === 6 ? '0' : '10px')};
  position: relative;

  &:hover ${Close} {
    cursor: pointer;
    display: block;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0 !important;
  }
`;

const Chip = ({ label, index, onRemove }: ChipComponentProps) => {
  return (
    <ChipBody
      row
      vCenter
      index={index}
      padding={1}
      margin={0.5}
      borderRadius={0.5}
      color='applicationBackground'>
      <Text bold text={label} color='primary' size={1.6} />
      <Close onClick={() => onRemove(index)}>X</Close>
    </ChipBody>
  );
};

export default Chip;
