import { useSelector } from "react-redux";
import { selectUser, selectIsLogin, selectIsRefreshing } from "../store/auth/authSelectors";

export const useAuth = () => {
  const isLogin = useSelector(selectIsLogin);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLogin,
    isRefreshing,
    user,
  };
};
