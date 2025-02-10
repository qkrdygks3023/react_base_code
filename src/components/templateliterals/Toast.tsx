// position prop can be one of
// left-center, left-top, left-bottom, right-center, right-top, right-bottom,
// top-center, bottom-center, center-bottom

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position?:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>toast {position}</div>;
};
