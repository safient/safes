import { StatsCard, Text, Input, Button, Avatar, IconSvg } from 'components/primitive';
import {
  AccountContainer,
  AccountInfoContainer,
  AccountInfo,
  ProfileContainer,
  Profile,
  ProfileInfo,
  StatsCardContainer,
  AccountSettingsContainer,
  NotificationContainer,
  StyledSpan,
  DefaultSettingsContainer,
  Card,
} from './account.screen.styles';
import Demo from '../../../src/assets/images/demo.png';

export const AccountScreen = () => {
  return (
    <AccountContainer>
      {/* Account */}
      <AccountInfoContainer>
        <Text variant='contentHeader' text='Profile' left />
        <AccountInfo>
          <ProfileContainer>
            <Profile>
              <Avatar size='xLarge' flat src={Demo} />
              <ProfileInfo>
                <Text variant='contentHeader' color='textLight' text='Homo Sapien' />{' '}
                {/* <span style={{ display: 'block' }}>
                  <IconSvg name='checked' />
                </span> */}
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
        <Text variant='contentHeader' text='Settings' left />
        <Card>
          <Text variant='contentHeader' text='Notifications' left />

          <NotificationContainer>
            <StyledSpan>
              <Text variant='content' text='In app notifications ' left />
              <input type='checkbox' name='' id='' />
            </StyledSpan>

            <StyledSpan>
              <Text variant='content' text='Email notifications' left />
              <input type='checkbox' name='' id='' />
            </StyledSpan>
          </NotificationContainer>
        </Card>
      </AccountSettingsContainer>

      {/* degault settings */}
      <DefaultSettingsContainer>
        <Card>
          <Text variant='contentHeader' text='Default safe configs' left />

          <NotificationContainer>
            <Input type='text' label='Beneficiary' placeholder='DID of the beneficiary' />
          </NotificationContainer>
        </Card>
      </DefaultSettingsContainer>
    </AccountContainer>
  );
};
