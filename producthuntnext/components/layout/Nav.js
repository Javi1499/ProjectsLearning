import Link from "next/link";
import React, { useContext } from "react";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../firebase";

const Nav = styled.nav`
  padding-left: 2rem;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: #1d1d1d;
    font-family: "PT Sans", sans-serif;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const Navigation = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <Nav>
      <Link href="/">Home</Link>
      <Link href="/populates">Popular</Link>
      {user && <Link href="/new-product">Add product</Link>}
    </Nav>
  );
};

export default Navigation;
