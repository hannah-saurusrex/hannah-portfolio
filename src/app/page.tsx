import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="/hannah_happy.png"
          alt="Hannah McMahon software developer in denver"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-5xl font-bold">Hi, my name is <span className="text-yellow-500">Hannah</span>.</h1>
        <p className="text-xl">I&apos;m a software developer in <span className="text-yellow-500">Denver, Colorado</span>.</p>
      </main>
      <footer className="row-start-3 gap-6 flex-wrap items-center justify-center">
        <p className="text-xl underline">
          <a href="/HannahMcMahon_resume.pdf" target="_blank">Check out my resume</a>
        </p>
        <div className="flex gap-6 items-center justify-center mt-2">
        <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/mcmahonhannah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin_icon.svg"
              alt="Window icon"
              width={24}
              height={24}
            />
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/hannah-saurusrex"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github_icon.svg"
              alt="File icon"
              width={24}
              height={24}
            />
          </a>
        </div>
        
      </footer>
    </div>
  );
}
