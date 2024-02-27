import ThemableSVGProps from "../../types/ThemableSVGProps";

const MarathonSVG = ({
    stroke = "#EADDFF",
    width = 99,
    height = 103,
    fill = "white",
    fillOpacity = 0.3,
}: ThemableSVGProps) => (
    <svg
        width="99"
        height="103"
        viewBox={`0 0 99 103`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: width + "px", height: height + "px" }}
    >
        <path
            d="M49.7534 51.2582C49.815 44.6943 51.0873 38.2024 53.5026 32.1359C55.9791 25.9155 59.6085 20.2647 64.1827 15.5057C68.7568 10.7468 74.186 6.97289 80.1598 4.39851C85.9795 1.89054 92.2055 0.568584 98.5 0.502071L98.5 51.2582L49.7534 51.2582Z"
            fill={fill}
            fill-opacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M98.4977 51.7413C98.4361 58.3053 97.1638 64.7971 94.7486 70.8636C92.272 77.0841 88.6426 82.7349 84.0684 87.4938C79.4943 92.2528 74.0651 96.0267 68.0913 98.601C62.2716 101.109 56.0457 102.431 49.7511 102.497L49.7511 51.7413L98.4977 51.7413Z"
            fill={fill}
            fill-opacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M49.2466 51.2581C49.185 44.6941 47.9127 38.2023 45.4974 32.1358C43.0209 25.9154 39.3915 20.2646 34.8173 15.5056C30.2432 10.7467 24.814 6.97277 18.8402 4.39838C13.0205 1.89042 6.79454 0.568462 0.5 0.501949L0.500002 51.2581H49.2466Z"
            fill={fill}
            fill-opacity={fillOpacity}
            stroke={stroke}
        />
        <path
            d="M0.502343 51.7412C0.563859 58.3052 1.8362 64.797 4.25145 70.8635C6.72799 77.084 10.3574 82.7347 14.9316 87.4937C19.5057 92.2527 24.9349 96.0265 30.9087 98.6009C36.7284 101.109 42.9543 102.431 49.2489 102.497L49.2489 51.7412H0.502343Z"
            fill={fill}
            fill-opacity={fillOpacity}
            stroke={stroke}
        />
    </svg>
);

export default MarathonSVG;
