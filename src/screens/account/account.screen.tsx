import { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, Text } from '../../components/primitive';
import { accountService } from '../../services';
import { stores } from '../../store';
import { AccountScreenContainer, Title } from './account.screen.styles';

export const AccountScreen = observer(() => {
  const login = async () => console.log(await accountService.login());

  return (
    <AccountScreenContainer>
      <Title variant='contentHeader' tx='common.account' />
      <Card>
            <Text variant='contentHeader' tx='common.profile' />
            <br />
            <Text variant='contentHeader' text='Address' />
            <Text variant='content' text={stores.accountStore.address} />
            <br />
            <Text variant='contentHeader' text='Balance' />
            <Text variant='content' text={stores.accountStore.balance} />
            <br />
            <br />
            <br />
            <br />
          
              <>
                {stores.accountStore.web3User !== undefined ? (
                  <>
                    <Text variant='title' text='Login Details' />
                    <br />
                    <Text variant='contentHeader' text='Name' />
                    <Text variant='content' text={stores.accountStore.web3User?.name} />
                    <br />
                    <Text variant='contentHeader' text='Email' />
                    <Text variant='content' text={stores.accountStore.web3User?.email} />
                  </>
                ) : (
                  <Text
                    variant='small'
                    text='Account details not found'
                  />
                )}
              </>
     
        
      </Card>
    </AccountScreenContainer>
  );
});

window.ethereum &&
  window.ethereum.on('chainChanged', () => {
    setTimeout(() => {
       accountService.login();
    }, 1);
  });

window.ethereum &&
  window.ethereum.on('accountsChanged', () => {
    setTimeout(() => {
      accountService.login();
    }, 1);
  });

export default AccountScreen;