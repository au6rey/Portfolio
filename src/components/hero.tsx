"use client";
import { ProfileData } from "@/lib/profile";
import Image from "next/image";
import profilePic from "@/app/images/profile.jpeg";

type HeroProps = {
  profileData: ProfileData;
};

export function Hero({ profileData }: HeroProps) {
  return (
    <div className="flex flex-col mt-10">
      <Image
        className="rounded-sm mb-5"
        src={profilePic}
        alt={profileData.name}
        width={200}
        height={200}
      />

      <h1 className="text-4xl font-bold tracking-tight text-accent-foreground/90 sm:text-5xl">
        <a href="/">{profileData.name}</a>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-accent-foreground/90 sm:text-xl">
        {profileData.title}
      </h2>
      <p className="mt-4 max-w-xs leading-normal">{profileData.summary}</p>
    </div>
  );
}
