import { RoutePath } from 'navigation';
import { useHistory } from 'react-router-dom';
import { Image, IconSvg, Text, Box } from 'components/primitive';
import { NameContainer, NavLabelContainer } from './menu.component.styles';
import { useStores } from 'store';
import { AnimateSharedLayout, motion } from 'framer-motion/dist/framer-motion';
export const Menu = () => {
  const history = useHistory();
  const { accountStore } = useStores();
  console.log(accountStore);

  return (
    <AnimateSharedLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <NameContainer>
          <Image name='user' rounded width={4.4} />
          <Box>
            {/* <Text variant='small' text={accountStore.safientUser.name} color='textLight' />
            <Text variant='small' text={accountStore.safientUser.email} color='textLighter' /> */}
          </Box>
        </NameContainer>
        <NavLabelContainer style={{ transition: 'height 0.5s ease' }}>
          <Box row gap={1} hCenter onClick={() => history.push(RoutePath.account)}>
            <IconSvg name='user' />
            <Text variant='small' tx='menuComponent.profile' />
          </Box>

          <Box row gap={1} hCenter onClick={() => history.push(RoutePath.login)}>
            {/* <IconSvg name='logout' /> */}
            <Text variant='small' tx='menuComponent.logout' />
          </Box>
        </NavLabelContainer>
      </motion.div>
    </AnimateSharedLayout>
  );
};
