import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-[65vh] bg-[#F4EEDF] text-[#111111] flex items-center"
      >
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-10 py-20">
          <div className="border-l-[3px] border-[#00D6C9] pl-6 sm:pl-10 max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#111111]/70">
              404 · Page Not Found
            </p>
            <h1 className="font-serif text-4xl sm:text-6xl font-medium leading-[1.05]">
              This page is blank.
            </h1>
            <p className="text-base leading-relaxed text-[#111111]/75">
              The essay or section you are looking for isn’t here. You can
              return to the homepage or browse all 24 writings in the archive.
            </p>
            <div className="pt-2">
              <Link
                href="/#archive"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#111111] text-[#F4EEDF] text-xs font-medium uppercase tracking-[0.16em] hover:bg-[#00D6C9] hover:text-[#111111] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Return to Archive</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
