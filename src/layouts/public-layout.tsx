import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="w-full">
      {/* {handler to store user data} */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicLayout;
