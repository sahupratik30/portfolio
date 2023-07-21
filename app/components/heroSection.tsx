import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-center landing-heading lg:text-left drop-shadow">
          Hello I&apos;m <span className="gradient-text">Pratik Sahu!</span>
        </h1>

        <p className="text-center landing-para lg:text-left dark:text-gray-400">
          Frontend Engineer | Crafting exceptional user experiences
        </p>

        <div className="flex flex-col items-center justify-center gap-4 s:flex-row lg:justify-start">
          <Link
            href="/projects"
            className="w-56 px-8 py-3 text-base font-medium text-center text-white rounded-full sm:text-lg gradient-bg"
          >
            My work
          </Link>

          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1c__vJEc9EykCijVZFGS_20qGapyX-rXh/view"
            className="w-56 px-8 py-3 text-base font-medium text-center text-white rounded-full sm:text-lg gradient-bg"
          >
            Download Resume
          </Link>
        </div>
      </div>

      <Image
        src="/images/hero.png"
        width={455}
        height={455}
        priority={true}
        alt="Boy standing with hands folded, wearing orange hoody and purple pants"
        className="hidden rounded-lg lg:block"
      />
    </div>
  );
};

export default HeroSection;
