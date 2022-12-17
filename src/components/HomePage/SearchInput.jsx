import styled from "styled-components";

const SearchStyle = styled.input`
  padding: 8px 12px;
  width: 100%;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  border: none;
  background-color: #f7f7f8;
  border-radius: 0 16px 16px 0;
`;

function SearchInput() {
  return <SearchStyle type="text" placeholder="введит имя, тег, почту..." />;
}

export default SearchInput;
