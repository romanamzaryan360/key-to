import classes from "./SignUp.module.scss";
import cardsDark from "../../assets/svg/cards-dark.svg";
import cardsLight from "../../assets/svg/cards-light.svg";
import { useAppSelector } from "../../store";
import { DARK } from "../../constants/modes";
import FormInput from "../FormInput";
import FormCheckbox from "../FormCheckbox";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import type { FormEvent } from "react";

const SignUp = () => {
    const mode = useAppSelector((state) => state.app.mode);
    const { width } = useWindowDimensions();

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div id={classes.signUp}>
            <div id={classes.container} className="container">
                <form onSubmit={submitHandler}>
                    <h3>Lets start</h3>
                    <h2>SIGN UP</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Dictum lobortis sit commodo ultricies vel euismod
                        tortor.
                    </p>

                    <div id={classes.formGroup}>
                        <FormInput type="email" id="email" help="Enter your valid email" placeholder="Email address" required />
                        <FormInput
                            type="password"
                            id="password"
                            help="Create a strong password"
                            placeholder="Password"
                            required
                        />
                        <FormInput
                            type="password"
                            id="password_confirmation"
                            help={width > 900 ? "Confirm your password" : "Type your new password here"}
                            placeholder="Confirm password"
                            required
                        />
                    </div>

                    <div id={classes.agreeWithTerms}>
                        <div className={classes.content}>
                            <h4>I am not a robot</h4>
                            <a href="#continue">
                                Click here tocontinue.
                                <br />
                                Terms of use
                            </a>
                        </div>
                        <FormCheckbox />
                    </div>

                    <button id={classes.submit} type="submit">
                        Sign up
                    </button>
                    <a id={classes.signIn} href="#sign-in">
                        SIGN IN
                    </a>
                </form>
                <img src={mode === DARK ? cardsDark : cardsLight} alt="Cards" />
            </div>
        </div>
    );
};

export default SignUp;
