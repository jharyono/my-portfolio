import { FileDownIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div>
        <div className="space-y-6">
          <span className="font-menu text-sky-700 dark:text-sky-400 text-lg ">
            Hi, my name is
          </span>
          <div className="font-semibold space-y-6">
            <h1>Joni Haryono.</h1>
            <h3 className="block text-6xl font-semibold text-slate-500 dark:text-slate-400">
              I craft things for the web.
            </h3>
            <p className="text-lg font-normal text-slate-500 dark:text-slate-400 w-[600px]">
              I’m a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences. Currently, I’m focused
              on building accessible, human-centered products for my clients as
              Freelancercle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
