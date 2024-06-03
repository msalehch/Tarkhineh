import { Outlet } from "react-router-dom";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer";

function BaseLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default BaseLayout;
