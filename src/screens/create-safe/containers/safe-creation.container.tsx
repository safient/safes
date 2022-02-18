import { useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { t } from 'i18n-js';
import { SeedPharsesList } from 'models';
import { FormValidator } from 'utils/FormValidator';
import { CreateSafeController, SecretStoreType } from '../create-safe-controller';
import {
  FormContainer,
  FlexContainer,
  ButtonContainer,
  StyledInput,
  StyledChipInput,
  StyledTextArea,
  StyledButton,
  WideInput,
} from './safe-creation.container.styles';
import { Box, DropDown } from 'components/primitive';

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
      <FormContainer color='white' width={90.1} borderRadius={0.5}>
        <FlexContainer gap={2.2} marginBottom={2}>
          <StyledInput
            type='text'
            placeholder={t('createSafeForm.placeHolders.safeName')}
            label={t('createSafeForm.safeName')}
            errorMsg={t('createSafeForm.FormValidation.inValidSafeName')}
            onChange={(e: any) => setSafeName(e.target.value)}
            error={showError && !FormValidator.isStringValid(safeName)}
          />

          <StyledInput
            type='email'
            placeholder={t('createSafeForm.placeHolders.email')}
            label={t('createSafeForm.addBeneficiary')}
            onChange={(e: any) => setEmail(e.target.value)}
            errorMsg={t('createSafeForm.FormValidation.inValidEmail')}
            error={showError && !FormValidator.isEmailValid(email)}
          />
        </FlexContainer>

        <Box marginBottom={2}>
          <DropDown
            label={t('createSafeForm.selectRecoveryMethod')}
            options={createSafeController.getRecoveryMethods()}
            onChange={(value: any) => createSafeController.setRecoveryMethod(value.value)}
            placeholder={createSafeController.selectedRecoveryMethod}
          />
        </Box>

        <FlexContainer row gap={2.2} marginBottom={2}>
          <Box maxWidth={40}>
            <DropDown
              label={t('createSafeForm.selectTheWalletStoreType')}
              options={createSafeController.getWalletStoreTypes()}
              onChange={(value: any) => createSafeController.setWalletStoreType(value.value)}
              placeholder={createSafeController.selectedSecretStoreType}
            />
          </Box>

          {createSafeController.showSecretStoreType() && (
            <Box maxWidth={40}>
              <DropDown
                label={t('createSafeForm.selectTheSecretStoreType')}
                options={createSafeController.getSecretStoreType()}
                onChange={(value: any) => createSafeController.setSecretStoreType(value.value)}
                placeholder={createSafeController.selectedWalletStoreType}
              />
            </Box>
          )}

          {createSafeController.showInstructionsStoreType() && (
            <Box maxWidth={40}>
              <DropDown
                label={t('createSafeForm.selectTheInstructionStoreType')}
                options={createSafeController.getSecretStoreType()}
                onChange={(value: any) => createSafeController.setSecretStoreType(value.value)}
                placeholder={''}
              />
            </Box>
          )}
        </FlexContainer>

        {createSafeController.selectedSecretStoreType === SecretStoreType.PrivateKey && (
          <WideInput
            type='text'
            placeholder={t('createSafeForm.placeHolders.privateKey')}
            label={t('createSafeForm.enterYourPrivateKey')}
          />
        )}
        {createSafeController.selectedSecretStoreType === SecretStoreType.KeyStore && (
          <WideInput
            type='text'
            placeholder={t('createSafeForm.placeHolders.secretStore')}
            label={t('createSafeForm.secretStore')}
          />
        )}
        {createSafeController.selectedSecretStoreType === SecretStoreType.SeedPhrases && (
          <StyledChipInput seedPhraseList={seedPhrases} label={t('createSafeForm.enterSeedPhrases')} />
        )}

        <Box marginTop={2}>
          <StyledTextArea
            label={t('createSafeForm.description')}
            placeholder={t('createSafeForm.placeHolders.description')}
            wide
          />
        </Box>
      </FormContainer>

      <ButtonContainer row justify={'end'} gap={3} color='bottomAccent' marginBottom={8} width={90.1}>
        <StyledButton label={{ tx: 'common.cancel', color: 'textLighter' }} variant='ghost' onClick={() => ''} />
        <StyledButton
          label={{ tx: 'common.create' }}
          variant='primary'
          color='primaryGradient'
          onClick={handleSubmit}
        />
      </ButtonContainer>
    </>
  );
});
