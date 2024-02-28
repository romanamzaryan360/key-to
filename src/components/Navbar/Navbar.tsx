import classes from "./Navbar.module.scss";
import main from "../../assets/svg/navbar-main.svg";
import chat from "../../assets/svg/navbar-chat.svg";
import search from "../../assets/svg/navbar-search.svg";
import manu from "../../assets/svg/navbar-menu.svg";

const Navbar = () => {
    return (
        <div id={classes.navbar}>
            <button>
                <span>3</span>
                <img src={main} alt="Main" />
            </button>
            <button>
                <span>3</span>
                <img src={chat} alt="Chat" />
            </button>
            <button>
                <img src={search} alt="Search" />
            </button>
            <button>
                <img src={manu} alt="Menu" />
            </button>
        </div>
    );
};

export default Navbar;
