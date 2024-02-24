import { useRef, useState } from "react";
import classes from "./FormCheckbox.module.scss";
import checkbox from "../../assets/svg/checkbox.svg";
import classNames from "classnames";

type FormCheckboxPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormCheckbox = (props: FormCheckboxPropsType) => {
    const [state, setState] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        setState(!state); 

        if (inputRef.current) {
            inputRef.current.checked = !inputRef.current.checked;
        }
    };

    return (
        <div className={classes.checkbox}>
            <input type="checkbox" ref={inputRef} {...props} />
            <span onClick={handleClick} className={classNames({ [classes.active]: state })}>
                {state && <img src={checkbox} alt="Checkbox" />}
            </span>
        </div>
    );
};

export default FormCheckbox;
