import { useState, useRef } from 'react';
import { t } from 'i18n-js';
import { SeedPharsesList } from 'models';
import { observer } from 'mobx-react-lite';
import { CreateSafeController, SecretStoreType } from '../create-safe-controller';
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
  WideInput,
} from './safe-creation.container.styles';

export const SafeCreationForm = observer(() => {
  const createSafeController = useRef(new CreateSafeController()).current;
  const [seedPhrases, setSeedPhrases] = useState(new SeedPharsesList());

  const handleSubmit = () => {
    // form submit
  };

  return (
    <>
      <FormContainer>
        <FlexContainer>
          <StyledInput type='text' placeholder='My personal crypto assets' label={t('createSafeForm.safeName')} />
          <StyledInput type='email' placeholder='johndoe@safient.io' label={t('createSafeForm.addBeneficiary')} />
        </FlexContainer>
        <Spacer />
        <StyledDropDown
          label={t('createSafeForm.selectRecoveryMethod')}
          options={createSafeController.getRecoveryMethods()}
          onChange={() => 'changed'}
        />
        <Spacer />
        <FlexContainer>
          <StyledDropDown
            label={t('createSafeForm.selectTheWalletStoreType')}
            options={createSafeController.getWalletStoreTypes()}
            onChange={(e: any) => createSafeController.setWalletStoreType(e.target.value)}
            wide
          />
          {createSafeController.showSecretStoreType() && (
            <StyledDropDown
              label={t('createSafeForm.selectTheSecretStoreType')}
              options={createSafeController.getSecretStoreType()}
              onChange={(e: any) => createSafeController.setSecretStoreType(e.target.value)}
              wide
            />
          )}
          {createSafeController.showInstructionsStoreType() && (
            <StyledDropDown
              label={t('createSafeForm.selectTheInstructionStoreType')}
              options={createSafeController.getSecretStoreType()}
              onChange={() => 'changed'}
              wide
            />
          )}
        </FlexContainer>
        <Spacer />

        {createSafeController.selectedSecretStoreType === SecretStoreType.PrivateKey && (
          <WideInput type='text' placeholder='Paste your Key' label={t('createSafeForm.enterYourPrivateKey')} />
        )}
        {createSafeController.selectedSecretStoreType === SecretStoreType.KeyStore && (
          <WideInput type='text' placeholder='Enter Secret store' label={t('createSafeForm.secretStore')} />
        )}
        {createSafeController.selectedSecretStoreType === SecretStoreType.SeedPhrases && (
          <StyledChipInput seedPhraseList={seedPhrases} label={t('createSafeForm.enterSeedPhrases')} />
        )}

        <Spacer />
        <StyledTextArea
          label={t('createSafeForm.Description')}
          placeholder='Add optional details about the safe'
          wide
        />
        <Spacer />
        <Spacer />
      </FormContainer>
      <ButtonContainer>
        <StyledButton label={{ text: 'Cancel', color: 'textLighter' }} variant='ghost' onClick={() => ''} />
        <StyledButton label={{ text: 'Continue' }} variant='primary' color='primaryGradient' onClick={handleSubmit} />
      </ButtonContainer>
    </>
  );
});
