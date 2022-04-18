import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Router from "next/router";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit, Error } from "../components/UI/Form";
import useValidation from "../hooks/useValidation";
import SignUpValidation from "../validation/signUpValidation";
import firebase from "../firebase";
const SignUp = () => {
  const [error, setError] = useState(null);
  const Heading = styled.h1`
    color: black;
    text-align: center;
    margin-top: 5rem;
  `;
  const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
  };
  const signUp = async () => {
    try {
      await firebase.signUp(name, email, password);
      Router.push("/");
    } catch (error) {
      setError(error.message);
      console.error("Error", error.message);
    }
  };
  const {
    values: { name, email, password },
    errors,
    handleSubmit,
    handleChange,
    handlerBlur,
  } = useValidation(INITIAL_STATE, SignUpValidation, signUp);

  return (
    <Layout>
      <div className={styles.container}>
        <Heading>Sign Up</Heading>
        <Form onSubmit={handleSubmit} noValidate>
          <Field>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handlerBlur}
            />
          </Field>
          {errors.name && <Error>{errors.name}</Error>}
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
          <InputSubmit type="submit" value={"Sign Up"} />
        </Form>
      </div>
    </Layout>
  );
};
export default SignUp;
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

/*
 * Complete the 'findLowestStartingStair' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY jumps as parameter.
 */

// function findLowestStartingStair(jumps) {
//     // Write your code here

// }

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const jumpsCount = parseInt(readLine().trim(), 10);

//     let jumps = [];

//     for (let i = 0; i < jumpsCount; i++) {
//         const jumpsItem = parseInt(readLine().trim(), 10);
//         jumps.push(jumpsItem);
//     }

//     const result = findLowestStartingStair(jumps);

//     ws.write(result + '\n');

//     ws.end();
// }
