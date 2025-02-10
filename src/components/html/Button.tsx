// Omit 제외한 새로운 타입을 만들 때
//"children"을 제외한 모든 버튼 props를 상속

type ButtonProps = {
  variant: "primary" | "secondary" | "danger";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({ variant, ...rest }: ButtonProps) => {
  return (
    <button className={"class-with-" + variant} {...rest}>
      {rest.children}
    </button>
  );
};
