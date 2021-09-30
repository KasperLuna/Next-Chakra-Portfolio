import { useRouter } from "next/router";

export default function AxiePopup() {
  const router = useRouter();
  const test = () => {
    window.open(
      `${window.location.origin}/axie`,
      "Axie Counter",
      "width=310,height=435"
    );
    router.push("/");
  };
  return <>{typeof window !== "undefined" ? test() : null}</>;
}
