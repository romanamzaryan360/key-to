import type ThemableSVGProps from "../../types/ThemableSVGProps";

export type SizeType = {
    width: number;
    height: number;
};

export type SizesType = {
    desktop: SizeType;
    tablet: SizeType;
    mobile: SizeType;
};

export type CoursePropsType = {
    title: string;
    description: string;
    url: string;
    SVG: React.ComponentType<ThemableSVGProps>;
    small?: boolean;
    sizes: SizesType;
};
