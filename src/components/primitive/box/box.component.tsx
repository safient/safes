import React from 'react';
import { Col, Row } from 'react-grid-system';
import styled, { useTheme } from 'styled-components';
import _ from 'lodash';
import { Oval } from 'react-loader-spinner';
import { BoxComponentProps } from './box.component.props';
import { spacing } from '../../../utils';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const Box: React.FunctionComponent<BoxComponentProps> = (
  props: BoxComponentProps
) => {
  const { colors } = useTheme();

  const {
    row,
    borderRadius,
    spaceBetween,
    flex,
    hidden,
    bottom,
    children,
    color,
    height,
    width,
    maxHeight,
    maxWidth,
    hCenter,
    vCenter,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginHorizontal,
    marginVertical,
    margin,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingHorizontal,
    paddingVertical,
    padding,
    wrap,
    rightAlign,
    centerAlign,
    loading,
    style: styleOverride,
    ...rest
  } = props;

  // padding values in the four directions
  // the priority is in order as they are declared
  const paddingTopValue = paddingTop ?? paddingVertical ?? padding ?? 0;
  const paddingBottomValue = paddingBottom ?? paddingVertical ?? padding ?? 0;
  const paddingLeftValue = paddingLeft ?? paddingHorizontal ?? padding ?? 0;
  const paddingRightValue = paddingRight ?? paddingHorizontal ?? padding ?? 0;

  // padding values in the four directions
  // the priority is in order as they are declared
  const marginTopValue = marginTop ?? marginVertical ?? margin ?? 0;
  const marginBottomValue = marginBottom ?? marginVertical ?? margin ?? 0;
  const marginLeftValue = marginLeft ?? marginHorizontal ?? margin ?? 0;
  const marginRightValue = marginRight ?? marginHorizontal ?? margin ?? 0;

  //max-width
  const _maxWidth = maxWidth ?? width;

  // bottom align and right align cssProperties based on the flex direction
  const _bottomAlign = row
    ? { alignItems: 'flex-end' }
    : { justifyContent: 'flex-end' };
  const _rightAlign = row
    ? { justifyContent: 'flex-end' }
    : { alignItems: 'flex-end' };

  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: row ? 'row' : 'column',
    minHeight: 'auto',
    ...(!_.isNil(flex) ? { flex: flex } : {}),
    ...(!_.isNil(borderRadius) ? { borderRadius: `${borderRadius}rem` } : {}),
    ...(!_.isNil(color) ? { backgroundColor: colors[color] } : {}),
    ...(!_.isNil(hCenter || loading) ? { alignItems: 'center' } : {}),
    ...(!_.isNil(vCenter || loading) ? { justifyContent: 'center' } : {}),
    ...(!_.isNil(height) ? { height: `${height}rem` } : {}),
    ...(!_.isNil(width) ? { width: `${width}rem` } : {}),
    ...(!_.isNil(maxWidth) ? { maxWidth: `${_maxWidth}rem` } : {}),
    ...(!_.isNil(maxHeight) ? { maxHeight: `${maxHeight}rem` } : {}),
    ...(!_.isNil(wrap) ? { flexWrap: 'wrap' } : {}),

    ...{
      marginTop: _.isNumber(marginTopValue)
        ? `${marginTopValue}rem`
        : `${spacing[marginTopValue]}rem`,
    }, //margin top
    ...{
      marginBottom: _.isNumber(marginBottomValue)
        ? `${marginBottomValue}rem`
        : `${spacing[marginBottomValue]}rem`,
    }, //margin bottom
    ...{
      marginLeft: _.isNumber(marginLeftValue)
        ? `${marginLeftValue}rem`
        : `${spacing[marginLeftValue]}rem`,
    }, //margin left
    ...{
      marginRight: _.isNumber(marginRightValue)
        ? `${marginRightValue}rem`
        : `${spacing[marginRightValue]}rem`,
    }, //margin right

    ...{
      paddingTop: _.isNumber(paddingTopValue)
        ? `${paddingTopValue}rem`
        : `${spacing[paddingTopValue]}rem`,
    }, //padding top
    ...{
      paddingBottom: _.isNumber(paddingBottomValue)
        ? `${paddingBottomValue}rem`
        : `${spacing[paddingBottomValue]}rem`,
    }, //padding bottom
    ...{
      paddingLeft: _.isNumber(paddingLeftValue)
        ? `${paddingLeftValue}rem`
        : `${spacing[paddingLeftValue]}rem`,
    }, //padding left
    ...{
      paddingRight: _.isNumber(paddingRightValue)
        ? `${paddingRightValue}rem`
        : `${spacing[paddingRightValue]}rem`,
    }, //padding right

    ...(!!bottom ? _bottomAlign : {}),
    ...(!!rightAlign ? _rightAlign : {}),
    ...(!!centerAlign
      ? { justifyContent: 'center', alignItems: 'center' }
      : {}),

    ...(!!spaceBetween ? { justifyContent: 'space-between' } : {}),
    ...styleOverride,
  };

  const Layout: any = row ? Row : Col;

  const Base = styled(Layout)<BoxComponentProps>``;

  if (hidden) {
    return <></>;
  }

  if (loading) {
    return (
      <Base style={style} {...rest}>
        <Oval
          ariaLabel="loading-indicator"
          height={40}
          width={40}
          color={colors.primary}
        />
      </Base>
    );
  }

  return (
    <Base style={style} {...rest}>
      {children}
    </Base>
  );
};
