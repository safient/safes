import { useState } from 'react';
import { t } from 'i18n-js';
import { SeedPharsesList } from 'models';
import { ChipInput } from 'components/primitive/chip-input/chip-input.component';
import { Button, Input, TextArea, DropDown } from 'components/primitive';
import {
  FormContainer,
  FlexContainer,
  Spacer,
  ButtonContainer,
  StyledInput,
  StyledChipInput,
  StyledTextArea,
  StyledDropDown,
  StyledButton,
} from './safe-creation.form.styles';

export const SafeCreationForm = () => {
  const [showErrors, setShowErrors] = useState(false);
  const [seedPhrases, setSeedPhrases] = useState(new SeedPharsesList());

  const handleSubmit = () => {
    setShowErrors(true);
  };

  return (
    <>
      <FormContainer>
        <FlexContainer>
          <StyledInput type='text' placeholder='My personal crypto assets' label='Safe Name' />
          <StyledInput type='email' placeholder='johndoe@safient.io' label='Add Beneficiary    ' />
        </FlexContainer>
        <Spacer />
        <StyledDropDown label='Select the recovery method ' options={[]} onChange={() => 'changed'} />
        <Spacer />
        <FlexContainer>
          <StyledDropDown label='Select the wallet store type ' options={[]} onChange={() => 'changed'} wide />
          <StyledDropDown label='Select the secret store type ' options={[]} onChange={() => 'changed'} wide />
        </FlexContainer>
        <Spacer />
        <StyledChipInput seedPhraseList={seedPhrases} label='Enter Something' />
        <Spacer />
        <StyledTextArea label='Description (Optional)' placeholder='Add optional details about the safe' wide />
        <Spacer />
        <Spacer />
      </FormContainer>
      <ButtonContainer>
        <StyledButton label={{ text: 'Cancel', color: 'textLighter' }} variant='ghost' onClick={() => ''} />
        <StyledButton label={{ text: 'Continue' }} variant='primary' color='primaryGradient' onClick={handleSubmit} />
      </ButtonContainer>
    </>
  );
};
