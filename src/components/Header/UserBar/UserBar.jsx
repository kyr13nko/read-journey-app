import { useAuth } from "../../../hooks/useAuth";

import LogoutBtn from "../LogoutBtn/LogoutBtn";

import { Avatar, Name, User, Wrapper } from "./UserBar.styled";

const UserBar = () => {
  const { user } = useAuth();

  return (
    <Wrapper>
      <User>
        <Avatar>{user.name.charAt(0)}</Avatar>
        <Name>{user.name}</Name>
      </User>
      <LogoutBtn styleType="nav-btn" />
    </Wrapper>
  );
};

export default UserBar;
