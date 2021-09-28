import styles from "../styles/logo.module.css";

const Luna = ({ colormode }) => {
  return (
    <>
      <svg
        stroke={colormode === "light" ? "#000000" : "#FFFFFF"}
        viewBox="0 0 490.06 143.3"
      >
        <path
          className={styles.luna}
          d="M96.12,108.46v34.36H6.83V5.07H43.4V108.46Z"
          transform="translate(-6.83 -3.36)"
        />
        <path
          className={styles.luna}
          d="M100.85,92.74V5.07h36.83V92.66c0,11.45,9.83,19,20.25,19s20.43-7.77,20.43-19V5.07h36.82V92.74c0,31.62-25.63,53.92-57.16,53.92S100.85,124.36,100.85,92.74Z"
          transform="translate(-6.83 -3.36)"
        />
        <path
          className={styles.luna}
          d="M347.32,4.9V144.18H335.7L264.86,75.57V142.9H228.29V3.7h11.79l70.58,68.36V4.9Z"
          transform="translate(-6.83 -3.36)"
        />
        <path
          className={styles.luna}
          d="M449.89,126.75H398.45l-7,16.07h-40l64-139.46H432.8l64.08,139.46H456.81ZM438.27,100l-14.1-32.65L410,100Z"
          transform="translate(-6.83 -3.36)"
        />
      </svg>
    </>
  );
};

export default Luna;
