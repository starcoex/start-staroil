import clsx from "clsx";
import React from "react";
import Container from "./Container";
import { FadeIn } from "./FadeIn";

export function PageIntro({
  title,
  description,
  centered = false,
}: {
  title: string;
  description: string;
  centered?: boolean;
}) {
  return (
    <Container>
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {description}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-3xl font-display text-3xl font-bold tracking-tight text-gray-900 [text-wrap:balance] sm:text-4xl",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-3xl text-xl text-neutral-600",
            centered && "mx-auto"
          )}
        ></div>
      </FadeIn>
    </Container>
  );
}
