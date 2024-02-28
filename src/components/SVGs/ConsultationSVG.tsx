import ThemableSVGProps from "../../types/ThemableSVGProps";

const ConsultationSVG = ({
    stroke = "#EADDFF",
    width = 95,
    height = 94,
    fill = "white",
    fillOpacity = 0.3,
}: ThemableSVGProps) => (
    <svg
        width="95"
        height="94"
        viewBox={`0 0 95 94`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: width + "px", height: height + "px" }}
    >
        <path
            d="M24.0371 87.2029L0.578892 46.9997L24.0371 6.79648H70.9629L94.4211 46.9997L70.9629 87.2029H24.0371Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M88.1357 70.2102L47.4995 93.4246L6.86328 70.2102L6.86328 23.7906L47.4995 0.576263L88.1357 23.7906V70.2102Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M18.3507 76.0027L47.4981 8.14253L76.6455 76.0027H18.3507Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M76.9049 75.7517L8.32695 46.9128L76.9049 18.074V75.7517Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M18.0912 75.7517L86.6691 46.9128L18.0912 18.074V75.7517Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
    </svg>
);

export default ConsultationSVG;
