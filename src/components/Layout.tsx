import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="relative">
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
