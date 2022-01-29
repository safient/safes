import { ButtonComponentProps } from '../button/button.component.props';
import { ImageComponentProps } from '../image/image.component.props';
import { TextComponentProps } from '../text/text.component.props';

interface AccessSafeItem {
  /**
   * header text for the access safe item
   */
  title: TextComponentProps;

  /**
   * optional image prop for the item
   */
  image?: ImageComponentProps;

  /**
   * sub heading for the access safe item
   */
  subHeading?: TextComponentProps;

  /**
   * description for the access safe item
   */
  description?: TextComponentProps;

  /**
   * optional next action button
   */
  nextButton?: ButtonComponentProps;

  /**
   * optional previous action button
   */
  previousButton?: ButtonComponentProps;
}

export interface AccessSafeComponentProps {
  /**
   * array of access safe items
   */
  items: AccessSafeItem[];

  /**
   * active page index
   */
  pageIndex: number;
}
