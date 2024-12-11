import React from "react";
import useLatestBlogPostQuery from "../hooks/useLatestBlogPostQuery";
import { Link } from "gatsby";
import { Button } from "./Button";
import { GridPattern } from "./GridPattern";
import Container from "./Container";
import { FadeIn } from "./FadeIn";

const LatestBlogPost = () => {
  const { allWpPost } = useLatestBlogPostQuery();
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40 relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32">
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                최신 블로그 포스트
              </h1>
              <p
                className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none"
                dangerouslySetInnerHTML={{
                  __html: allWpPost.edges[0].node.excerpt!,
                }}
              />
              <div className="mt-8">
                <Link to={`/blog${allWpPost.edges[0].node.uri}`}>
                  <Button variant={"outline"}>더 보기</Button>
                </Link>
              </div>
            </blockquote>
          </figure>
        </FadeIn>
      </Container>
    </div>
    // <div className="px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-20 mx-auto">
    //   <div className="mx-auto max-w-7xl text-center">
    //     <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //       최신 블로그 포스트
    //     </h1>
    //     <h4 className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl mt-5">
    //       {allWpPost.edges[0].node.title}
    //     </h4>
    //     <div
    //       dangerouslySetInnerHTML={{ __html: allWpPost.edges[0].node.excerpt! }}
    //       className="mx-auto mt-6 text-lg leading- text-gray-800"
    //     />
    //     <div className="mt-8">
    //       <Link to={`/blog${allWpPost.edges[0].node.uri}`}>
    //         <Button variant={"outline"}>더 보기</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LatestBlogPost;
