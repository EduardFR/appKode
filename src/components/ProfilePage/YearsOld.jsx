import styled from "styled-components";
import pluralize from "../../helpers/pluralize";

const YearsOldStyle = styled.div`
  align-self: center;
`;

function YearsOld({ birthday }) {
  const formatBirthday = (birthday) => {
    const year = new Date(birthday).toLocaleString("ru", {
      year: "numeric",
    });
    return 2022 - year;
  };

  return (
    <YearsOldStyle>
      {pluralize(formatBirthday(birthday), ["год", "года", "лет"])}
    </YearsOldStyle>
  );
}

export default YearsOld;
