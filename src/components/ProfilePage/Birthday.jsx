import styled from "styled-components";
import { ReactComponent as StarSVG } from "../../assets/Star.svg";

const StarStyle = styled(StarSVG)`
  margin-right: 14px;
`;

const BirthdayStyle = styled.div`
  align-self: center;
`;

function Birthday({ birthday }) {
  const formatBirthday = (birthday) => {
    return new Date(birthday).toLocaleString("ru", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <BirthdayStyle>
      <StarStyle />
      {formatBirthday(birthday)}
    </BirthdayStyle>
  );
}

export default Birthday;
