import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Container from "../components/Container";
import { Gradient } from "../components/Gradient";
import Navbar from "../components/Navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        Starcoex
        <Navbar />
      </Container>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
