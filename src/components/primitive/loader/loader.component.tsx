import React from 'react';
import { Text } from '../../primitive';
import { Spinner, SpinnerContainer, LoaderText } from './loader.component.styles';

function Loader(props: any) {
  const { text } = props;
  return (
    <SpinnerContainer hCenter vCenter>
      <Spinner />
      <LoaderText variant='small' tx={text} text={props.label} />
    </SpinnerContainer>
  );
}

export default Loader;
