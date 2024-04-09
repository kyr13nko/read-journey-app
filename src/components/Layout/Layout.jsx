import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import Header from "../Header";

import { Container } from "../../styles/GlobalStyles";

const Layout = () => {
  const { isLogin } = useAuth();

  return (
    <>
      {isLogin && <Header />}
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
