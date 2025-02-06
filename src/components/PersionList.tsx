import { Name } from "./Person.types";

type PersonList = {
  names: Name[];
};

export const PersonList = (props: PersonList) => {
  return (
    <div>
      {props.names.map((e) => {
        return (
          <h2 key={e.first}>
            {e.first} {e.last}
          </h2>
        );
      })}
    </div>
  );
};
