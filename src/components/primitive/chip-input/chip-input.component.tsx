import { useState } from 'react';
import { t } from 'i18n-js';
import { observer } from 'mobx-react-lite';
import Chip from '../chip/chip.component';
import { ChipInputComponentProps } from './chip-input.component.props';
import { Id, SeedPhrase } from 'models';
import { ChipInputContainer, InputLabel, PhraseInput, ChipContainer, Container } from './chip-input.component.styles';

export const ChipInput: React.FC<ChipInputComponentProps> = observer((props) => {
  const { seedPhraseList, label } = props;

  const [value, setValue] = useState<string>('');

  const addChip = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      if (!value.trim()) return;
      seedPhraseList.addItem(new SeedPhrase(value));
      setValue('');
    }
  };

  const removeChip = (id: Id) => {
    seedPhraseList.removeItem(id);
  };

  const isSeedPhraseFull = (): boolean => {
    return seedPhraseList.size === 12;
  };

  return (
    <ChipInputContainer>
      <InputLabel>{label}</InputLabel>
      <Container length={seedPhraseList.size}>
        <PhraseInput
          autoFocus
          placeholder={seedPhraseList.isEmpty() ? t('chipInput.enterPhrase') : t('chipInput.phrasesEntered')}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(e) => addChip(e as any)}
          disabled={isSeedPhraseFull()}
        />
        <ChipContainer>
          {seedPhraseList.hasItems() &&
            seedPhraseList.items.map((item) => {
              return <Chip index={seedPhraseList.getIndex(item.id)} id={item.id} phrase={item} onRemove={removeChip} />;
            })}
        </ChipContainer>
      </Container>
    </ChipInputContainer>
  );
});
