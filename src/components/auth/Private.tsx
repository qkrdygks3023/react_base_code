// import {Login} from "./Login";

import { Component } from "react";
import { Login } from "./login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  return isLoggedIn ? <Component name="yohan" /> : <Login />;
};
