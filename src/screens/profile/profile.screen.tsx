import { useCallback, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Card, Text } from '../../components/primitive';
import { accountService } from '../../services';
import { stores } from '../../store';

export const ProfileScreen = observer(() => {
  const login = async () => await accountService.connectAccount();

  return (
    <>
      <Card>
        {stores.accountStore.address === undefined ? (
          <Button label={{ text: 'Connect' }} variant='primary' onClick={login} color='primaryGradient' />
        ) : (
          <>
            <br />
            <Button label={{ text: 'Disconnect' }} variant='primary' onClick={logoutOfWeb3Modal} color='primaryGradient'/>
            <br />
            <br />
            <br />
            <br />
            <Text variant='title' text='Wallet Details' />
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
            {stores.accountStore.chainId == 31337 ||
            stores.accountStore.chainId == 1 ||
            stores.accountStore.chainId == 4 ? (
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
                    text='Sign the message & wait for a few seconds to log in... if not logged in, please register!'
                  />
                )}
              </>
            ) : (
              <>
                <Text variant='title' text='Select supported network!' />
                <br />
                <br />
                <Button label={{ text: 'Mainnet' }} variant='primary' onClick={() => changeNetwork('0x1')} />
                <br />
                <Button label={{ text: 'Rinkeby' }} variant='primary' onClick={() => changeNetwork('0x4')} />
                <br />
                <Button label={{ text: 'Localhost' }} variant='primary' onClick={() => changeNetwork('0x31337')} />
              </>
            )}
          </>
        )}
      </Card>
    </>
  );
});

const logoutOfWeb3Modal = async () => {
  await accountService.web3Modal.clearCachedProvider();
  setTimeout(() => {
    window.location.reload();
  }, 1);
};

const changeNetwork = async (network: string) => {
  if (window.ethereum) {
    try {
      await window.ethereum.enable();
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: network }],
      });
    } catch (error) {
      console.error(error);
    }
  }
};

window.ethereum &&
  window.ethereum.on('chainChanged', () => {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  });

window.ethereum &&
  window.ethereum.on('accountsChanged', () => {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  });

export default ProfileScreen;