import { createContext, useState } from "react";

export let countercontext = createContext(0);

export function CounterProvider(props) {
  let [index, setindex] = useState(0);
  let [username, setusername] = useState("sayed");
  let [token, setToken] = useState(() => localStorage.getItem("token") || "");

  return (
    <>
      <countercontext.Provider value={{ index, username, token, setToken }}>
        {props.children}
      </countercontext.Provider>
    </>
  );
}
