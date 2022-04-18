import Link from "next/link";
import React, { useContext } from "react";
import Search from "../UI/Search";
import Navigation from "./Nav";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../UI/Button";
import { FirebaseContext } from "../../firebase";
const HeaderContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  color: #da552f;
  font-family: "Roboto Slab", serif;
  font-size: 4rem;
  line-height: 0;
  font-weight: 700;
  margin-right: 2rem;
`;
const Header = () => {
  const { user, firebase } = useContext(FirebaseContext);
  return (
    <header
      css={css`
        border-bottom: 2px solid #e1e1e1;
        padding: 1rem 0;
      `}
    >
      <HeaderContainer>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Link href="/">
            <Logo>P</Logo>
          </Link>

          <Search />
          <Navigation />
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          {user ? (
            <>
              <p
                css={css`
                  margin-right: 2rem;
                `}
              >
                Hello: {user.displayName}
              </p>
              <Button bgColor onClick={() => firebase.logOut()}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button bgColor>Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign UP</Button>
              </Link>
            </>
          )}
        </div>
      </HeaderContainer>
    </header>
  );
};

export default Header;
