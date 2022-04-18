import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit, Error } from "../components/UI/Form";
import useValidation from "../hooks/useValidation";
import LoginValidation from "../validation/loginValidation";
import firebase from "../firebase";

export default function Login() {
  const [error, setError] = useState(null);
  const Heading = styled.h1`
    color: black;
    text-align: center;
    margin-top: 5rem;
  `;
  const INITIAL_STATE = {
    email: "",
    password: "",
  };
  const login = async () => {
    try {
      const user = await firebase.signIn(email, password);
      Router.push("/");
    } catch (error) {
      setError(error.message);
      console.error("Error", error.message);
    }
  };
  const {
    values: { email, password },
    errors,
    handleSubmit,
    handleChange,
    handlerBlur,
  } = useValidation(INITIAL_STATE, LoginValidation, login);

  return (
    <Layout>
      <div className={styles.container}>
        <Heading>Login</Heading>
        <Form onSubmit={handleSubmit} noValidate>
          <Field>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handlerBlur}
            />
          </Field>
          {errors.email && <Error>{errors.email}</Error>}
          <Field>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Your password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handlerBlur}
            />
          </Field>
          {errors.password && <Error>{errors.password}</Error>}
          {error && <p>{error}</p>}
          <InputSubmit type="submit" value={"Login"} />
        </Form>
      </div>
    </Layout>
  );
}
