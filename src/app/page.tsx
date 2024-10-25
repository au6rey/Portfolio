import { Hero } from "@/components/hero";
import { ExperienceCard } from "@/components/experience-card";
import { MouseRadialBackground } from "@/components/mouse-position";
import { ContentSection } from "@/components/content-section";
import { profileData } from "@/lib/profile";
import { SocialLinks } from "@/components/social-links";
// import { TechnicalSkillCard } from "@/components/technical-skill-card";

export default function Home() {
  return (
    <div className="">
      <MouseRadialBackground />
      {/* <div className="sticky top-0 z-50 justify-between w-full flex  p-5 dark:bg-black bg-white px-10">
        <div className="flex items-center gap-5">
          <p className="font-semibold">AUBREY OYOOLO</p>
        </div>
        <NavBar />
      </div> */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
        >
          Skip to Content
        </a>
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-24 justify-between">
            <Hero profileData={profileData} />
            {/* <div className="pt-10 pr-10 hidden lg:block">
              <h1 className="font-semibold text-xl py-5 text-accent-foreground">
                Skills Summary
              </h1>
              {profileData.skills.map((skill) => (
                <TechnicalSkillCard
                  key={skill.skill}
                  skill={skill.skill}
                  percentage={skill.percentage}
                  tools={skill.tools}
                />
              ))}
            </div> */}
            <SocialLinks
              githubUrl={profileData.githubUrl}
              linkedInUrl={profileData.linkedInUrl}
            />
          </header>
          <main className="pt-24 lg:w-1/2 lg:py-24" id="content">
            <ContentSection title={"About"}>
              <p>{profileData.bio}</p>
            </ContentSection>
            <ContentSection title={"Experience"}>
              {profileData.experience.map((exp) => (
                <ExperienceCard
                  key={exp.title}
                  title={exp.title}
                  date={exp.date}
                  employer={exp.employer}
                  employerUrl={exp.employerUrl}
                  description={exp.description}
                  skills={exp.skills}
                >
                  <p
                    className="mt-2 text-sm leading-normal "
                    dangerouslySetInnerHTML={{
                      __html: exp.description,
                    }}
                  ></p>
                </ExperienceCard>
              ))}
            </ContentSection>
            <ContentSection title={"Education"}>
              {profileData.education.map((exp) => (
                <ExperienceCard
                  key={exp.major}
                  title={exp.major}
                  date={exp.date}
                  employer={exp.school}
                  employerUrl={exp.schoolUrl}
                  description={exp.description}
                  skills={exp.coursework}
                >
                  <p className="mt-2 text-sm leading-normal ">
                    {exp.description}
                  </p>
                </ExperienceCard>
              ))}
            </ContentSection>
          </main>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
