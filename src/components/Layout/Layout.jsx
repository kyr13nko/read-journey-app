import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import Header from "../Header/Header";
import Loader from "../Loader/Loader";

import { Container, Section } from "../../styles/GlobalStyles";

const Layout = () => {
  const { isLogin } = useAuth();

  return (
    <>
      {isLogin && <Header />}
      <main>
        <Container>
          <Section>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </main>
    </>
  );
};

export default Layout;
