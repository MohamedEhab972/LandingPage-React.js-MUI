import { createContext } from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const langContext = createContext({});
export default function LangContextProvider({ children }: any) {
  const [lang, setlang] = useState<string>(Cookies.get("i18next") || "en");

  useEffect(() => {
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    document
      .getElementsByTagName("html")[0]
      .setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  }, [lang]);
  return (
    <langContext.Provider value={{ lang, setlang }}>
      {children}
    </langContext.Provider>
  );
}
