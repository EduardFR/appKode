import styled from "styled-components";

const SearchInputStyle = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  border-radius: 16px;
  border-color: black;
  color: #c3c3c6;
`;

function SearchInput() {
  return (
    <SearchInputStyle type="text" placeholder="введит имя, тег, почту..." />
  );
}

export default SearchInput;
