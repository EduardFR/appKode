import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import HomePage from "./components/HomePage/HomePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile/:id" element={<ProfilePage />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
