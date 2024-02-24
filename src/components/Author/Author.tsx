import classes from "./Author.module.scss";
import author from "../../assets/img/author.jpg";
import { useAppSelector } from "../../store";
import classNames from "classnames";
import { DARK } from "../../constants/modes";

const Author = () => {
    const mode = useAppSelector((state) => state.app.mode);

    return (
        <div id={classes.author} className={classNames("container", { [classes.dark]: mode === DARK })}>
            <div id={classes.content}>
                <h2>
                    Alexey Kapustin <br /> The founder of KeyTo project
                </h2>
                <p>
                    Alexey Kapustin is the author of the unique methodology of the Destiny Cognition System. After years
                    of research and practice, he developed this system to help people better understand their destiny
                    and realize their potential. His mission is to help people succeed in life and build harmonious
                    relationships.
                </p>
            </div>
            <img src={author} alt="Author" />
        </div>
    );
};

export default Author;
