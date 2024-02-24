import classNames from "classnames";
import classes from "./Button.module.scss";

type ButtonPropsType = {
    children?: string;
    type?: "light" | "dark";
};

const Button = ({ children, type }: ButtonPropsType) => (
    <button className={classNames(classes.button, { [classes.dark]: type === "dark" })}>{children}</button>
);

export default Button;
