import React from 'react';
import { useTheme } from 'styled-components';
import { Image, GenericModal } from 'components/primitive';
import { LoaderComponentProps } from './notice-loader.component.props';
import { Spinner, LoaderText, HelperText, NoticeLoaderContainer } from './notice-loader.component.styles';

export const NoticeLoader: React.FC<LoaderComponentProps> = (props) => {
  const { label, spinner, helperText } = props;
  const { images } = useTheme();

  return (
    <GenericModal show={true} hide noClose>
      <NoticeLoaderContainer>
        {spinner ? <Spinner /> : <Image src={images.lockLoader} width={7} />}
        <LoaderText variant='small' {...label} />
        <HelperText variant='small' text={helperText} />
      </NoticeLoaderContainer>
    </GenericModal>
  );
};
