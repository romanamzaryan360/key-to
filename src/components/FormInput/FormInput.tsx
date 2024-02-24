import classes from "./FormInput.module.scss";

type FormInputPropsType = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    help: string;
};

const FormInput = ({ id, help, ...args }: FormInputPropsType) => {

    return (
        <div className={classes.formInput}>
            <input id={id} {...args} />
            <label htmlFor={id}>{help}</label>
        </div>
    );
};

export default FormInput;
