import React, {
  useState,
  createContext,
  useContext,
} from "react";
import { sublinks } from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [locationBtn, setLocationBtn] = useState({});
  const [pageBtn, setPageBtn] = useState({
    page: "",
    links: [],
  });

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find(
      (content) => content.page === text
    );
    setPageBtn(page);
    setLocationBtn(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        locationBtn,
        pageBtn,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
