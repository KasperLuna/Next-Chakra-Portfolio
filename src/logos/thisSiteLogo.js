import { useColorModeValue } from "@chakra-ui/react";
import styles from "../styles/svg.module.css";

export default function ThisSiteLogo() {
  return (
    <svg className={styles.sitelogo} viewBox="0 0 216.67 157.42">
      <path
        stroke={useColorModeValue("#000000", "#FFFFFF")}
        fill={useColorModeValue("#000000", "#FFFFFF")}
        d="M116.32,214.54,58.11,138.37v76.17H33.5V57.12H58.11v75.39l54.1-75.39h28.72L85.07,134.37l61.42,80.17Z"
        transform="translate(-33.5 -57.12)"
      />
      <path
        stroke={useColorModeValue("#000000", "#FFFFFF")}
        fill={"none"}
        d="M250.18,175.29v39.25H148.13V57.12h41.79V175.29Z"
        transform="translate(-33.5 -57.12)"
      />
    </svg>
  );
}
