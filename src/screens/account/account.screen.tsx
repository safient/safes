import { StatsCard, Text, Button, Avatar } from 'components/primitive';
import {
  AccountContainer,
  AccountInfoContainer,
  AccountInfo,
  ProfileContainer,
  Profile,
  ProfileInfo,
  StatsCardContainer,
  AccountSettingsContainer,
  StyledSpan,
  DefaultSettingsContainer,
  Card,
  StyledInput,
  InputContainer,
} from './account.screen.styles';
// Todo- remove this after integration
import Demo from '../../../src/assets/images/demo.png';

export const AccountScreen = () => {
  return (
    <AccountContainer>
      {/* Account */}
      <AccountInfoContainer>
        <Text variant='contentHeader' tx='common.profile' left />
        <AccountInfo>
          <ProfileContainer>
            <Profile>
              <Avatar size='xLarge' flat src={Demo} />
              <ProfileInfo>
                <Text variant='contentHeader' color='textLight' text='Homo Sapien' />{' '}
                <Text variant='small' text='sapien@safient.io' />
              </ProfileInfo>
            </Profile>
            <Button
              variant='primary'
              color='primaryGradient'
              label={{ text: 'Edit Profile' }}
              onClick={() => 'something'}
            />
          </ProfileContainer>
          <StatsCardContainer>
            <StatsCard
              heading={{ text: 'Safes you are Guarding' }}
              count={{ text: '02' }}
              iconName={{ name: 'guarding' }}
            />
            <StatsCard heading={{ text: 'Safes Created' }} count={{ text: '02' }} iconName={{ name: 'safes' }} />
            <StatsCard
              heading={{ text: 'Inherited Safes' }}
              count={{ text: '02' }}
              iconName={{ name: 'inherit' }}
            />{' '}
          </StatsCardContainer>
        </AccountInfo>
      </AccountInfoContainer>

      {/* Setting */}
      <AccountSettingsContainer>
        <Text variant='contentHeader' tx='accountPage.settings' left />
        <Card>
          <Text variant='contentHeader' tx='accountPage.notifications' left />

          <InputContainer>
            <StyledSpan>
              <Text variant='content' tx='accountPage.inAppNotifications' left />
              <input type='checkbox' name='' id='' />
            </StyledSpan>

            <StyledSpan>
              <Text variant='content' tx='accountPage.emailNotifications' left />
              <input type='checkbox' name='' id='' />
            </StyledSpan>
          </InputContainer>
        </Card>
      </AccountSettingsContainer>

      {/* default settings */}
      <DefaultSettingsContainer>
        <Card>
          <Text variant='contentHeader' tx='accountPage.defaultSafeConfigs' left />
          <InputContainer>
            <StyledInput type='text' label='Beneficiary' placeholder='DID of the beneficiary' />
          </InputContainer>
        </Card>
      </DefaultSettingsContainer>
    </AccountContainer>
  );
};
