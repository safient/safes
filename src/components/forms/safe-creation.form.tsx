import { ChipInput } from 'components/primitive/chip-input/chip-input.component';
import { Box, Button, Input } from 'components/primitive';
import styled from 'styled-components';
import { useState } from 'react';
import { SeedPharsesList } from 'models';
import { TextArea } from 'components/primitive/text-area/text-area.component';
import { t } from 'i18n-js';
import { DropDown } from 'components/primitive/drop-down/drop-down.component';

export const FormContainer = styled.section`
  background: white;
  width: 901px;
  height: auto;
  padding: 4rem 4rem;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
  border-radius: 0.5rem;
  border: 0.01px solid ${({ theme: { colors } }) => colors.borderLightest};
`;
export const Spacer = styled.div`
  margin-bottom: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  width: fit-content !important;
  gap: 2.2rem;
`;

export const ButtonContainer = styled.div`
  background: ${({ theme: { colors } }) => colors.applicationBackground};
  display: flex !important;
  justify-content: flex-end;
  gap: 30px;
  padding: 20px 40px;
  width: 901px;
  border: 0.01px solid ${({ theme: { colors } }) => colors.borderLightest};
  margin-bottom: 8rem;
`;

export const SafeCreationForm = () => {
  const [sampleValues, setSampleValues] = useState(new SeedPharsesList());
  return (
    <>
      <FormContainer>
        <FlexContainer>
          <Input type='text' placeholder='My personal crypto assets' label='Safe Name' />
          <Input type='email' placeholder='johndoe@safient.io' label='Add Beneficiary    ' />
        </FlexContainer>
        <Spacer />
        <DropDown label='Select the recovery method ' options={[]} onChange={() => 'changed'} />
        <Spacer />
        <FlexContainer>
          <DropDown label='Select the wallet store type ' options={[]} onChange={() => 'changed'} wide />
          <DropDown label='Select the secret store type ' options={[]} onChange={() => 'changed'} wide />
        </FlexContainer>
        <Spacer />
        <ChipInput seedPhraseList={sampleValues} label='Enter Something' />
        <Spacer />
        <TextArea label='Description (Optional)' placeholder='Add optional details about the safe' wide />
        <Spacer />
        <Spacer />
        <TextArea label='Description (Optional)' placeholder='Add optional details about the safe' wide />
        <Spacer />
      </FormContainer>
      <ButtonContainer>
        <Button label={{ text: 'Close', color: 'textLighter' }} variant='ghost' onClick={() => ''} />

        <Button label={{ text: 'Continue' }} variant='primary' color='primaryGradient' onClick={() => ''} />
      </ButtonContainer>
    </>
  );
};
