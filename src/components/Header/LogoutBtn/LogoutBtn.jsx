import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/authOperations";

import { LogoutButton } from "../index.styled";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <LogoutButton type="button" onClick={handleLogout}>
      Log Out
    </LogoutButton>
  );
};

export default LogoutBtn;
