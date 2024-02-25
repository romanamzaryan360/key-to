import Header from "./components/Header";
import { useAppSelector } from "./store";
import { DARK } from "./constants/modes";
import { useEffect } from "react";
import GetStarted from "./components/GetStarted";
import SignUp from "./components/SignUp";
import FindPartner from "./components/FindPartner";
import TrainingBanner from "./components/TrainingBanner";
import Courses from "./components/Courses";
import Author from "./components/Author";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
    const mode = useAppSelector((state) => state.app.mode);

    useEffect(() => {
        if (mode === DARK) {
            document.body.classList.add(DARK);
        } else {
            document.body.classList.remove(DARK);
        }
    }, [mode]);

    return (
        <div id="app">
            <Navbar />
            <Header />
            <GetStarted />
            <SignUp />
            <FindPartner />
            <TrainingBanner />
            <Courses />
            <Author />
            <Footer />
        </div>
    );
};

export default App;
