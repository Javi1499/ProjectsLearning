import React, { useContext, useState } from "react";
import styles from "../styles/Home.module.css";
import Router, { useRouter } from "next/router";
import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";
import { Form, Field, InputSubmit, Error } from "../components/UI/Form";
import useValidation from "../hooks/useValidation";
import AddProductValidation from "../validation/addProductValidation";
import { FirebaseContext } from "../firebase";
import firebase from "../firebase";
export default function NewProduct() {
  const [error, setError] = useState(null);
  const Heading = styled.h1`
    color: black;
    text-align: center;
    margin-top: 5rem;
  `;
  const INITIAL_STATE = {
    name: "",
    company: "",
    // image: "",
    url: "",
    description: "",
  };
  //Hook to redirection
  const router = useRouter();
  const { user } = useContext(FirebaseContext);
  const addProduct = async () => {
    if (!user) {
      return router.push("/login");
    }

    const product = {
      name,
      company,
      url,
      description,
      votes: 0,
      comments: [],
      createdAt: Date.now(),
    };
    //Add to DB
    await firebase.addProduct(product);
    try {
    } catch (error) {
      console.log(error);
    }
  };
  const {
    values: { name, company, image, url, description },
    errors,
    handleSubmit,
    handleChange,
    handlerBlur,
  } = useValidation(INITIAL_STATE, AddProductValidation, addProduct);

  return (
    <Layout>
      <div className={styles.container}>
        <Heading>Add product</Heading>
        <Form onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>General information</legend>

            <Field>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Product name"
                name="name"
                value={name}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Field>
            {errors.name && <Error>{errors.name}</Error>}
            <Field>
              <label htmlFor="company">Comapany:</label>
              <input
                type="text"
                id="company"
                placeholder="Company name"
                name="company"
                value={company}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Field>
            {errors.company && <Error>{errors.company}</Error>}
            {/* <Field>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                name="image"
                value={image}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Field>
            {errors.image && <Error>{errors.image}</Error>} */}
            <Field>
              <label htmlFor="url">Url:</label>
              <input
                type="text"
                id="url"
                placeholder="url"
                name="url"
                value={url}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Field>
            {errors.url && <Error>{errors.url}</Error>}
          </fieldset>
          <fieldset>
            <legend>About your product</legend>
            <Field>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                placeholder="description"
                name="description"
                value={description}
                onChange={handleChange}
                onBlur={handlerBlur}
              />
            </Field>
            {errors.description && <Error>{errors.description}</Error>}
          </fieldset>
          <InputSubmit type="submit" value={"Add product"} />
        </Form>
      </div>
    </Layout>
  );
}
