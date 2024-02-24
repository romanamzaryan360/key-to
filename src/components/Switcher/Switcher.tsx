import { useState } from "react";
import classes from "./Switcher.module.scss";

type SwitcherPropsType = {
    title: string;
    onChange?: (status: boolean) => void;
};

const Switcher = ({ title, onChange }: SwitcherPropsType) => {
    const [state, setState] = useState(false);

    const clickHandle = () => {
        setState(!state);

        if (onChange) {
            onChange(!state);
        }
    }

    return (
        <div id={classes.switcher} onClick={clickHandle} className={state ? classes.on : ""}>
            <button>
                <span></span>
            </button>
            <span>{title}</span>
        </div>
    );
};

export default Switcher;
