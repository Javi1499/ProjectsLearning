import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit } from "../components/UI/Form";
export default function SignUp() {
  const Heading = styled.h1`
    color: black;
    text-align: center;
    margin-top: 5rem;
  `;
  return (
    <Layout>
      <div className={styles.container}>
        <Heading>Sign Up</Heading>
        <Form>
          <Field>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your name" name="name" />
          </Field>
          <Field>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              name="email"
            />
          </Field>
          <Field>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              name="password"
            />
          </Field>
          <InputSubmit type="submit" value={"Sign Up"} />
        </Form>
      </div>
    </Layout>
  );
}
