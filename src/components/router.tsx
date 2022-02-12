import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./form";
import Home from "./home";
import Layout from "./layout";
import NewForm from "./newForm";
import NotFound from "./notFound";

const Router = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path="/old"
      element={
        <Layout>
          <Form />
        </Layout>
      }
    />
    <Route
      path="/new"
      element={
        <Layout>
          <NewForm />
        </Layout>
      }
    />
    <Route path="*" element={<NotFound/>} />
  </Routes>
);

export default Router;
