import styled from "styled-components";
import { ReactComponent as StarSVG } from "../../assets/Star.svg";
import { formatBirthday } from "../../helpers/formatBirthday";

const StarStyle = styled(StarSVG)`
  margin-right: 14px;
`;

const BirthdayStyle = styled.div`
  display: flex;
  align-items: center;
`;

function Birthday({ birthday }) {
  return (
    <BirthdayStyle>
      <StarStyle />
      {formatBirthday(birthday)}
    </BirthdayStyle>
  );
}

export default Birthday;
