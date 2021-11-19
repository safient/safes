import { useState } from 'react';
import styled from 'styled-components';
import { t } from 'i18n-js';
import { observer } from 'mobx-react-lite';
import { Input } from '../input/input.component';
import { Box } from '../box/box.component';
import Chip from '../chip/chip.component';
import { ChipInputComponentProps } from './chip-input.component.props';
import { Id, SeedPhrase } from 'models';

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

export const ChipInput: React.FC<ChipInputComponentProps> = observer((props) => {
  const { seedPhraseList } = props;

  const [value, setValue] = useState<string>('');

  const addChip = (event: KeyboardEvent) =>{
    if(event.key === 'Enter'){
      if(!value.trim()) return;
      seedPhraseList.addItem(new SeedPhrase(value))
      setValue('')
    }
  }

  const removeChip = (id: Id) => {
    seedPhraseList.removeItem(id)
  }

  const isSeedPhraseFull = (): boolean => {
    return seedPhraseList.size === 12;
  };

  return (
    <Container length={seedPhraseList.size}>
      <PhraseInput
        autoFocus
        placeholder={
          seedPhraseList.isEmpty()
            ? t('chipInput.enterPhrase') : t('chipInput.phrasesEntered')
        }
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={e => addChip(e as any)}
        disabled={isSeedPhraseFull()}
      />
      <ChipContainer>
        {seedPhraseList.hasItems() && seedPhraseList.items.map((item) => {
          return(
            <Chip index={seedPhraseList.getIndex(item.id)} id={item.id} phrase={item} onRemove={removeChip} />
          )
        })}
      </ChipContainer>
    </Container>
  );
});
