import { useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { t } from 'i18n-js';
import { SeedPharsesList } from 'models';
import { FormValidator } from 'utils/FormValidator';
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

  const [safeName, setSafeName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = () => {
    if (isFormValid()) {
      // form submit
    } else {
      setShowError(true);
    }
  };

  const isFormValid = () => {
    return FormValidator.isStringValid(safeName) && FormValidator.isEmailValid(email);
  };

  return (
    <>
      <FormContainer>
        <FlexContainer>
          <StyledInput
            type='text'
            placeholder='My personal crypto assets'
            label={t('createSafeForm.safeName')}
            errorMsg='Invalid SafeName'
            onChange={(e: any) => setSafeName(e.target.value)}
            error={showError && !FormValidator.isStringValid(safeName)}
          />
          <StyledInput
            type='email'
            placeholder='johndoe@safient.io'
            label={t('createSafeForm.addBeneficiary')}
            onChange={(e: any) => setEmail(e.target.value)}
            errorMsg='Enter a Valid Email'
            error={showError && !FormValidator.isEmailValid(email)}
          />
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
          label={t('createSafeForm.description')}
          placeholder='Add optional details about the safe'
          errorMsg='Invalid Description'
          error={showError && !FormValidator.isStringValid(description)}
          wide
        />
        <Spacer />
        <Spacer />
      </FormContainer>
      <ButtonContainer>
        <StyledButton label={{ text: 'Cancel', color: 'textLighter' }} variant='ghost' onClick={() => ''} />
        <StyledButton label={{ text: 'Create' }} variant='primary' color='primaryGradient' onClick={handleSubmit} />
      </ButtonContainer>
    </>
  );
});
