import { useState } from 'react';
import styled from 'styled-components';
import { t } from 'i18n-js';
import { Input } from '../input/input.component';
import { Box } from '../box/box.component';
import Chip from '../chip/chip.component';
import { ChipInputComponentProps } from './chip-input.component.props';

const ChipContainer = styled(Box)`
  margin-top: 1rem !important;
  display: grid !important;
  grid-template: repeat(6, 1fr) / repeat(6, 1fr);

  @media screen and (max-width: 768px) {
    display: flex !important;
    flex-direction: column;
  }
`;

const Container = styled(Box)<{ length: number }>`
  margin: 1rem !important;
  border: 2px solid #cbccdc;
  border-radius: 5px;
  width: 100%;
  padding: 0 1rem !important;
  background-color: #fff;
  height: ${({ length }) =>
    length === 0 ? '7rem' : length > 6 ? '18rem' : '13rem'} !important;

  @media screen and (max-width: 768px) {
    height: ${({ length }) =>
      length === 0 ? '7rem' : `${length * 5 + 11}rem`} !important;
  }
`;

const PhraseInput = styled(Input)`
  border: none !important;
`;

export const ChipInput: React.FC<ChipInputComponentProps> = (props) => {
  const { seedPhrases, setSeedPhrases } = props;

  const [value, setValue] = useState<string>('');

  const addChip = (event: any) => {
    if (event.key === 'Enter') {
      if (!value.trim()) return;
      seedPhrases.push(value.trim());
      setSeedPhrases(seedPhrases);
      setValue('');
    }
  };

  const removeChip = (index: number) => {
    const newSeedPhrases = seedPhrases.filter((_, i) => {
      return i !== index;
    });
    setSeedPhrases(newSeedPhrases);
  };

  const seedPhrasesLength = (): number => {
    return seedPhrases.length;
  };

  const isSeedPhraseFull = (): boolean => {
    return seedPhrases.length === 12;
  };

  return (
    <Container length={seedPhrasesLength()}>
      <PhraseInput
        autoFocus
        placeholder={
          isSeedPhraseFull()
            ? t('chipInput.phrasesEntered')
            : t('chipInput.enterPhrase')
        }
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={addChip}
        disabled={isSeedPhraseFull()}
      />
      <ChipContainer>
        {seedPhrases &&
          seedPhrases.map((label, index) => {
            return <Chip label={label} index={index} onRemove={removeChip} />;
          })}
      </ChipContainer>
    </Container>
  );
};
