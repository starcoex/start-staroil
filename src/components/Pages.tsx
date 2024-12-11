import React from "react";
import { FadeIn } from "./FadeIn";
import PageSideBar from "./PageSideBar";
import Container from "./Container";
import { Border } from "./Border";
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from "./Button";
import { Link } from "gatsby";

interface PagesProps {
  data: Queries.PageDataQuery;
}

const Pages = ({ data }: PagesProps) => {
  return (
    <Container className="mt-40">
      <FadeIn>
        {data.wpPage?.wpChildren?.nodes.length !== 0 ? (
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            {data?.wpPage?.title}
          </h2>
        ) : null}
      </FadeIn>
      {data.wpPage?.wpChildren?.nodes.length !== 0 ? (
        <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
          {data?.wpPage?.wpChildren?.nodes.map((children) => (
            <FadeIn key={children.id}>
              <article>
                <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                  <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                    <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                      <GatsbyImage
                        image={
                          data?.wpPage?.featuredImage?.node.localFile
                            ?.childImageSharp?.gatsbyImageData!
                        }
                        alt=""
                        className="h-40 w-40 flex-none"
                      />
                      <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                        {children.title}
                      </h3>
                    </div>
                  </div>
                  <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                    <p className="font-display text-4xl font-medium text-neutral-950">
                      <Link to={children.uri}>{children.title}</Link>
                    </p>
                    <div
                      className="mt-6 space-y-6 text-base text-neutral-600 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: children.content! }}
                    />

                    <div className="mt-8 flex">
                      <Link to={children.uri}>
                        <Button variant={"outline"}>더 보기</Button>
                      </Link>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      ) : (
        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                {data.wpPage?.title}
              </h1>
              <time
                dateTime={data.wpPage.date!}
                className="order-first text-sm text-neutral-950"
              >
                {data.wpPage?.date}
              </time>
              <div className="mt-6 text-sm font-semibold text-neutral-950">
                <span
                  dangerouslySetInnerHTML={{
                    __html: data?.wpPage?.author?.node.name!,
                  }}
                  className="text-xs text-gray-500 uppercase"
                />
              </div>
            </header>
          </FadeIn>

          <FadeIn>
            <div className="mt-24 sm:mt-32 lg:mt-40 [&>*]:mx-auto [&>*]:max-w-4xl [&>:first-child]:!mt-0 [&>:last-child]:!mb-0">
              <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: data.wpPage?.content! }}
              />
            </div>
          </FadeIn>
        </Container>
      )}
    </Container>
  );
};

export default Pages;
