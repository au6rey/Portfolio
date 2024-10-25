import React from "react";
import { PropsWithChildren } from "react";

type ContentSectionProps = {
  title: string;
};

export const ContentSection = ({
  title,
  children,
}: PropsWithChildren<ContentSectionProps>) => {
  return (
    <section id="about" className="py-10 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-accent-foreground lg:sr-only">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </section>
  );
};
