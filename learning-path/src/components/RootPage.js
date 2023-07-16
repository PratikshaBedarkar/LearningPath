import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
const RootPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
