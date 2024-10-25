import { Badge } from "@/components/ui/badge";
import { PropsWithChildren } from "react";

type ExperienceCardProps = {
  title: string;
  date: string;
  employer: string;
  employerUrl: string;
  description: string;
  skills: string[];
};

export function ExperienceCard({
  date,
  title,
  employer,
  employerUrl,
  skills,
  children,
}: PropsWithChildren<ExperienceCardProps>) {
  return (
    <div className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-accent/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground/50 sm:col-span-2">
          {date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-accent-foreground">
            <a
              href={employerUrl}
              className="inline-flex items-baseline font-semibold leading-tight text-accent-foreground hover:text-success focus-visible:text-success  group/link text-base"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block text-accent-foreground/80"></span>
              <span>
                {title + " · "}{" "}
                <span className="inline-block">
                  {employer}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </h3>
          {children}
          <ul className="mt-2 flex flex-wrap">
            {skills.map((skill) => (
              <li key={skill} className="mr-1.5 mt-2">
                <Badge
                  key={skill}
                  variant={"secondary"}
                  className="text-xs font-medium leading-5 text-success rounded-full"
                >
                  {skill}
                </Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
