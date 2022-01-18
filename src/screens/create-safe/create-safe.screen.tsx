import { SafeCreationForm } from 'screens/create-safe/containers/safe-creation.container';
import { SafeFormContainer, FormHeading } from './create-safe.screen.styles';

export function CreateSafeScreen() {
  return (
    <SafeFormContainer>
      <FormHeading variant='contentHeader' tx='createSafePage.createSafe' left />
      <SafeCreationForm />
    </SafeFormContainer>
  );
}
