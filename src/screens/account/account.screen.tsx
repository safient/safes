import { StatsCard, Text, Button, Avatar, ToggleSwitch } from 'components/primitive';
import {
  AccountContainer,
  AccountInfoContainer,
  AccountInfo,
  ProfileContainer,
  Profile,
  ProfileInfo,
  StatsCardContainer,
  AccountSettingsContainer,
  StyledDiv,
  DefaultSettingsContainer,
  Card,
  StyledInput,
  InputContainer,
  SwitchContainer,
} from './account.screen.styles';
import { stores } from '../../store';

export const AccountScreen = () => {

  return (
    <AccountContainer>
      {/* Account */}
      <AccountInfoContainer>
        <Text variant='contentHeader' tx='common.profile' left />
        <AccountInfo>
          <ProfileContainer>
            <Profile>
              <Avatar size='xLarge' flat name='placeHolderAvatar' />
              <ProfileInfo>
                <Text variant='contentHeader' color='textLight' text={ stores.accountStore.web3User?.name } />{' '}
                <Text variant='small' text={ stores.accountStore.web3User?.email }  />
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
              count={{ text: stores.accountStore.web3User?.safes.length.toString() }}
              iconName={{ name: 'guarding' }}
            />
            <StatsCard heading={{ text: 'Safes Created' }} count={{ text: stores.accountStore.web3User?.safes.length.toString() }} iconName={{ name: 'safes' }} />
            <StatsCard heading={{ text: 'Inherited Safes' }} count={{ text: stores.accountStore.web3User?.safes.length.toString() }} iconName={{ name: 'inherit' }} />
          </StatsCardContainer>
        </AccountInfo>
      </AccountInfoContainer>

      {/* Setting */}
      <AccountSettingsContainer>
        <Text variant='contentHeader' tx='accountPage.settings' left />
        <Card>
          <Text variant='contentHeader' tx='accountPage.notifications' left />

          <InputContainer>
            <StyledDiv>
              <Text variant='content' tx='accountPage.inAppNotifications' left />
              <SwitchContainer>
                <ToggleSwitch toggleID='inApp' checked={true} onChange={() => 'checked'} />
              </SwitchContainer>
            </StyledDiv>

            <StyledDiv>
              <Text variant='content' tx='accountPage.emailNotifications' left />
              <SwitchContainer>
                <ToggleSwitch toggleID='email' checked={true} onChange={() => 'checked'} />
              </SwitchContainer>
            </StyledDiv>
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

