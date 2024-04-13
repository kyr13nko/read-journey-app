import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import Header from "../Header";

import { Container, Section } from "../../styles/GlobalStyles";

const Layout = () => {
  const { isLogin } = useAuth();

  return (
    <>
      {isLogin && <Header />}
      <main>
        <Container>
          <Section>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Section>
        </Container>
      </main>
    </>
  );
};

export default Layout;
