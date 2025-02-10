// import {Login} from "./Login";

import { Component } from "react";

import { ProfileProps } from "./Profile";
import { Login } from "./Login";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  return isLoggedIn ? <Component name="yohan" /> : <Login />;
};
