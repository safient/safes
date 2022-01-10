import React from 'react';
import { useTheme } from 'styled-components';
import { Image, GenericModal } from 'components/primitive';
import { LoaderComponentProps } from './notice-loader.component.props';
import { Spinner, LoaderText, HelperText, NoticeLoaderContainer } from './notice-loader.component.styles';

export const NoticeLoader: React.FC<LoaderComponentProps> = (props) => {
  const { label, spinner, helperText, IconName } = props;
  const { images } = useTheme();
  const url = IconName ? images[IconName] : images.lockLoader;

  return (
    <GenericModal show={true} hide noClose>
      <NoticeLoaderContainer>
        {spinner ? <Spinner /> : <Image src={url} width={7} />}
        <LoaderText variant='small' {...label} />
        <HelperText variant='small' {...helperText} />
      </NoticeLoaderContainer>
    </GenericModal>
  );
};
