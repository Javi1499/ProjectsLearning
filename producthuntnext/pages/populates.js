import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
export default function Populates() {
  const Heading = styled.h1`
    color: black;
  `;
  return (
    <Layout>
      <div className={styles.container}>
        <Heading>Populates</Heading>
      </div>
    </Layout>
  );
}
