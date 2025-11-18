import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export const UserContext = createContext();

export default function App(){
  const [isDark, setIsDark] = useState(true);

  return <>
    <UserContext.Provider value={{isDark, setIsDark}}>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
  </>
}