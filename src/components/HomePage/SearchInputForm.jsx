import { SlMagnifier } from "react-icons/sl";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const SearchInputStyle = styled.div`
  display: flex;
  width: 98%;
  margin-left: 16px;
  margin-right: 16px;
  background-color: #f7f7f8;
  border-radius: 16px;
`;
const Magnifier = styled.div`
  padding-left: 10px;
  padding-right: 5px;
  color: #c3c3c6;
  font-size: 20px;
  align-self: center;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

function SearchInputForm() {
  return (
    <SearchInputStyle>
      <Magnifier>
        <SlMagnifier />
      </Magnifier>
      <SearchInput />
    </SearchInputStyle>
  );
}

export default SearchInputForm;
