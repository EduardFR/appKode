import { NavLink } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/Back.svg";
import styled from "styled-components";

const BackStyle = styled(Back)`
  font-size: 50px;
  margin-right: 10px;
`;

const NotFoundStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
`;

const TitleStyle = styled.h1`
  font-size: 24px;
  line-height: 28px;
  padding-bottom: 20px;
`;

const LinkStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #050510;
`;

function NotFoundProfile() {
  return (
    <NotFoundStyle>
      <TitleStyle> Профиль не найден </TitleStyle>
      <LinkStyle to="/">
        <BackStyle /> Вернуться на главную страницу
      </LinkStyle>
    </NotFoundStyle>
  );
}

export default NotFoundProfile;
