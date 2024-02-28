import classes from "./Header.module.scss";
import langLight from "../../assets/svg/lang-light.svg";
import langDark from "../../assets/svg/lang-dark.svg";
import Switcher from "../Switcher";
import { useAppDispatch, useAppSelector } from "../../store";
import classNames from "classnames";
import { DARK, LIGHT } from "../../constants/modes";
import { selectIsDark, switchMode } from "../../store/app/appSlice";
import avatar from "../../assets/img/author-2.jpg";
import LogoSVG from "../SVGs/LogoSVG";

const Header = () => {
    const isDark = useAppSelector(selectIsDark);
    const dispatch = useAppDispatch();

    const onSwitcherChange = (status: boolean) => {
        dispatch(switchMode(status ? DARK : LIGHT));
    };

    return (
        <header id={classes.header} className={classNames("container", { [classes.dark]: isDark })}>
            <LogoSVG dark={isDark} />
            <menu>
                <a href="#personal_analyses" className={classes.active}>
                    Personal analyses
                </a>
                <a href="#courses_and_trainings">Courses and trainings</a>
                <a href="#shop">Shop</a>
                <a href="#order_a_consultaton">Order a consultaton</a>
            </menu>
            <img id={classes.lang} src={isDark ? langDark : langLight} alt="Lang" />
            <Switcher classList={classes.themeSwitcher} title={isDark ? LIGHT : DARK} onChange={onSwitcherChange} />
            <img id={classes.avatar} src={avatar} alt="Avatar" />
        </header>
    );
};

export default Header;
