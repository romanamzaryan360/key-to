import { useEffect, useState } from "react";
import {
    DESKTOP_DEVICE,
    DESKTOP_MIN_SIZE,
    MOBILE_DEVICE,
    MOBILE_MIN_SIZE,
    TABLET_DEVICE,
    TABLET_MIN_SIZE,
    UNSAFE_MOBILE_DEVICE,
} from "../constants/sizes";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

type DEVICE = typeof DESKTOP_DEVICE | typeof TABLET_DEVICE | typeof MOBILE_DEVICE | typeof UNSAFE_MOBILE_DEVICE;

const getDeviceByWidth = (width: number): DEVICE => {
    if (width >= DESKTOP_MIN_SIZE) {
        return DESKTOP_DEVICE;
    }

    if (width >= TABLET_MIN_SIZE) {
        return TABLET_DEVICE;
    }

    if (width >= MOBILE_MIN_SIZE) {
        return MOBILE_DEVICE;
    }

    return UNSAFE_MOBILE_DEVICE;
};

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [device, setDevice] = useState(getDeviceByWidth(windowDimensions.width));

    useEffect(() => {
        function handleResize() {
            const windowDimensions = getWindowDimensions();
            setWindowDimensions(windowDimensions);
            setDevice(getDeviceByWidth(windowDimensions.width));
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { width } = windowDimensions;

    return { width, device };
}
