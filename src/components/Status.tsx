type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loding...";
  } else if (props.status === "success") {
    message = "Data fetched successfully!";
  } else {
    message = "Failed to fetch data";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
