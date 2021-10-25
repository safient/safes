import { useState } from 'react';
import styled from 'styled-components';
import Chip from '../chip/chip.component';
import { ChipInputComponentProps } from './chip-input.component.props';

const ChipContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Container = styled.div<{ length: number }>`
  margin: 1rem !important;
  border: 2px solid #cbccdc;
  border-radius: 5px;
  width: 100%;
  padding: 1rem !important;
  background-color: #fff;
  height: ${({ length }) =>
    length === 0 ? '5rem' : length > 6 ? '16rem' : '11rem'};

  @media screen and (max-width: 768px) {
    height: ${({ length }) =>
      length === 0 ? '5rem' : `${length * 45 + 70}px`};
  }
`;

const Input = styled.input`
  font-size: 1.4rem;
  padding: 5px;
  width: 100%;
`;

export const ChipInput: React.FC<ChipInputComponentProps> = (props) => {
  const { seedPhases, setSeedPhases } = props;

  const [value, setValue] = useState<string>('');

  // const [seedPhases, setSeedPhases] = useState<string[]>([]);

  const addChip = (event: any) => {
    if (event.key === 'Enter') {
      if (value.trim().length === 0) return;
      seedPhases.push(value.trim());
      setSeedPhases(seedPhases);
      setValue('');
    }
  };

  const removeChip = (index: number) => {
    const newSeedPhases = seedPhases.filter((_, i) => {
      return i !== index;
    });
    setSeedPhases(newSeedPhases);
  };

  const seedPhasesLength = (): number => {
    return seedPhases.length;
  };

  const isSeedPhaseFull = (): boolean => {
    return seedPhases.length === 12;
  };

  return (
    <Container length={seedPhasesLength()}>
      <Input
        placeholder={
          isSeedPhaseFull()
            ? '12 phases entered'
            : 'Enter the 12-word seed phase'
        }
        style={{}}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={addChip}
        disabled={isSeedPhaseFull()}
      />

      <ChipContainer>
        {seedPhases &&
          seedPhases.map((label, index) => {
            return <Chip label={label} index={index} onRemove={removeChip} />;
          })}
      </ChipContainer>
    </Container>
  );
};
