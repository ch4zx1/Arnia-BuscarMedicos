import Router from "./config/router";
import GlobalStyles from "@/assets/styles/global-styles";
import { sideBarContext } from "@/components/Context/sidebarContext";
import { useState } from "react";

function App() {
  const [sideBar, setSideBar] = useState<boolean>(true);

  return (
    <>
      <sideBarContext.Provider value={[sideBar, setSideBar]}>
        <GlobalStyles />
        <Router />
      </sideBarContext.Provider>
    </>
  );
}

export default App;