import classes from "./Header.module.scss";
import logoLigth from "../../assets/svg/logo-light.svg";
import logoDark from "../../assets/svg/logo-dark.svg";
import langLight from "../../assets/svg/lang-light.svg";
import langDark from "../../assets/svg/lang-dark.svg";
import Switcher from "../Switcher";
import { useAppDispatch, useAppSelector } from "../../store";
import classNames from "classnames";
import { DARK, LIGHT } from "../../constants/modes";
import { switchMode } from "../../store/app/appSlice";
import avatar from "../../assets/img/author-2.jpg";

const Header = () => {
    const mode = useAppSelector((state) => state.app.mode);
    const dispatch = useAppDispatch();

    const onSwitcherChange = (status: boolean) => {
        dispatch(switchMode(status ? DARK : LIGHT));
    };

    return (
        <header id={classes.header} className={classNames("container", { [classes.dark]: mode === DARK })}>
            <img id={classes.logo} src={mode === DARK ? logoDark : logoLigth} alt="Logo" />
            <menu>
                <a href="#a" className={classes.active}>
                    Personal analyses
                </a>
                <a href="#a">Courses and trainings</a>
                <a href="#a">Shop</a>
                <a href="#a">Order a consultaton</a>
            </menu>
            <img id={classes.lang} src={mode === DARK ? langDark : langLight} alt="Lang" />
            <Switcher
                classList={classes.themeSwitcher}
                title={mode === DARK ? LIGHT : DARK}
                onChange={onSwitcherChange}
            />
            <img id={classes.avatar} src={avatar} alt="Avatar" />
        </header>
    );
};

export default Header;
