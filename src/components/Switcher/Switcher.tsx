import { useState } from "react";
import classes from "./Switcher.module.scss";
import classNames from "classnames";

type SwitcherPropsType = {
    title: string;
    onChange?: (status: boolean) => void;
    classList?: string;
};

const Switcher = ({ title, onChange, classList }: SwitcherPropsType) => {
    const [state, setState] = useState(false);

    const clickHandle = () => {
        setState(!state);

        if (onChange) {
            onChange(!state);
        }
    };

    return (
        <div id={classes.switcher} onClick={clickHandle} className={classNames(classList, { [classes.on]: state })}>
            <button>
                <span></span>
            </button>
            <span>{title}</span>
        </div>
    );
};

export default Switcher;
