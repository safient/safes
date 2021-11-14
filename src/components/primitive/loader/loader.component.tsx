import React from 'react';
import { LoaderComponentProps } from './loader.component.props';
import { Spinner, SpinnerContainer, LoaderText } from './loader.component.styles';

export const Loader: React.FC<LoaderComponentProps> = (props) => {
  const { label } = props;
  return (
    <SpinnerContainer hCenter vCenter>
      <Spinner />
      <LoaderText variant='small' {...label} />
    </SpinnerContainer>
  );
};
