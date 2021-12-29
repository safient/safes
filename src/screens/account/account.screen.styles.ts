import styled from 'styled-components';
import { Input, ToggleSwitch } from 'components/primitive';
import { BreakPoints } from 'utils';

export const AccountContainer = styled.section`
  width: 100%;
  padding-left: 7rem;
  top: 10%;
  left: 17%;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (max-width: ${BreakPoints.medium}) {
    padding: 0 1rem 1rem 1rem;
    position: static;
    margin-top: 10rem;
    width: 100vw;
  }
`;

export const AccountInfoContainer = styled.section`
  @media screen and (max-width: ${BreakPoints.medium}) {
    margin-top: 0.1rem;
  }
`;

export const AccountInfo = styled.section`
  margin-top: 2rem;
  padding: 4rem;
  background: white;
  width: 98.7rem;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 0.5rem;

  @media screen and (max-width: ${BreakPoints.medium}) {
    width: 100%;
  }
`;

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: 1.6rem;
  width: fit-content;

  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

export const ProfileInfo = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const StatsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${BreakPoints.medium}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.2rem;
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.2rem;
  }
`;

export const AccountSettingsContainer = styled.section`
  margin-top: 5rem;

  @media screen and (max-width: ${BreakPoints.medium}) {
    margin-top: 1.8rem;
    width: 100vw;
  }
`;

export const InputContainer = styled.section`
  display: flex;
  align-item: center;
  margin-top: 3rem;
  gap: 15.2rem;

  @media screen and (max-width: ${BreakPoints.medium}) {
    flex-direction: column;
    margin-top: 2rem;
    gap: 2rem;
    width: 100vw;
  }
`;

export const StyledDiv = styled.div`
  display: flex !important;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: ${BreakPoints.medium}) {
    display: flex !important;
    width: 22.5rem !important;
    justify-content: space-between;
  }
`;

export const SwitchContainer = styled.div`
  margin-top: -1.3rem;
`;

export const Card = styled.section`
  margin-top: 2rem;
  padding: 4rem !important;
  background: white;
  width: 98.7rem;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  border-radius: 0.5rem;

  @media screen and (max-width: ${BreakPoints.medium}) {
    padding: 2rem !important;
    width: 69.4rem;
  }

  @media screen and (max-width: ${BreakPoints.small}) {
    padding: 2rem !important;
    width: 34rem;
  }
`;

export const DefaultSettingsContainer = styled.section`
  margin-top: 6rem;
  border-radius: 0.5px;
  margin-bottom: 8rem !important;

  @media screen and (max-width: ${BreakPoints.medium}) {
    width: 34rem;
    margin-top: 1.2rem;
  }
`;

export const StyledInput = styled(Input)`
  @media screen and (max-width: ${BreakPoints.medium}) {
    width: 30rem !important;
  }
`;
