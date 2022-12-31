import React from "react";
import "./styles.css";

type ButtonProps = {
  children: React.ReactNode;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
};

type SmallButtonProps = ButtonProps & { sm: boolean; md?: never; lg?: never };
type MediumButtonProps = ButtonProps & { md: boolean; sm?: never; lg?: never };
type LargeButtonProps = ButtonProps & { lg: boolean; sm?: never; md?: never };

const Button: React.FC<
  SmallButtonProps | MediumButtonProps | LargeButtonProps
> = ({ children, sm, md, lg }) => {
  const classes: string[] = [sm ? "sm" : "", md ? "md" : "", lg ? "lg" : ""];
  const classNames: string = classes.join(" ").trim();

  return <button className={classNames}>{children}</button>;
};

export default Button;
