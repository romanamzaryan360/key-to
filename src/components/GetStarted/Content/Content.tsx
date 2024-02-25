import Button from "../../Button";

type ContentPropsType = {
    id?: string;
    classList?: string;
};

const Content = ({ id, classList }: ContentPropsType) => {
    return (
        <div id={id} className={classList}>
            <p>
                "Key To" is a unique self-discovery tool that is based on researching your date of birth. We know that
                the day, month and year you came into this world, carries the hidden code of your destiny. Your date of
                birth is a unique key that unlocks your true self.
            </p>
            <p>
                Register and enter your date of birth to receive in depth personality analysis and unique tips for your
                development. Discover areas where you can succeed in and learn about potential obstacles on your way.
            </p>
            <Button type="dark">Get Started</Button>
        </div>
    );
};

export default Content;
