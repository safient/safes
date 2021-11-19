import React from 'react';
import styled from 'styled-components';
import { Box } from '../box/box.component';
import { Text } from '../text/text.component';
import { ChipComponentProps } from './chip.component.props';
import {close} from 'assets'

const Close = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 1.5rem;
  margin: 5px;
  display: none;
`

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

const Chip = ({ id, index, phrase, onRemove }: ChipComponentProps) => {
  return (
    <ChipBody
      row
      vCenter
      index={index}
      padding={1}
      margin={0.5}
      borderRadius={0.5}
      color='applicationBackground'
      >
      <Text bold text={phrase.get()} color='primary' size={1.6} />
      <Close src={close} onClick={() => onRemove(id)}/>
    </ChipBody>
  );
};

export default Chip;
