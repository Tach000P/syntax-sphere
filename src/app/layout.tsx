import { FC, PropsWithChildren } from "react";
import Header from "@/components/Header/Header";
import "./styles/globals.scss";
import Footer from "@/ui/Footer/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo_icon.ico" />
      </head>
      <body>
        <main className="main">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Layout;
