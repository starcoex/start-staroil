import Container from "./Container";
import React from "react";
import { FadeIn, FadeInStagger } from "./FadeIn";
import { Border } from "./Border";
import testimage from "../images/2.jpg";

const team = [
  {
    title: "Leadership",
    people: [
      {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        image: { src: testimage },
      },
      {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        image: { src: testimage },
      },
      {
        name: "Dries Vincent",
        role: "Partner & Business Relations",
        image: { src: testimage },
      },
    ],
  },
  {
    title: "Team",
    people: [
      {
        name: "Chelsea Hagon",
        role: "Senior Developer",
        image: { src: testimage },
      },
      {
        name: "Emma Dorsey",
        role: "Senior Designer",
        image: { src: testimage },
      },
      {
        name: "Leonard Krasner",
        role: "VP, User Experience",
        image: { src: testimage },
      },
      {
        name: "Blake Reid",
        role: "Junior Copywriter",
        image: { src: testimage },
      },
      {
        name: "Kathryn Murphy",
        role: "VP, Human Resources",
        image: { src: testimage },
      },
      {
        name: "Whitney Francis",
        role: "Content Specialist",
        image: { src: testimage },
      },
      {
        name: "Jeffrey Webb",
        role: "Account Coordinator",
        image: { src: testimage },
      },
      {
        name: "Benjamin Russel",
        role: "Senior Developer",
        image: { src: testimage },
      },
      {
        name: "Angela Fisher",
        role: "Front-end Developer",
        image: { src: testimage },
      },
    ],
  },
];

export function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <img
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}
