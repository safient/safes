import styled from 'styled-components';

export const AccountContainer = styled.section`
  width: 100%;
  padding-left: 7rem;
  top: 10%;
  left: 17%;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const AccountInfoContainer = styled.section``;

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const Profile = styled.div`
  display: flex;
  gap: 1.6rem;
  width: fit-content;
`;

export const ProfileInfo = styled.span`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const AccountInfo = styled.section`
  margin-top: 2rem;
  padding: 4rem;
  background: white;
  width: 987px;
  box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
  border-radius: 5px;
`;

export const StatsCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AccountSettingsContainer = styled.section`
  margin-top: 5rem;
`;

export const StyledSpan = styled.span`
  display: inline-flex !important;
  align-items: center;
  justify-content: baseline;
  gap: 3rem;
`;

export const Card = styled.section`
  margin-top: 2rem;
  padding: 4rem !important;
  background: white;
  width: 987px;
  box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
  border-radius: 5px;
`;

export const NotificationContainer = styled.section`
  display: flex;
  align-item: center;
  margin-top: 6rem;
  gap: 15.2rem;
`;

export const DefaultSettingsContainer = styled.section`
  margin-top: 6rem;
  box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.4);
  border-radius: 5px;
`;
