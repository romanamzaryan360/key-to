import ThemableSVGProps from "../../types/ThemableSVGProps";

const DcsSVG = ({
    stroke = "#EADDFF",
    width = 68,
    height = 101,
    fill = "white",
    fillOpacity = 0.3,
}: ThemableSVGProps) => (
    <svg
        width="68"
        height="101"
        viewBox={`0 0 68 101`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: width + "px", height: height + "px" }}
    >
        <path
            d="M0.5 65.9306C0.5 85.0228 15.9773 100.5 35.0695 100.5H67.5V64.8611C67.5 46.3596 52.5015 31.3611 34 31.3611C15.4984 31.3611 0.5 46.3596 0.5 64.8611V65.9306Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M67.5001 35.0694C67.5001 15.9772 52.0229 0.5 32.9307 0.5H0.500168V36.1389C0.500168 54.6404 15.4986 69.6389 34.0001 69.6389C52.5017 69.6389 67.5001 54.6404 67.5001 36.1389V35.0694Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M53.3346 50.5C53.3346 61.0655 44.6834 69.6389 34.0013 69.6389C23.3191 69.6389 14.668 61.0655 14.668 50.5C14.668 39.9345 23.3191 31.3611 34.0013 31.3611C44.6834 31.3611 53.3346 39.9345 53.3346 50.5Z"
            fill={fill}
            fillOpacity={fillOpacity}
            stroke={stroke}
        />
    </svg>
);

export default DcsSVG;
