import React from "react";
import { Greet } from "../Greet";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <Greet {...props} />
      {props.name}
    </div>
  );
};
