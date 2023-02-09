import { useEffect, useState } from "react";

const useCheckLogin = () => {
  const intialLoginValue = localStorage.getItem("loginvalue")
    ? localStorage.getItem("loginvalue") === "true"
      ? true
      : false
    : false;
  const [loginValue, setLoginValue] = useState<any>(intialLoginValue);
  useEffect(() => {
    document.addEventListener("visibilitychange", (e) => {
      if (
        document.visibilityState === "visible" &&
        localStorage.getItem("loginvalue") === "false"
      ) {
        setLoginValue(false);
        localStorage.setItem("loginvalue", JSON.stringify(false));
      }
    });
    return () => window.removeEventListener("visibilitychange", () => {});
  }, []);
  const loginfunction = (value: boolean) => {
    setLoginValue(value);
    localStorage.setItem("loginvalue", JSON.stringify(value));
  };
  return [loginValue,loginfunction]
};

export default useCheckLogin;
