import { useEffect, useState } from "react";

const useCheckLogin = () => {
  const initialLoginValue = localStorage.getItem("loginvalue")
    ? localStorage.getItem("loginvalue") === "true"
      ? true
      : false
    : false;
  const [loginValue, setLoginValue] = useState<any>(initialLoginValue);
  const onTabChange = () => {
    if (
      document.visibilityState === "visible" &&
      localStorage.getItem("loginvalue") === "false"
    ) {
      setLoginValue(false);
      localStorage.setItem("loginvalue", JSON.stringify(false));
    }
  };
  useEffect(() => {
    document.addEventListener("visibilitychange", onTabChange);
    return () => window.removeEventListener("visibilitychange", onTabChange);
  }, []);
  const loginfunction = (value: boolean) => {
    setLoginValue(value);
    localStorage.setItem("loginvalue", JSON.stringify(value));
  };
  return [loginValue, loginfunction];
};

export default useCheckLogin;
