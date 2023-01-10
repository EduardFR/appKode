import styled from "styled-components";

const HomePageOfflineStyle = styled.div`
  background-color: red;
  color: white;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const OfflineTitleStyle = styled.h1`
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-left: 24px;
  margin-right: auto;
`;

const OfflineTextStyle = styled.p`
  margin-left: 24px;
  margin-right: auto;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 20px;
`;

function HomePageOffline() {
  return (
    <HomePageOfflineStyle>
      <OfflineTitleStyle>Поиск</OfflineTitleStyle>
      <OfflineTextStyle>
        Не могу обновить данные. Проверь соединение с интернетом.
      </OfflineTextStyle>
    </HomePageOfflineStyle>
  );
}

export default HomePageOffline;
