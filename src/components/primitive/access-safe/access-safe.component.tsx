import React from 'react';
import { styled } from 'themes';
import { Button } from '../button/button.component';
import { Card } from '../card/card.component';
import { Text } from '../text/text.component';
import { Image } from '../image/image.component';
import { AccessSafeComponentProps } from './access-safe.component.props';

const Container = styled(Card)`
  max-width: 90rem !important;
  max-height: 50rem !important;
  padding: 0 !important;
`;

const Content = styled(Card)``;

const CancelButton = styled(Button)`
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  height: 4rem;
  margin: 1rem !important;
  background-color: ${({ theme: { colors } }) => colors.lightGray} !important;
  border: none !important;
  color: ${({ theme: { colors } }) => colors.black} !important;
  cursor: pointer;
  z-index: 999;
`;
const SuccessButton = styled(Button)`
  height: 4rem;
  margin: 1rem !important;
  cursor: pointer;
  z-index: 999;
`;

const Steper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

const SubContainer = styled.div``;

const Title = styled(Text)``;

export const AccessSafe: React.FC<AccessSafeComponentProps> = (
  props: AccessSafeComponentProps
) => {
  const { items, pageIndex } = props;

  const currentItem = items[pageIndex];
  const { title, subHeader, description, image, previousButton, nextButton } =
    currentItem;

  return (
    <Container>
      <Content hCenter spaceBetween paddingVertical="large">
        <Title variant="title" color="primary" {...title} />
        <Steper>
          <Card row vCenter hCenter hidden={items.length === 1}>
            <Text text="Step" />
            <Card
              marginLeft="tiny"
              borderRadius={1.5}
              paddingHorizontal="tiny"
              color="applicationBackground"
            >
              <Text text={`${pageIndex + 1} / ${items.length}`} />
            </Card>
          </Card>
        </Steper>
        {image && <Image height={7} width={7} {...image} />}
        <SubContainer>
          <Card hCenter>
            <Text variant="contentHeader" {...subHeader} />
          </Card>
          <Card hCenter>
            <Text variant="content" {...description} />
          </Card>
        </SubContainer>
      </Content>
      <Card row bottom rightAlign>
        {!previousButton && (
          <CancelButton
            label={{ text: 'Cancel' }}
            variant="ghost"
            onClick={() => {}}
          />
        )}
        {/* @ts-ignore */}
        {previousButton && <CancelButton {...previousButton} />}
        {!nextButton && (
          <SuccessButton
            label={{ text: 'Continue' }}
            variant="primary"
            onClick={() => {}}
          />
        )}
        {/* @ts-ignore */}
        {nextButton && <SuccessButton {...nextButton} />}
      </Card>
    </Container>
  );
};
