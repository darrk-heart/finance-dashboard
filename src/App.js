import { useState } from "react";
import "./App.css";
import Body from "./components/Body/Body";
import Heading from "./components/Heading/Heading";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  return (
    <div className="App">
      <Heading toggleSidebar={toggleSidebar} />
      <SideBar isVisible={isSidebarVisible} onClose={closeSidebar} />
      <Body />
    </div>
  );
}

export default App;
