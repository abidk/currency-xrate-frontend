import React from "react";
import Router from "next/router";
import { isLoggedIn } from "../utils/authentication";
import { isClientSide } from "../utils/environment";

const withAuth = (AuthComponent) => (props) => {
  if (isClientSide && !isLoggedIn()) {
    Router.push("/login");
    return null;
  }

  return <AuthComponent {...props} />;
};

export default withAuth;
