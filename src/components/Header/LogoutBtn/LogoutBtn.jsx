import { useDispatch } from "react-redux";
import { logout } from "../../../store/auth/authOperations";
import { LogoutBurgerButton, LogoutNavButton } from "./LogoutBtn.styled";

const LogoutBtn = ({ styleType }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {styleType === "nav-btn" && (
        <LogoutNavButton type="button" onClick={handleLogout}>
          Log Out
        </LogoutNavButton>
      )}
      {styleType === "burger-btn" && (
        <LogoutBurgerButton type="button" onClick={handleLogout}>
          Log Out
        </LogoutBurgerButton>
      )}
    </>
  );
};

export default LogoutBtn;
