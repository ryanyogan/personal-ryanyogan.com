import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hello, I&apos;m Ryan 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          My name is Ryan Yogan. I am passionate about aviation, anything with
          an engine, and engineering. I am a believer, a dreamer, and I see art
          in every facet of life.
        </p>
        <p>
          I am a builder; however, satisfaction does not come from my creations.
          My joy, insipriation, feeling of value comes from those that I may
          help with their creation. ♥️
        </p>
        <p>
          As an Engineering Leader and Software Developer. I&apos;m passionate
          about crafting exceptional user experiences, developing rock-solid
          distributed services, and nurturing a dynamic team development.
        </p>
        <p>
          My leadership style is rooted in empathy, curiosity, and cheerleading.
          I believe in the power of a growth mindset, and I strive to create an
          environemnt where everyone may learn, thrive, and have fun.
        </p>
        <p>
          From time to time I{" "}
          <a href="https://yogan.dev/" target="_blank">
            journal
          </a>
          .
        </p>
      </div>
    </section>
  );
}
