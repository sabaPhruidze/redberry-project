import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};
const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-redberry-background">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
