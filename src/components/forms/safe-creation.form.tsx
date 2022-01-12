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

  const safeCliam = [
    {
      id: 1,
      value: 'Arbitration',
      option: 'Arbitration',
    },
    {
      id: 2,
      value: 'Signaling',
      option: 'Signaling',
    },
    {
      id: 3,
      value: 'D Day',
      option: 'D Day',
    },
  ];

  const walletStoreType = [
    {
      id: 1,
      value: 'Wallet instructions',
      option: 'Wallet instructions',
    },
    {
      id: 2,
      value: 'Wallet secrets',
      option: 'Wallet secrets',
    },
  ];

  const secretStoreType = [
    {
      id: 1,
      value: 'Seed Phrases',
      option: 'Seed Phrases',
    },
    {
      id: 2,
      value: 'Private Key',
      option: 'Private Key',
    },
    {
      id: 3,
      value: 'Keystore',
      option: 'Keystore',
    },
  ];

  return (
    <>
      <FormContainer>
        <FlexContainer>
          <StyledInput type='text' placeholder='My personal crypto assets' label='Safe Name' />
          <StyledInput type='email' placeholder='johndoe@safient.io' label='Add Beneficiary    ' />
        </FlexContainer>
        <Spacer />
        <StyledDropDown label='Select the recovery method ' options={safeCliam} onChange={() => 'changed'} />
        <Spacer />
        <FlexContainer>
          <StyledDropDown
            label='Select the wallet store type '
            options={walletStoreType}
            onChange={() => 'changed'}
            wide
          />
          <StyledDropDown
            label='Select the secret store type '
            options={secretStoreType}
            onChange={() => 'changed'}
            wide
          />
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
