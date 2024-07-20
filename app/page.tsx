import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div>
        <div className="space-y-6">
          <h1 className="font-menu text-green-500 text-lg ">Hi, my name is</h1>
          <div className="text-6xl text-slate-900 dark:text-green-50 font-semibold space-y-6">
            <h2>Joni Haryono.</h2>
            <h3 className="block text-6xl font-semibold text-slate-400">
              I craft things for the web.
            </h3>
            <p className="text-lg font-normal text-slate-400 w-[600px]">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products for my clients as
              Freelancer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
