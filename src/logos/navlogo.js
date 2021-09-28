const Logo = ({ colormode }) => {
  return (
    <>
      <svg
        width="165px"
        stroke={colormode === "light" ? "#000000" : "#FFFFFF"}
        fill={colormode === "light" ? "#000000" : "#FFFFFF"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1110 145"
      >
        <rect y="2.14" width="15.55" height="137.74" />
        <polygon
          y="2.14"
          points="17.6 70.58 71.44 2.14 89.72 2.14 36.15 69.9 94.59 139.88 75.45 139.88 17.6 70.58"
        />
        <path
          y="2.14"
          d="M190.6,117.17H115.4l-10.08,22.65H88.49L152.15-.06h1.7L217.6,139.82H200.68Zm-6-13.5L153.09,32.83l-31.62,70.84Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M211.65,115.21l12-8.81c6.24,11.8,20.34,19.66,34.95,19.66,18,0,32.73-9.74,32.73-23.33,0-15.47-19.74-22.9-37.34-29.56C237,66.59,218.14,58.3,218.14,37S237.2,0,261.38,0c20.42,0,34.35,11.19,39.48,24.78l-11.71,7.86c-4.44-10.34-15.55-17.34-27.94-17.34-14.78,0-27.43,9.74-27.43,22,0,13.33,15.13,18.2,32.9,25,20.68,8.37,40.25,17.94,40.25,40.07,0,23.76-22,39.23-48.45,39.23C235.83,141.7,218.23,129.9,211.65,115.21Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M317.64,2.07H361.3c26.66,0,48.45,20,48.45,44.43C409.75,69.92,388,89,361.3,89H333.19v50.85H317.64ZM394.2,46.33c0-15.89-14.78-28.88-32.9-28.88H333.19V73.59l28.11.09C379.42,73.76,394.2,61.46,394.2,46.33Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M434.56,17.37V61h56.65V76.5H434.56v47.85h65.37v15.47H419V2.07h80.92v15.3Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M594.81,139.82,556.36,86.07H530.64v53.75H515.09L515,2.07h40.67c25.55,0,46.4,19.65,46.4,43.92,0,17.86-12.22,33.24-29,38.28L614,139.82ZM556.19,73c16.4,0,29.9-12.47,29.9-27.34,0-15.89-13.67-28.2-29.9-28.2H530.55V72.91Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M707.12,105.46v34.36H617.83V2.07H654.4V105.46Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M711.85,89.74V2.07h36.83V89.66c0,11.45,9.83,19,20.25,19s20.43-7.77,20.43-19V2.07h36.82V89.74c0,31.62-25.63,53.92-57.16,53.92S711.85,121.36,711.85,89.74Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M958.32,1.9V141.18H946.7L875.86,72.57V139.9H839.29V.7h11.79l70.58,68.36V1.9Z"
          transform="translate(0.16 0.06)"
        />
        <path
          y="2.14"
          d="M1060.89,123.75h-51.44l-7,16.07h-40l64-139.46h17.35l64.08,139.46h-40.07ZM1049.27,97l-14.1-32.65L1021,97Z"
          transform="translate(0.16 0.06)"
        />
      </svg>
    </>
  );
};

export default Logo;
