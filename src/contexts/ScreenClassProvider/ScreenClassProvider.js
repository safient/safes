import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScreenClass } from '../../components/primitiveComponents/layouts/layoutUtils/gridUtils';
import { getConfiguration } from '../../components/primitiveComponents/layouts/layoutUtils/gridConfig';

const Div = 'div';

export const NO_PROVIDER_FLAG = 'NO_PROVIDER_FLAG';

export const ScreenClassContext = React.createContext(NO_PROVIDER_FLAG);

const ScreenClassProvider = ({
  useOwnWidth,
  children,
  fallbackScreenClass,
}) => {
  const screenClassRef = useRef();
  const [mounted, setMounted] = useState(false);
  const detectedScreenClass = useScreenClass(
    screenClassRef,
    fallbackScreenClass
  );
  const { defaultScreenClass } = getConfiguration();

  const screenClass = mounted
    ? detectedScreenClass
    : fallbackScreenClass || defaultScreenClass;

  useEffect(() => setMounted(true), []);

  return (
    <ScreenClassContext.Provider value={screenClass}>
      {useOwnWidth ? (
        <Div ref={useOwnWidth ? screenClassRef : null}>{children}</Div>
      ) : (
        <>{children}</>
      )}
    </ScreenClassContext.Provider>
  );
};

ScreenClassProvider.propTypes = {
  /**
   * Children of the ScreenClassProvider.
   *
   */
  children: PropTypes.node.isRequired,
  /**
   * Boolean to determine whether own width should be used as source.
   * When provided, the screen class is derived from own dimensions instead of the window.
   */
  useOwnWidth: PropTypes.bool,
  /**
   * Screen class to use when it cannot be determined otherwise.
   * Useful for server side rendering.
   */
  fallbackScreenClass: PropTypes.oneOf([
    null,
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
  ]),
};

ScreenClassProvider.defaultProps = {
  useOwnWidth: false,
  fallbackScreenClass: null,
};

export default ScreenClassProvider;
