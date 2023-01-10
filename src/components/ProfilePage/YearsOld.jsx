import styled from "styled-components";
import pluralize from "../../helpers/pluralize";

const YearsOldStyle = styled.div`
  align-self: center;
`;

function YearsOld({ birthday }) {
  const formatBirthday = (birthday) => {
    return 2022 - new Date(birthday).getFullYear();
  };

  return (
    <YearsOldStyle>
      {formatBirthday(birthday)}{" "}
      {pluralize(formatBirthday(birthday), "год", "года", "лет")}
    </YearsOldStyle>
  );
}

export default YearsOld;
