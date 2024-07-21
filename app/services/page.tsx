"use client";
import Link from "next/link";
import { services } from "@/content";
import { ArrowDownRightSquareIcon } from "lucide-react";

const ServicesPage = () => {
  return (
    <section className="min-h-full font-menu text-slate-400 flex flex-col justify-center py-12 xl:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full text-green-900 dark:text-green-400 flex justify-between items-center">
                <div className="text-2xl font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <Link href={service.href}>
                  <ArrowDownRightSquareIcon />
                </Link>
              </div>
              <h2 className="text-green-900 dark:text-green-50">
                {service.title}
              </h2>
              <p>{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesPage;
